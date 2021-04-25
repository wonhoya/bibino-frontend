import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import { EXPO_CLIENT_ID, EXPO_CLIENT_PASSWORD } from "@env";
import { useSelector, useDispatch } from "react-redux";

import { signInUser, userDeleted, userStatusSet } from "../features/userSlice";
import { removeIdToken, tokenStatusSet } from "../features/tokenSlice";
import ASYNC_STATUS from "../constants/asyncStatus";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

let isLoading = false;

const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const userFetchStatus = useSelector((state) => state.user.status);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    clientSecret: EXPO_CLIENT_PASSWORD,
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
