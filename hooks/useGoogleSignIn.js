import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { useSelector, useDispatch } from "react-redux";
import { Platform } from "react-native";

import { signInUser, userDeleted, removeIdToken } from "../features/userSlice";
import { CLIENT_ID } from "../config/";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

let clientId;

if (process.env.NODE_ENV === "development") {
  clientId = CLIENT_ID.web;
} else {
  clientId = CLIENT_ID[Platform.OS];
}

const useGoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userFetchStatus = useSelector((state) => state.user.status);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId,
  });

  useEffect(() => {
    if (response?.type === "success" && !isLoading) {
      setIsLoading(true);

      const { id_token: idToken } = response.params;
      const processUserSignIn = async () => {
        try {
          await dispatch(signInUser(idToken));
        } catch (err) {
          showErrorInDevelopment("failed sign in user ", err);
          dispatch(userDeleted());
          await dispatch(removeIdToken());
        } finally {
          setIsLoading(true);
        }
      };

      processUserSignIn();
    }
  }, [response, userFetchStatus, isLoading, dispatch]);

  return { userFetchStatus, promptAsync };
};

export default useGoogleSignIn;
