import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

import getStyles from "./styles";
import { PRIMARY_ORAGNE } from "../../../constants/colors";

const CharacteristicBoard = ({
  titles = { title: "Hello", leftSubTitle: "Left", rightSubTitle: "right" },
  rating = 3,
  options = { size: 500, color: PRIMARY_ORAGNE, isDisabled: true },
}) => {
  const [rate, setRate] = useState(rating);

  const { title, leftSubTitle, rightSubTitle } = titles;
  const { size, color, isDisabled } = options;

  const styles = getStyles(size, color, rate);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.leftSubTitle}>{leftSubTitle}</Text>
        <Text style={styles.rightSubTitle}>{rightSubTitle}</Text>
        <View style={styles.silderStyleContainer}>
          <View style={styles.sliderDummy} />
          <View style={styles.sliderReal} />
        </View>
        <Slider
          style={styles.sliderCore}
          minimumValue={0}
          maximumValue={10}
          value={rate}
          onValueChange={(value) => setRate(value)}
          maximumTrackTintColor="transparent"
          minimumTrackTintColor="transparent"
          disabled={isDisabled ? true : false}
        />
      </View>
    </View>
  );
};

export default CharacteristicBoard;
