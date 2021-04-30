import React, { useState } from "react";
import { SafeAreaView, View, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import {
  INTRO_FIRST_TITLE_TEXT,
  INTRO_FIRST_TITLE_DESCRIPTION,
  INTRO_SECOND_TITLE_TEXT,
  INTRO_SECOND_TITLE_DESCRIPTION,
  INTRO_THIRD_TITLE_TEXT,
  INTRO_THIRD_TITLE_DESCRIPTION,
  INTRO_START_BUTTON_TEXT,
} from "../../constants/text";

import ImageContainer from "./ImageContainer/ImageContainer";
import DescriptionContainer from "./DescriptionContainer/DescriptionContainer";
import Button from "../../components/shared/Button/Button";

const { width: windowWidth } = Dimensions.get("window");

const Intro = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { navigate } = useNavigation();
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
            <ImageContainer
              source={require("../../assets/pngs/introImage1.png")}
            />
            <DescriptionContainer
              title={INTRO_FIRST_TITLE_TEXT}
              description={INTRO_FIRST_TITLE_DESCRIPTION}
            />
          </View>
          <View style={styles.windowContainer}>
            <ImageContainer
              source={require("../../assets/pngs/introImage2.png")}
            />
            <DescriptionContainer
              title={INTRO_SECOND_TITLE_TEXT}
              description={INTRO_SECOND_TITLE_DESCRIPTION}
            />
          </View>
          <View style={styles.windowContainer}>
            <ImageContainer
              source={require("../../assets/pngs/introImage3.png")}
            />
            <DescriptionContainer
              title={INTRO_THIRD_TITLE_TEXT}
              description={INTRO_THIRD_TITLE_DESCRIPTION}
              button={
                <Button
                  text={INTRO_START_BUTTON_TEXT}
                  onPress={() => navigate("SignIn")}
                />
              }
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
