import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { ShareIcon } from "../../../assets/svgs/icon";
import { PRIMARY_GREY } from "../../../constants/colors";
import { HeaderLogoSvg } from "../../../assets/svgs/ilusts";

const Header = ({ navigation, route }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { name } = useRoute();

  const isConfigurationScreen = name === "Configuration";

  const handleRightHeaderButtonClick = () => {
    if (!navigation) {
      return;
    }

    if (isConfigurationScreen) {
      //Do something about share
    }

    navigation.navigation.navigate("Configuration");
  };

  useEffect(() => {
    if (name === "Main" || name === "Search" || name === "Profile") {
      setIsDisabled(true);
    }
  }, [name]);

  return (
    <>
      <SafeAreaView style={styles.androidSafeArea} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigation.goBack()}
            disabled={isDisabled}
          >
            <AntDesign
              name="leftcircleo"
              size={24}
              color={PRIMARY_GREY}
              style={isDisabled ? styles.hidden : {}}
            />
          </TouchableOpacity>

          <HeaderLogoSvg />
          <TouchableOpacity
            style={styles.button}
            onPress={handleRightHeaderButtonClick}
          >
            {isConfigurationScreen ? (
              <ShareIcon size={22} />
            ) : (
              <AntDesign name="setting" size={24} color={PRIMARY_GREY} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;
