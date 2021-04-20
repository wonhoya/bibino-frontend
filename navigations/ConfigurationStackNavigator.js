import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/shared/Header/Header";
import Configuration from "../screens/Configuration/Configuration";

const ConfigurationStack = createStackNavigator();

const ConfigurationStackNavigator = () => {
  return (
    <ConfigurationStack.Navigator>
      <ConfigurationStack.Screen
        name="Configuration"
        component={Configuration}
        options={{
          header: (navigation) => <Header navigation={navigation} />,
        }}
      />
    </ConfigurationStack.Navigator>
  );
};

export default ConfigurationStackNavigator;
