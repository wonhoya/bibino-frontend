import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabNavigator from "./MainTabNavigator";
import MainStackNavigator from "./MainStackNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
