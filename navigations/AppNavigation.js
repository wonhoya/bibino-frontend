import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./MainStackNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
