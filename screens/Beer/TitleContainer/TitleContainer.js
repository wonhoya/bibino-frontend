import React from "react";
import { View, Text, Dimensions } from "react-native";

import { RUBIK_MEDIUM } from "../../../constants/font";
import styles from "./styles";

import { ShareIcon } from "../../../assets/svgs/icon";

const { width: windowWidth } = Dimensions.get("window");

const TitleContainer = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: RUBIK_MEDIUM, fontSize: windowWidth / 12 }}>
        {title}
      </Text>
      <ShareIcon size={windowWidth / 15} />
    </View>
  );
};

export default TitleContainer;
