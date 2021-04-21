import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  POINT_DARK_ORANGE,
} from "../../../constants/colors";
import { ProfileIcon, SearchIcon, CameraIcon } from "../../../assets/svgs/icon";

const TabBar = ({ navigation: { navigation } }) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Search")}
      >
        <AntDesign name="search1" size={30} color={PRIMARY_WHITE} />
        <Text style={styles.tabName}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Photo")}
      >
        <View style={[styles.tab, styles.cameraContainer]}>
          <AntDesign name="camera" size={60} color={POINT_DARK_ORANGE} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.push("Profile")}
      >
        <AntDesign name="user" size={32} color={PRIMARY_WHITE} />
        <Text style={styles.tabName}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
