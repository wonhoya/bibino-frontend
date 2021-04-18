import React from "react";
import { View, Dimensions } from "react-native";

import {
  PRIMARY_ORANGE,
  PRIMARY_BLACK,
  PRIMARY_YELLOW,
} from "../../../constants/colors";
import styles from "./styles";

import CharacteristicBoard from "../../shared/ChracteristicBoard/ChracteristicBoard";

const { width: windowWidth } = Dimensions.get("window");

const ChracteristicContainer = ({ ratings: { aroma, body, flavor } }) => {
  return (
    <View style={styles.container}>
      <CharacteristicBoard
        titles={{
          title: "Aroma",
          leftSubTitle: "Plain",
          rightSubTitle: "Rich",
        }}
        rating={aroma}
        options={{
          size: windowWidth * 1.3,
          color: PRIMARY_ORANGE,
          isDisabled: false,
        }}
      />
      <CharacteristicBoard
        titles={{
          title: "Body",
          leftSubTitle: "Light",
          rightSubTitle: "Heavy",
        }}
        rating={body}
        options={{
          size: windowWidth * 1.3,
          color: PRIMARY_BLACK,
          isDisabled: false,
        }}
      />
      <CharacteristicBoard
        titles={{
          title: "Flavor",
          leftSubTitle: "Sweat",
          rightSubTitle: "Bitter",
        }}
        rating={flavor}
        options={{
          size: windowWidth * 1.3,
          color: PRIMARY_YELLOW,
          isDisabled: false,
        }}
      />
    </View>
  );
};

export default ChracteristicContainer;
