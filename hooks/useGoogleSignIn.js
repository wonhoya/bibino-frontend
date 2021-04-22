import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import firebase from "firebase";
import { EXPO_CLIENT_ID, EXPO_CLIENT_PASSWORD } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { signInUser } from "../features/userSlice";
import { userStateSet } from "../features/userSlice";
import ASYNC_STATE from "../constants/asyncState";

const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const fetchState = useSelector((state) => state.user.state);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    clientSecret: EXPO_CLIENT_PASSWORD,
  });

  useEffect(() => {
    if (fetchState === ASYNC_STATE.LOADING) {
      return;
    }

    if (response?.type === "success") {
      const getUserData = async () => {
        try {
          const { id_token } = response.params;
          const credential = await firebase.auth.GoogleAuthProvider.credential(
            id_token
          );
          const auth = await firebase.auth().signInWithCredential(credential);

          const idToken = await auth.user.getIdToken();
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
  }, [response, fetchState, dispatch]);

  return { fetchState, promptAsync };
};

export default useGoogleSignIn;
