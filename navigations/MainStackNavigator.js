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
  const isLogedIn = useSelector((state) => !!state.user.idToken);

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
    <Stack.Navigator headerMode={isLogedIn ? "screen" : "none"}>
      {Object.entries({
        ...(isLogedIn ? userScreens : authScreens),
      }).map(([name, component], i) => (
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={
            isLogedIn
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
