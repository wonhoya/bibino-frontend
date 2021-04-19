import React from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";

import styles from "./styles";
import { BackIcon, ConfigurationIcon } from "../../../assets/svgs/icon";
import { HeaderLogoSvg } from "../../../assets/svgs/ilusts";

const Header = ({ navigation: { navigation } }) => {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <HeaderLogoSvg />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Configuration")}
        >
          <ConfigurationIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
