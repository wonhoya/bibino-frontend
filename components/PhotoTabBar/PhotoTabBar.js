import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import MainButtonContainer from "./MainButtonContainer/MainButtonContainer";
import TabContainer from "./TabContainer/TabContainer";
import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  POINT_DARK_ORANGE,
} from "../../constants/colors";

const PhotoTabBar = ({
  handleTakePicture,
  handleRetake,
  isPreview,
  handleUse,
  setIsAnimationFinished,
}) => {
  const tabBarY = useRef(new Animated.Value(100)).current;
  const buttonY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(tabBarY, {
        toValue: 170,
        duration: 500,
        useNativeDriver: false,
      }).start();

      Animated.timing(buttonY, {
        toValue: 40,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    startAnimation();

    const id = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [tabBarY, buttonY, setIsAnimationFinished]);

  return (
    <Animated.View style={{ ...styles.tabsContainer, height: tabBarY }}>
      <TabContainer
        handleButtonPress={() => console.log("Search Pressed")}
        icon={<AntDesign name="search1" size={30} color={PRIMARY_WHITE} />}
        text="Search"
      />
      {isPreview ? (
        <MainButtonContainer
          animationStyle={[
            styles.button,
            { transform: [{ translateY: buttonY }] },
          ]}
          handleButtonPress={handleRetake}
          iconStyle={[styles.tab, styles.cameraContainer]}
          icon={<AntDesign name="reload1" size={50} color={PRIMARY_ORANGE} />}
        />
      ) : (
        <MainButtonContainer
          animationStyle={[
            styles.button,
            { transform: [{ translateY: buttonY }] },
          ]}
          handleButtonPress={handleTakePicture}
          iconStyle={[styles.tab, styles.cameraContainer]}
          icon={<AntDesign name="camera" size={60} color={POINT_DARK_ORANGE} />}
        />
      )}
      {isPreview ? (
        <TabContainer
          handleButtonPress={handleUse}
          icon={<AntDesign name="checkcircleo" size={32} color="green" />}
          text="Use"
          isUseButton={true}
        />
      ) : (
        <TabContainer
          handleButtonPress={() => console.log("Profile Pressed")}
          icon={<AntDesign name="user" size={32} color={PRIMARY_WHITE} />}
          text="Profile"
        />
      )}
    </Animated.View>
  );
};

export default PhotoTabBar;
