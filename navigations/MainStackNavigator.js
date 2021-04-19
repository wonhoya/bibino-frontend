import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/shared/Header/Header";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
//import Beer from "../screens/Beer/Beer";
import Photo from "../screens/Photo/Photo";
import Configuration from "../screens/Configuration/Configuration";
import MainTabNavigator from "./MainTabNavigator";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Photo"
        component={Photo}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      <MainStack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      <MainStack.Screen
        name="Search"
        component={Search}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
      {/* <MainStack.Screen
        name="Beer"
        component={Beer}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      /> */}
      <MainStack.Screen
        name="Configuration"
        component={Configuration}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
