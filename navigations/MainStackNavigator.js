import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "../screens/Intro/Intro";
import SignIn from "../screens/SignIn/SignIn";
import Header from "../components/shared/Header/Header";
import MainTabNavigator from "./MainTabNavigator";
import Beer from "../screens/Beer/Beer";
import Configuration from "../screens/Configuration/Configuration";
import Photo from "../screens/Photo/Photo";
import Success from "../screens/Success/Success";
import Failure from "../screens/Failure/Failure";
import AnalyzeFailure from "../screens/Failure/AnalyzeFailure";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const verticalAnimation = {
    gestureDirection: "vertical",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  //auth flow
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const authScreens = {
    Intro,
    SignIn,
  };
  const userScreens = {
    MainTab: MainTabNavigator,
    Photo,
    Success,
    Failure,
    AnalyzeFailure,
    Beer,
    Configuration,
  };

  return (
    <Stack.Navigator headerMode={isLoggedIn ? "screen" : "none"}>
      {Object.entries({
        ...(isLoggedIn ? userScreens : authScreens),
      }).map(([name, component], i) => (
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={
            isLoggedIn
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
