import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "../screens/Intro/Intro";
import SignIn from "../screens/SignIn/SignIn";
import Header from "../components/shared/Header/Header";
import MainTabNavigator from "./MainTabNavigator";
import Beer from "../screens/Beer/Beer";
import Profile from "../screens/Profile/Profile";
import Configuration from "../screens/Configuration/Configuration";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

//photo test용
import Photo from "../screens/Photo/Photo";
import Success from "../screens/Success/Success";
import Failure from "../screens/Failure/Failure";

const Stack = createSharedElementStackNavigator();

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
    Main: MainTabNavigator,
    Photo,
    Success,
    Failure,
    Beer,
    Configuration,
  };

  return (
    <Stack.Navigator headerMode={isLoggedIn ? "screen" : "none"}>
      {/* {Object.entries({
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
      ))} */}
      <Stack.Screen
        key={1}
        name="Main"
        component={MainTabNavigator}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      <Stack.Screen key={2} name="Photo" component={Photo} />
      <Stack.Screen key={3} name="Success" component={Success} />
      <Stack.Screen key={4} name="Failure" component={Failure} />
      <Stack.Screen
        key={5}
        name="Beer"
        component={Beer}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
      <Stack.Screen
        key={6}
        name="Profile"
        component={Profile}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      <Stack.Screen key={7} name="Configuration" component={Configuration} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
