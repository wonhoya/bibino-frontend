import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import { SuccessIcon } from "../../assets/svgs/icon";
import { BeercanSvg } from "../../assets/svgs/ilusts";

const Success = () => {
  return (
    <>
      <View style={styles.container}>
        <SuccessIcon />
        <Text style={styles.title}>Analyze Success!</Text>
        <Text style={styles.description}>
          Preparing to show details page...
        </Text>
      </View>
      <View style={styles.svgContainer}>
        <BeercanSvg />
      </View>
    </>
  );
};

export default Success;
