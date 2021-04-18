import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const Main = () => {
  return (
    <>
      <SafeAreaView />
      <View>
        <Text style={styles.font}>This is Rubik text!</Text>
      </View>
    </>
  );
};

export default Main;
