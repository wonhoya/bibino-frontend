import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { View, Animated, Easing } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigationState } from "@react-navigation/native";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import { PRIMARY_ORANGE } from "../../constants/colors";
import floatingButtons from "../../constants/floatingButtons";

import TitleContainer from "./TitleContainer/TitleContainer";
import RatingBoardContainer from "./RatingBoardContainer/RatingBoardContainer";
import TagBoardContainer from "./TagBoardContainer/TagBoardContainer";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentBoardContainer from "./CommentBoardContainer/CommentBoardContainer";
import RecommendationBoardContainer from "./RecommendationBoardContainer/RecommendationBoardContainer";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import Loading from "../Loading/Loading";
import SectionDivider from "./SectionDivider/SectionDivider";
import FeedbackBoard from "../../components/FeedbackBoard/FeedbackBoard";
import { selectIdToken } from "../../features/tokenSlice";
import generateHeaderOption from "../../utils/generateHeaderOption";

const Beer = ({ navigation, route }) => {
  const navState = useNavigationState((state) => state);
  const moveY = useRef(new Animated.Value(100)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isFetching, setIsFetching] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [shouldShowFeedBack, setShouldShowFeedBack] = useState(false);
  const [beerInfo, setBeerInfo] = useState(null);

  const idToken = useSelector(selectIdToken);
  const headers = generateHeaderOption(idToken);

  useEffect(() => {
    if (navState.routes[navState.index - 1]?.name === "Success") {
      navigation.setOptions({
        gestureEnabled: false,
      });
    }
  }, [navigation, navState.index, navState.routes]);

  useEffect(() => {
    const getBeer = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL_FOR_DEV}/beers/${route.params.beerId}`,
          {
            method: "GET",
            headers: {
              ...headers,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          return navigation.navigate("Failure");
        }

        const result = await response.json();

        setBeerInfo(result);
        setIsFetching(false);
      } catch (error) {
        navigation.navigate("Failure");
      }
    };
    getBeer();
  }, []);

  useEffect(() => {
    Animated.timing(moveY, {
      toValue: 0,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      delay: 100,
      useNativeDriver: false,
    }).start();
  }, [moveY, isFetching]);

  const handleOnScroll = (event) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: false,
    })(event);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const characterAverage = {
    averageBody: beerInfo?.averageBody,
    averageAroma: beerInfo?.averageAroma,
    averageSparkling: beerInfo?.averageSparkling,
  };

  if (isFetching) {
    return <Loading />;
  }

  return (
    <Animated.ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      onScroll={handleOnScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={[styles.image, styles.handleImageY(scrollY)]}
            source={{ uri: beerInfo.imagePath }}
          />
        </View>
        <TitleContainer title={beerInfo.name} />
        <RatingBoardContainer rating={beerInfo.averageRating} />
        <TagBoardContainer characterAverage={characterAverage} />
        <SectionDivider direction="right" text="Description" />
        <Animated.Text style={{ ...styles.description, top: moveY }}>
          {beerInfo.description}
        </Animated.Text>
        <SectionDivider direction="left" text="Characteristic" />
        <Animated.View style={styles.handlePositionX(scrollY)}>
          <CharacteristicContainer characterAverage={characterAverage} />
        </Animated.View>
        <SectionDivider direction="right" text="Recommendation" />
        <Animated.View style={styles.handleOpacity(scrollY)}>
          <RecommendationBoardContainer beerInfo={beerInfo._id} />
        </Animated.View>
        <SectionDivider direction="left" text="Comments" />
        <CommentBoardContainer
          navigation={navigation}
          beerInfo={beerInfo._id}
        />
      </View>
      <Animated.View
        style={[styles.buttonContainer, styles.handleButtonY(scrollY)]}
      >
        <FloatingAction
          actions={floatingButtons}
          color={PRIMARY_ORANGE}
          showBackground={false}
          onPressItem={(name) => {
            if (name === "reviewButton") {
              setModalVisible(true);
            }
          }}
        />
      </Animated.View>
      <ModalContainer
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        navigation={navigation}
        setShouldShowFeedBack={setShouldShowFeedBack}
      />
      {shouldShowFeedBack && (
        <Animated.View style={{ ...styles.feedbackContainer, top: scrollY }}>
          <FeedbackBoard setShouldShowFeedBack={setShouldShowFeedBack} />
        </Animated.View>
      )}
    </Animated.ScrollView>
  );
};

export default Beer;
