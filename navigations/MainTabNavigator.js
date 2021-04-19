import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/shared/TabBar/TabBar";
import Main from "../screens/Main/Main";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(navigation) => <TabBar navigation={navigation} />}
    >
      <MainTab.Screen name="Main" component={Main} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
