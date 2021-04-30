import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import ASYNC_STATUS from "../../constants/asyncStatus";
import useGoogleSignIn from "../../hooks/useGoogleSignIn";

import styles from "./styles";

import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from "../../assets/svgs/icon";
import { LoginImageSvg } from "../../assets/svgs/ilusts";
import Loading from "../Loading/Loading";

const SignIn = () => {
  const { userFetchStatus, promptAsync } = useGoogleSignIn();
  const isLoading = userFetchStatus === ASYNC_STATUS.LOADING;

  const handleSignInWithGoogle = () => {
    promptAsync();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View>
        <LoginImageSvg />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.description}>Sign in with social networks</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={handleSignInWithGoogle}
            disabled={isLoading}
          >
            <GoogleIcon size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FacebookIcon size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <InstagramIcon size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
