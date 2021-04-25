import React from "react";
import { useSelector } from "react-redux";
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
import Comments from "../screens/Comments/Comments";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const isLogIn = useSelector((state) => !!state.user.id);

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
    Comments,
  };

  return (
    <Stack.Navigator headerMode={isLogIn ? "screen" : "none"}>
      {Object.entries({
        ...(isLogIn ? userScreens : authScreens),
      }).map(([name, component], i) => (
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={
            isLogIn
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
