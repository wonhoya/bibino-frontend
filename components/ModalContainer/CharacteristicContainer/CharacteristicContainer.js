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

const CharacteristicContainer = ({ review, setReview }) => {
  const { aroma, body, flavor } = review;

  return (
    <View style={styles.container}>
      <View>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.aroma}
          rating={aroma}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_ORANGE,
            isDisabled: false,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.body}
          rating={body}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_BLACK,
            isDisabled: false,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.flavor}
          rating={flavor}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_YELLOW,
            isDisabled: false,
          }}
        />
      </View>
    </View>
  );
};

export default CharacteristicContainer;
