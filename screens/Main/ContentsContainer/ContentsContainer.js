import React, { useRef } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import {
  scrollInterpolator,
  animatedStyles,
} from "../../../utils/carouselAnimations";

import styles from "./styles";
import { MAIN_RECOMMENDATION_TEXT } from "../../../constants/text";

import { TodayPickLogoSvg } from "../../../assets/svgs/ilusts";
import BeerCard from "../../../components/BeerCard/BeerCard";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const itemWidth = Math.round(windowWidth * 0.84);
const carouselHeight = Math.round(windowHeight * 0.3);

const ContentsContainer = ({ beers }) => {
  const carousel = useRef(null);

  const renderItem = ({ item: { _id, imagePath, name, description } }) => {
    return (
      <BeerCard
        beerId={_id}
        imagePath={imagePath}
        name={name}
        description={description}
      />
    );
  };

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
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
};

export default ContentsContainer;
