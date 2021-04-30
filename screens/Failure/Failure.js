import React, { useEffect } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

import { FailureIcon } from "../../assets/svgs/icon";
import { PretzelSvg } from "../../assets/svgs/ilusts";

const Failure = ({ navigation }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.navigate("Main");
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <FailureIcon />
        <Text style={styles.title}>Oops! Something happend..</Text>
        <Text style={styles.description}>
          Sorry for Error, Could you try again?
        </Text>
      </View>
      <View style={styles.svgContainer}>
        <PretzelSvg />
      </View>
    </>
  );
};

export default Failure;
