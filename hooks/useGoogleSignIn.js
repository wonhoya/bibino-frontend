import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import { EXPO_CLIENT_ID } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { Platform } from "react-native";

import { signInUser, userDeleted, userStatusSet } from "../features/userSlice";
import { removeIdToken, tokenStatusSet } from "../features/tokenSlice";
import ASYNC_STATUS from "../constants/asyncStatus";
import { CLIENT_ID } from "../config/";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

let clientId;

if (process.env.NODE_ENV === "development") {
  clientId = CLIENT_ID.web;
} else {
  clientId = CLIENT_ID[Platform.OS];
}

let isLoading = false;

const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const userFetchStatus = useSelector((state) => state.user.status);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId,
  });

  useEffect(() => {
    if (response?.type === "success" && !isLoading) {
      isLoading = true;
      const { id_token: idToken } = response.params;

      const processUserSignIn = async () => {
        try {
          await dispatch(signInUser(idToken));
        } catch (err) {
          showErrorInDevelopment(err);
          dispatch(userDeleted());
          await dispatch(removeIdToken());
        } finally {
          dispatch(userStatusSet(ASYNC_STATUS.IDLE));
          dispatch(tokenStatusSet(ASYNC_STATUS.IDLE));
          isLoading = false;
        }
      };

      processUserSignIn();
    }
  }, [response, userFetchStatus, dispatch]);

  return { userFetchStatus, promptAsync };
};

export default useGoogleSignIn;
