import React from "react";
import { View, Dimensions } from "react-native";

import styles from "./styles";
import {
  PRIMARY_ORANGE,
  PRIMARY_BLACK,
  PRIMARY_YELLOW,
} from "../../../constants/colors";
import CHRACTERISTIC_TITLES from "../../../constants/chracteristicTitles";
import CharacteristicBoard from "../../../components/shared/ChracteristicBoard/ChracteristicBoard";

const { width: windowWidth } = Dimensions.get("window");
const chracterSize = windowWidth * 1.2;

const CharacteristicContainer = ({ characterAverage }) => {
  const { averageBody, averageAroma, averageSparkling } = characterAverage;

  return (
    <View style={styles.container}>
      <View>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.aroma}
          intensity={averageAroma}
          options={{
            size: chracterSize,
            color: PRIMARY_ORANGE,
            isDisabled: true,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.body}
          intensity={averageBody}
          options={{
            size: chracterSize,
            color: PRIMARY_BLACK,
            isDisabled: true,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.sparkling}
          intensity={averageSparkling}
          options={{
            size: chracterSize,
            color: PRIMARY_YELLOW,
            isDisabled: true,
          }}
        />
      </View>
    </View>
  );
};

export default CharacteristicContainer;
