import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

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
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FailureIcon />
        <Text style={styles.title}>Analyze Failed..</Text>
        <Text style={styles.description}>
          Could you please take picture again?
        </Text>
      </View>
      <View style={styles.svgContainer}>
        <PretzelSvg />
      </View>
    </>
  );
};

export default Failure;
