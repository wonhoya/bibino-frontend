import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../constants/colors";

import {
  ProfileIcon,
  SearchIcon,
  CameraIcon,
  UseIcon,
  RetakeIcon,
} from "../../assets/svgs/icon";
import styles from "./styles";
import ButtonContainer from "./ButtonContainer/ButtonContainer";

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
  changeBoderRaidus: {
    from: {
      borderTopStartRadius: 20,
    },
    to: {
      borderTopStartRadius: 0,
    },
  },
});

const PhotoTabBar = ({
  handleTakePicture,
  handleRetake,
  isPreview,
  handleUse,
}) => {
  console.log("isPreview?", isPreview);
  return (
    <Animatable.View animation="changeHeight" style={styles.tabsContainer}>
      <Animatable.View
        animation="changeButtonsHeight"
        style={styles.columnCenter}
      >
        <ButtonContainer
          handleOnPress={() => console.log("Camera Pressed")}
          icon={<AntDesign name="search1" size={35} color={PRIMARY_WHITE} />}
        />
      </Animatable.View>

      <Animatable.View
        animation="changeCameraButtonHeight"
        style={styles.mainButton}
      >
        {isPreview ? (
          <View style={styles.cameraContainer}>
            <ButtonContainer
              handleOnPress={handleRetake}
              icon={
                <AntDesign name="reload1" size={50} color={PRIMARY_ORANGE} />
              }
            />
          </View>
        ) : (
          <View style={styles.cameraContainer}>
            <ButtonContainer
              handleOnPress={handleTakePicture}
              icon={
                <AntDesign name="camera" size={60} color={PRIMARY_ORANGE} />
              }
            />
          </View>
        )}
      </Animatable.View>

      <Animatable.View
        animation="changeButtonsHeight"
        style={styles.columnCenter}
      >
        {isPreview ? (
          <ButtonContainer
            handleOnPress={handleUse}
            icon={
              <AntDesign name="checkcircleo" size={40} color={PRIMARY_WHITE} />
            }
          />
        ) : (
          <ButtonContainer
            handleOnPress={() => console.log("Profile Pressed")}
            icon={<AntDesign name="user" size={40} color={PRIMARY_WHITE} />}
          />
        )}
      </Animatable.View>
    </Animatable.View>
  );
};

export default PhotoTabBar;
