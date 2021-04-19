import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import {
  ProfileIcon,
  SearchIcon,
  CameraIcon,
  UseIcon,
  RetakeIcon,
} from "../../assets/svgs/icon";
import styles from "./styles";

Animatable.initializeRegistryWithDefinitions({
  changeHeight: {
    from: {
      height: null,
    },
    to: {
      height: 150,
    },
  },
  changeCameraButtonHeight: {
    from: {
      top: -40,
    },
    to: {
      top: 20,
    },
  },
  changeButtonsHeight: {
    from: {
      marginTop: null,
    },
    to: {
      marginTop: 5,
    },
  },
});

const PhotoTabBar = ({ handleTakePicture, isPreview }) => {
  console.log("isPreview?", isPreview);
  return (
    <Animatable.View animation="changeHeight" style={styles.tabsContainer}>
      <Animatable.View
        animation="changeButtonsHeight"
        style={[styles.columnCenter, styles.tab]}
      >
        <TouchableOpacity onPress={() => console.log("Camera Pressed")}>
          <SearchIcon />
        </TouchableOpacity>
        <Text style={styles.tabFont}>Search</Text>
      </Animatable.View>

      <Animatable.View
        animation="changeCameraButtonHeight"
        style={styles.button}
      >
        {isPreview ? (
          <View style={[styles.columnCenter, styles.cameraContainer]}>
            <TouchableOpacity onPress={handleTakePicture}>
              <RetakeIcon />
            </TouchableOpacity>
            {/* <Text style={styles.cameraFont}>Retake</Text> */}
          </View>
        ) : (
          <View style={[styles.columnCenter, styles.cameraContainer]}>
            <TouchableOpacity onPress={handleTakePicture}>
              <CameraIcon />
            </TouchableOpacity>
            <Text style={styles.cameraFont}>Camera</Text>
          </View>
        )}
      </Animatable.View>

      <Animatable.View
        animation="changeButtonsHeight"
        style={[styles.columnCenter, styles.tab]}
      >
        <TouchableOpacity onPress={() => console.log("Camera Pressed")}>
          <ProfileIcon />
        </TouchableOpacity>
        <Text style={styles.tabFont}>Profile</Text>
      </Animatable.View>
    </Animatable.View>
  );
};

export default PhotoTabBar;
