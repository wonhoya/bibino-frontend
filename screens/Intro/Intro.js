import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

const Intro = () => {
  return (
    <SafeAreaView>
      <Text style={styles.font}>This is Rubik text!</Text>
    </SafeAreaView>
  );
};

export default Intro;
