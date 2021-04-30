import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";

import TabContainer from "./TabContainer/TabContainer";
import ButtonContainer from "./ButtonContainer/ButtonContainer";

const TabBar = ({ navigation }) => {
  const nav = navigation.navigation;
  const navState = navigation.state;
  const currentRouteName = navState.routeNames[navState.index];

  return (
    <View style={styles.tabsContainer}>
      <TabContainer
        handleTabPress={() => {
          nav.navigate("Main");
        }}
        iconName="home"
        text="Home"
        isActive={currentRouteName === "Main"}
      />
      <TabContainer
        handleTabPress={() => {
          nav.navigate("Search");
        }}
        iconName="search1"
        text="Search"
        isActive={currentRouteName === "Search"}
      />
      <ButtonContainer handleButtonPress={() => nav.navigate("Photo")} />
      <TouchableOpacity style={styles.invisibleButton} />
      <TabContainer
        handleTabPress={() => {
          nav.navigate("Profile");
        }}
        iconName="picture"
        text="Photos"
        isActive={currentRouteName === "Profile"}
      />
      <TabContainer
        handleTabPress={() => {
          nav.navigate("Ranking");
        }}
        iconName="Trophy"
        text="Ranking"
        isActive={currentRouteName === "Ranking"}
      />
    </View>
  );
};

export default TabBar;
