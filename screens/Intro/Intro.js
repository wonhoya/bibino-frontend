import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
// import styles from "./styles";
import Button from "../../components/shared/Button/Button";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
// 한페이지에 하나의 view라서 굉장히 중요함 무조건 풀 width hegith

const Intro = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const pageNation = [1, 2, 3];

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    console.log(x);
    const indexOfNextScreen = Math.floor(x / width);
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
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          // horizontal scroll
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          // hide ScrollIndicator
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={{
                    resizeMode: "fill",
                    height: "100%",
                    width: "100%",
                  }}
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
          <View style={{ width, height }}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={{
                    resizeMode: "fill",
                    height: "100%",
                    width: "100%",
                  }}
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
          <View style={{ width, height }}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={{
                    resizeMode: "fill",
                    height: "100%",
                    width: "100%",
                  }}
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
          {pageNation.map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
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

// {/* <Text style={styles.font}>This is Rubik text!</Text>
// <Button text="Submit" mode="primary" /> */}

// {Array.from(Array(3).keys()).map((key, index) => (
//   <View
//     style={[
//       styles.paginationDots,
//       { opacity: pageIndex === index ? 1 : 0.2 },
//     ]}
//     key={index}
//   />
// ))}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 5,
    backgroundColor: "green",
  },

  buttonConatainer: {
    marginTop: 50,
    alignItems: "center",
  },

  title: {
    color: "#3C3A36",
    fontSize: 40,
    fontFamily: "Rubik_700Bold",
    margin: 20,
    textAlign: "center",
  },

  descripton: {
    color: "#3C3A36",
    fontSize: 15,
    fontFamily: "Rubik_400Regular",
    margin: 20,
    textAlign: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});
