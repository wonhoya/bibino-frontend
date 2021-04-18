import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/shared/Header/Header";
import Main from "../screens/Main/Main";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            header: (navigation) => <Header navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            header: (navigation) => <Header navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: (navigation) => <Header navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
