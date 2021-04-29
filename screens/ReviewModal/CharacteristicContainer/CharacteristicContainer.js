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

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const chracterSize = windowHeight / 1.7;

const CharacteristicContainer = ({ review, setReview }) => {
  const { aroma, body, sparkling } = review;

  return (
    <View style={styles.container}>
      <View>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.aroma}
          intensity={aroma}
          review={review}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_ORANGE,
            isDisabled: false,
            isButtonActive: true,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.body}
          intensity={body}
          review={review}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_BLACK,
            isDisabled: false,
            isButtonActive: true,
          }}
        />
      </View>
      <View style={{ marginTop: windowWidth / 6 }}>
        <CharacteristicBoard
          titles={CHRACTERISTIC_TITLES.sparkling}
          intensity={sparkling}
          review={review}
          setReview={setReview}
          options={{
            size: chracterSize,
            color: PRIMARY_YELLOW,
            isDisabled: false,
            isButtonActive: true,
          }}
        />
      </View>
    </View>
  );
};

export default CharacteristicContainer;
