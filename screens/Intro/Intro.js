import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import Button from "../../components/shared/Button/Button";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

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
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={styles.image}
                  source={require("../../assets/pngs/introImage1.png")}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Just scan BEER And That’s All!</Text>
                <Text style={styles.descripton}>
                  Quarantine is the perfect time to spend your day learning
                  something new, from anywhere!
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.windowContainer}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={styles.image}
                  source={require("../../assets/pngs/introImage2.png")}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Just scan BEER And That’s All!</Text>
                <Text style={styles.descripton}>
                  Quarantine is the perfect time to spend your day learning
                  something new, from anywhere!
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.windowContainer}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={styles.image}
                  source={require("../../assets/pngs/introImage1.png")}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Just scan BEER And That’s All!</Text>
                <Text style={styles.descripton}>
                  Quarantine is the perfect time to spend your day learning
                  something new, from anywhere!
                </Text>
                <View style={styles.buttonConatainer}>
                  <Button text={"Get started"} />
                </View>
              </View>
            </View>
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
