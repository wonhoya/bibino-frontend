import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { ProfileIcon, SearchIcon, CameraIcon } from "../../assets/svgs/icon";
import styles from "./styles";

const PhotoTabBar = () => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.columnCenter, styles.tab]}
        onPress={() => console.log("Search Pressed")}
      >
        <SearchIcon />
        <Text style={styles.tabFont}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Camera Pressed")}
      >
        <View style={[styles.columnCenter, styles.cameraContainer]}>
          <CameraIcon />
          <Text style={styles.cameraFont}>Camera</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.columnCenter, styles.tab]}
        onPress={() => console.log("Profile Pressed")}
      >
        <ProfileIcon />
        <Text style={styles.tabFont}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoTabBar;
