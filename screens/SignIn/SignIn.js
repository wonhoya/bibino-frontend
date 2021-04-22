import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { LoginImageSvg } from "../../assets/svgs/ilusts";
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../assets/svgs/icon";
import useGoogleSignIn from "../../hooks/useGoogleSignIn";

const SignIn = () => {
  const { fetchState, promptAsync } = useGoogleSignIn();
  const isLoading = fetchState === "loading";

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
          <TouchableOpacity onPress={onSignInWithGoogle} disabled={isLoading}>
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
