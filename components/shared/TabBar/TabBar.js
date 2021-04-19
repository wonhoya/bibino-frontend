import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { ProfileIcon, SearchIcon, CameraIcon } from "../../../assets/svgs/icon";

const TabBar = ({ navigation: { navigation } }) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Search")}
      >
        <SearchIcon size={21} />
        <Text style={styles.tabName}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.tab, styles.cameraContainer]}>
          <CameraIcon />
          <Text style={styles.cameraName}>Camera</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Profile")}
      >
        <ProfileIcon />
        <Text style={styles.tabName}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
