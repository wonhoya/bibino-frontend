import React, { useState, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Text, Dimensions } from "react-native";

import styles from "./styles";
import { TodayPickLogoSvg } from "../../../assets/svgs/ilusts";
import {
  scrollInterpolator,
  animatedStyles,
} from "../../../utils/carouselAnimations";
import { MAIN_RECOMMENDATION_TEXT } from "../../../constants/text";
import BeerCard from "../../../components/BeerCard/BeerCard";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const itemWidth = Math.round(windowWidth * 0.84);
const carouselHeight = Math.round(windowHeight * 0.3);

const ContentsContainer = ({ beers }) => {
  const [state, setState] = useState({ index: 0 });
  const carousel = useRef(null);

  const renderItem = ({ item: { imagePath, name, description } }) => {
    return (
      <BeerCard imagePath={imagePath} name={name} description={description} />
    );
  };

  //lib rul: https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/CUSTOM_INTERPOLATIONS.md

  return (
    <View style={styles.container}>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>{MAIN_RECOMMENDATION_TEXT}</Text>
        <TodayPickLogoSvg />
      </View>
      <Carousel
        ref={(c) => (carousel.current = c)}
        data={beers}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        sliderHeight={carouselHeight}
        itemWidth={itemWidth}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setState({ index })}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
};

export default ContentsContainer;
