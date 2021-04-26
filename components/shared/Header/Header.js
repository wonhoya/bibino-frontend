import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { useRoute, useNavigationState } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { ShareIcon } from "../../../assets/svgs/icon";
import { PRIMARY_GREY } from "../../../constants/colors";
import { HeaderLogoSvg } from "../../../assets/svgs/ilusts";

const Header = ({ navigation }) => {
  const navState = useNavigationState((state) => state);
  const [isDisabled, setIsDisabled] = useState(false);
  const { name } = useRoute();

  const handleBackButton = () => {
    if (navState.routes[navState.index - 1].name === "Success") {
      return navigation.navigation.popToTop();
    }

    navigation.navigation.goBack();
  };

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
    const shouldHideBackButton = name === "MainTab" || name === "Success";

    if (shouldHideBackButton) {
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
            onPress={handleBackButton}
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
