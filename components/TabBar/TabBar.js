import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { ProfileIcon, SearchIcon, CameraIcon } from "../../assets/svgs/icon";
import styles from "./styles";

const TabBar = ({ navigation }) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.columnCenter, styles.tab]}
        onPress={() => navigation.navigate("Search")}
      >
        <SearchIcon />
        <Text style={styles.tabFont}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.columnCenter, styles.cameraContainer]}>
          <CameraIcon />
          <Text style={styles.cameraFont}>Camera</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.columnCenter, styles.tab]}
        onPress={() => navigation.navigate("Profile")}
      >
        <ProfileIcon />
        <Text style={styles.tabFont}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
