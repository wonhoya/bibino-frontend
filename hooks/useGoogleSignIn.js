import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import firebase from "firebase";
import { EXPO_CLIENT_ID, EXPO_CLIENT_PASSWORD } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { signInUser, userStateSet } from "../features/userSlice";
import ASYNC_STATE from "../constants/asyncState";

const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.user.status);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    clientSecret: EXPO_CLIENT_PASSWORD,
  });

  useEffect(() => {
    if (fetchStatus === ASYNC_STATE.LOADING) {
      return;
    }

    if (response?.type === "success") {
      dispatch(userStateSet(ASYNC_STATE.LOADING));

      const getUserData = async () => {
        try {
          const { id_token } = response.params;
          const credential = await firebase.auth.GoogleAuthProvider.credential(
            id_token
          );
          const auth = await firebase.auth().signInWithCredential(credential);

          const idToken = await auth.user.getIdToken();
          // const [resultActionOfUser, resultActionOfTodayBeers] = await Promise.all([dispatch(signInUser(idToken)), dispatch(fetchTodayBeers())]);
          const resultAction = await dispatch(signInUser(idToken));
          unwrapResult(resultAction);
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(userStateSet(ASYNC_STATE.IDLE));
        }
      };

      getUserData();
    }
  }, [response, fetchStatus, dispatch]);

  return { fetchStatus, promptAsync };
};

export default useGoogleSignIn;
