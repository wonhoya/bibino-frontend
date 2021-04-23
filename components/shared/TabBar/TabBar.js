import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { POINT_DARK_ORANGE } from "../../../constants/colors";
import TabContainer from "./TabContainer/TabContainer";
import ButtonContainer from "./ButtonContainer/ButtonContainer";

const TabBar = ({ navigation }) => {
  const nav = navigation.navigation;
  const navState = navigation.state;
  const currentRouteName = navState.routeNames[navState.index];

  return (
    <View style={styles.tabsContainer}>
      <TabContainer
        handleButtonPress={() => {
          nav.navigate("Main");
        }}
        iconName="home"
        text="Home"
        isActive={currentRouteName === "Main" ? true : false}
      />
      <TabContainer
        handleButtonPress={() => {
          nav.navigate("Search");
        }}
        iconName="search1"
        text="Search"
        isActive={currentRouteName === "Search" ? true : false}
      />
      <ButtonContainer handleButtonPress={() => nav.navigate("Photo")} />
      <TouchableOpacity style={styles.invisibleButton} />
      <TabContainer
        handleButtonPress={() => {
          nav.navigate("Profile");
        }}
        iconName="user"
        text="Profile"
        isActive={currentRouteName === "Profile" ? true : false}
      />
      <TabContainer
        handleButtonPress={() => {
          console.log("Ranking Presssed");
        }}
        iconName="Trophy"
        text="Ranking"
        isActive={currentRouteName === "Ranking" ? true : false}
      />
    </View>
  );
};

export default TabBar;
