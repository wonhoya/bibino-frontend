import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import {
  PRIMARY_LIGHT_ORANGE,
  PRIMARY_WHITE,
  POINT_DARK_ORANGE,
} from "../../../constants/colors";

const TabBar = ({ navigation }) => {
  const nav = navigation.navigation;
  const navState = navigation.state;
  const currentRouteName = navState.routeNames[navState.index];

  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={(e) => {
          nav.navigate("Main");
        }}
      >
        <AntDesign
          name="home"
          size={25}
          color={
            currentRouteName === "Main" ? PRIMARY_WHITE : PRIMARY_LIGHT_ORANGE
          }
        />
        <Text
          style={
            currentRouteName === "Main"
              ? { ...styles.tabName, color: PRIMARY_WHITE }
              : { ...styles.tabName, color: PRIMARY_LIGHT_ORANGE }
          }
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => nav.navigate("Search")}
      >
        <AntDesign
          name="search1"
          size={24}
          color={
            currentRouteName === "Search" ? PRIMARY_WHITE : PRIMARY_LIGHT_ORANGE
          }
        />
        <Text
          style={
            currentRouteName === "Search"
              ? { ...styles.tabName, color: PRIMARY_WHITE }
              : { ...styles.tabName, color: PRIMARY_LIGHT_ORANGE }
          }
        >
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate("Photo")}
      >
        <View style={[styles.cameraContainer]}>
          <AntDesign name="camera" size={60} color={POINT_DARK_ORANGE} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.invisibleButton} />

      <TouchableOpacity
        style={styles.tab}
        onPress={() => nav.navigate("Profile")}
      >
        <AntDesign
          name="user"
          size={25}
          color={
            currentRouteName === "Profile"
              ? PRIMARY_WHITE
              : PRIMARY_LIGHT_ORANGE
          }
        />
        <Text
          style={
            currentRouteName === "Profile"
              ? { ...styles.tabName, color: PRIMARY_WHITE }
              : { ...styles.tabName, color: PRIMARY_LIGHT_ORANGE }
          }
        >
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => console.log("Ranking Presssed")}
      >
        <AntDesign name="Trophy" size={25} color={PRIMARY_LIGHT_ORANGE} />
        <Text style={{ ...styles.tabName, color: PRIMARY_LIGHT_ORANGE }}>
          Ranking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
