import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  POINT_DARK_ORANGE,
} from "../../constants/colors";

import styles from "./styles";

const PhotoTabBar = ({
  handleTakePicture,
  handleRetake,
  isPreview,
  handleUse,
  isCameraReady,
  setIsAnimationFinished,
}) => {
  const animationValue = useRef(new Animated.Value(100)).current;
  const positionValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(animationValue, {
        toValue: 170,
        duration: 500,
        useNativeDriver: false,
      }).start();

      Animated.timing(positionValue, {
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
  }, []);

  console.log("isPreview?", isPreview);
  return (
    <Animated.View style={{ ...styles.tabsContainer, height: animationValue }}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => console.log("Search Pressed")}
      >
        <AntDesign name="search1" size={30} color={PRIMARY_WHITE} />
        <Text style={styles.tabName}>Search</Text>
      </TouchableOpacity>

      {isPreview ? (
        <TouchableOpacity
          style={[
            styles.button,
            { transform: [{ translateY: positionValue }] },
          ]}
          onPress={handleRetake}
        >
          <View style={[styles.tab, styles.cameraContainer]}>
            <AntDesign name="reload1" size={50} color={PRIMARY_ORANGE} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.button,
            { transform: [{ translateY: positionValue }] },
          ]}
          onPress={handleTakePicture}
        >
          <View style={[styles.tab, styles.cameraContainer]}>
            <AntDesign name="camera" size={60} color={POINT_DARK_ORANGE} />
          </View>
        </TouchableOpacity>
      )}

      {isPreview ? (
        <TouchableOpacity style={styles.tab} onPress={handleUse}>
          <AntDesign name="checkcircleo" size={32} color={PRIMARY_WHITE} />
          <Text style={styles.tabName}>Use</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.tab}
          onPress={() => console.log("Profile Pressed")}
        >
          <AntDesign name="user" size={32} color={PRIMARY_WHITE} />
          <Text style={styles.tabName}>Profile</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default PhotoTabBar;
