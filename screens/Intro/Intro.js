import React, { useState } from "react";
import { SafeAreaView, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import ImageContainer from "./ImageContainer/ImageContainer";
import DescriptionContainer from "./DescriptionContainer/DescriptionContainer";
import Button from "../../components/shared/Button/Button";
import {
  INTRO_FIRST_TITLE_TEXT,
  INTRO_FIRST_TITLE_DESCRIPTION,
  INTRO_SECOND_TITLE_TEXT,
  INTRO_SECOND_TITLE_DESCRIPTION,
  INTRO_THIRD_TITLE_TEXT,
  INTRO_THIRD_TITLE_DESCRIPTION,
  INTRO_START_BUTTON_TEXT,
} from "../../constants/text";

const { width: windowWidth } = Dimensions.get("window");

const Intro = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const pagination = [1, 2, 3];

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / windowWidth);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={styles.windowContainer}>
            <ImageContainer />
            <DescriptionContainer
              title={INTRO_FIRST_TITLE_TEXT}
              description={INTRO_FIRST_TITLE_DESCRIPTION}
            />
          </View>
          <View style={styles.windowContainer}>
            <ImageContainer />
            <DescriptionContainer
              title={INTRO_SECOND_TITLE_TEXT}
              description={INTRO_SECOND_TITLE_DESCRIPTION}
            />
          </View>
          <View style={styles.windowContainer}>
            <ImageContainer />
            <DescriptionContainer
              title={INTRO_THIRD_TITLE_TEXT}
              description={INTRO_THIRD_TITLE_DESCRIPTION}
              button={<Button text={INTRO_START_BUTTON_TEXT} />}
            />
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {pagination.map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                styles.dotsOpacity(pageIndex, index),
              ]}
              key={index}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default Intro;
