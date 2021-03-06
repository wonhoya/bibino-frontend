import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

import getStyles from "./styles";
import { PRIMARY_LIGHT_GREY } from "../../../constants/colors";

const CharacteristicBoard = ({
  intensity,
  titles,
  options,
  setReview,
  review,
}) => {
  const { title, leftSubTitle, rightSubTitle } = titles;
  const { size, color, isDisabled, isButtonActive } = options;

  const styles = getStyles(size, color, intensity);

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
          value={intensity}
          onValueChange={(value) => {
            setReview({ ...review, [title.toLowerCase()]: value });
          }}
          maximumTrackTintColor="transparent"
          minimumTrackTintColor="transparent"
          thumbTintColor={isButtonActive ? PRIMARY_LIGHT_GREY : "transparent"}
          disabled={isDisabled ? true : false}
        />
      </View>
    </View>
  );
};

export default CharacteristicBoard;
