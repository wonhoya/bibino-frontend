import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import {
  EXPO_CLIENT_ID,
  EXPO_CLIENT_PASSWORD,
  BACKEND_URL_FOR_DEV,
} from "@env";
import firebase from "firebase";

import styles from "./styles";
import { LoginImageSvg } from "../../assets/svgs/ilusts";
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../assets/svgs/icon";

const SignIn = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    clientSecret: EXPO_CLIENT_PASSWORD,
  });
  const [resolve, getResolve] = useState(null);

  useEffect(() => {
    if (response?.type === "success") {
      (async () => {
        try {
          const { id_token } = response.params;

          const credential = await firebase.auth.GoogleAuthProvider.credential(
            id_token
          );
          const auth = await firebase.auth().signInWithCredential(credential);
          const idToken = await auth.user.getIdToken();
          console.log(idToken);
          const res = await fetch(`${BACKEND_URL_FOR_DEV}/signIn`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          });
          getResolve(await res.json());
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [response]);

  const onSignInWithGoogle = () => {
    promptAsync();
  };

  const handleOnpress = () => {
    console.log("clicked");
  };

  return (
    <View style={styles.container}>
      <View>
        <LoginImageSvg />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.description}>Sign in with social networks</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onSignInWithGoogle}>
            <GoogleIcon size={50} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnpress}>
            <FacebookIcon size={50} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnpress}>
            <InstagramIcon size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
