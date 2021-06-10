import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/shared/TabBar/TabBar";
import Main from "../screens/Main/Main";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
import Ranking from "../screens/Ranking/Ranking";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      backBehavior="initialRoute"
      tabBar={(navigation) => <TabBar navigation={navigation} />}
    >
      <MainTab.Screen name="Main" component={Main} />
      <MainTab.Screen name="Search" component={Search} />
      <MainTab.Screen name="Profile" component={Profile} />
      <MainTab.Screen name="Ranking" component={Ranking} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
