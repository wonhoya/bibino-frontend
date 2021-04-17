import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./MainStackNavigator";
import MainTabNavigator from "./MainTabNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
