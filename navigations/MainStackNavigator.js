import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "../screens/Intro/Intro";
import SignIn from "../screens/SignIn/SignIn";
import Header from "../components/shared/Header/Header";
import MainTabNavigator from "./MainTabNavigator";
import Beer from "../screens/Beer/Beer";
import Configuration from "../screens/Configuration/Configuration";
import useUserIsLogIn from "../hooks/useUserIsLogIn";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { accessToken } = useUserIsLogIn();

  const authScreens = {
    Intro,
    SignIn,
  };
  const userScreens = {
    Main: MainTabNavigator,
    Beer,
    Configuration,
  };

  return (
    <Stack.Navigator headerMode={accessToken ? "screen" : "none"}>
      {Object.entries({
        ...(accessToken ? userScreens : authScreens),
      }).map(([name, component], i) => (
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={
            accessToken
              ? {
                  header: (navigation) => <Header navigation={navigation} />,
                }
              : {}
          }
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
