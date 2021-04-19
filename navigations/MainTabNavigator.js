import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/shared/TabBar/TabBar";
import Main from "../screens/Main/Main";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(navigation) => <TabBar navigation={navigation} />}
    >
      <MainTab.Screen name="Main" component={Main} />
      <MainTab.Screen name="Search" component={Search} />
      <MainTab.Screen name="Profile" component={Profile} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
