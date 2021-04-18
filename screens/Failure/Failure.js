import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles from "./styles";
import { FailureIcon } from "../../assets/svgs/icon";
import { PretzelSvg } from "../../assets/svgs/ilusts";

const Failure = () => {
  return (
    <>
      <View style={styles.container}>
        <FailureIcon />
        <Text style={styles.title}>Oops! Something happend..</Text>
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
