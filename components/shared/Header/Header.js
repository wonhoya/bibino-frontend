import React from "react";
import { View, TouchableOpacity } from "react-native";

import { BackIcon, ConfigurationIcon } from "../../../assets/svgs/icon";
import { HeaderLogoSvg } from "../../../assets/svgs/ilusts";
import styles from "./styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigation.goBack()}
      >
        <BackIcon />
      </TouchableOpacity>
      <HeaderLogoSvg />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigation.navigate("config")}
      >
        <ConfigurationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
