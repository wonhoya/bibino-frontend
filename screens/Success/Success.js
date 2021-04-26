import React, { useEffect } from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import { SuccessIcon } from "../../assets/svgs/icon";
import { BeercanSvg } from "../../assets/svgs/ilusts";

const Success = ({ navigation, route }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.navigate("Beer", {
        beerId: route.params.beerId,
      });
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, [navigation, route.params]);

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
