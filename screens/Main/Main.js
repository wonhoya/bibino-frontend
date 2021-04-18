import React, { useState, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView, View, Text, Dimensions } from "react-native";

import { ProfileIcon } from "../../assets/svgs/icon";
import { TodayPickLogoSvg } from "../../assets/svgs/ilusts";
import TagBoard from "../../components/shared/TagBoard/TagBoard";
import {
  scrollInterpolator,
  animatedStyles,
} from "../../utils/carouselAnimations";
import BeerCard from "../../components/BeerCard/BeerCard";
import styles from "./styles";

//mockData (should delete later)
import sample from "./sample.json";
const DATA = sample.map(({ beerImagePath, beerName, beerDescription }) => ({
  beerImagePath,
  beerName,
  beerDescription,
}));

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const ITEM_WIDTH = Math.round(windowWidth * 0.84);
const carouselHeight = Math.round(windowHeight * 0.3);

const Main = () => {
  const [state, setState] = useState({ index: 0 });
  const carousel = useRef(null);

  const _renderItem = ({
    item: { beerImagePath, beerName, beerDescription },
  }) => {
    return (
      <BeerCard
        beerImagePath={beerImagePath}
        beerName={beerName}
        beerDescription={beerDescription}
      />
    );
  };

  return (
    <View>
      <SafeAreaView />
      <View style={[styles.mainViewWidth, styles.profileContainer]}>
        <View style={styles.upperProfileContainer}>
          <View>
            <View style={styles.mainParagraphContainer}>
              <Text style={[styles.darkGrey, styles.mainParagraphFont]}>
                Hello,
              </Text>
            </View>
            <Text style={[styles.darkGrey, styles.usernameFont]}>이상엽님</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <ProfileIcon />
          </View>
        </View>

        <View style={styles.hashTagContainer}>
          <TagBoard />
        </View>
      </View>

      <View style={styles.contentsContainer}>
        <View style={styles.mainViewWidth}>
          <View style={styles.mainParagraphContainer}>
            <Text style={[styles.black, styles.mainParagraphFont]}>
              Beer recommended just for you
            </Text>
          </View>
          <TodayPickLogoSvg />
        </View>
        <Carousel
          ref={(c) => (carousel.current = c)}
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={windowWidth}
          sliderHeight={carouselHeight}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    </View>
  );
};

export default Main;
