import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/TabBar/TabBar";
import MainStackNavigator from "./MainStackNavigator";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(navigation) => <TabBar navigation={navigation} />}
    >
      <MainTab.Screen name="Main" component={MainStackNavigator} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
