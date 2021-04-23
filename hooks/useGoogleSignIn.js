import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import firebase from "firebase";
import { EXPO_CLIENT_ID, EXPO_CLIENT_PASSWORD } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { signInUser, userStateSet } from "../features/userSlice";
import ASYNC_STATE from "../constants/asyncState";
let isSigningIn = false;

const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const userFetchStatus = useSelector((state) => state.user.status);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    clientSecret: EXPO_CLIENT_PASSWORD,
  });

  useEffect(() => {
    if (response?.type === "success" && !isSigningIn) {
      isSigningIn = true;
      dispatch(userStateSet(ASYNC_STATE.LOADING));

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
          // 에러 페이지로 navigate 할 수 있게나, 에러 페이지 모달로 뜰 수 있게.
          console.log(err);
        } finally {
          isSigningIn = false;
        }
      };

      getUserData();
    }
  }, [response, dispatch]);

  return { userFetchStatus, promptAsync };
};

export default useGoogleSignIn;
