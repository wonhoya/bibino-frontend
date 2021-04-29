import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Animated, Easing } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { useNavigationState } from "@react-navigation/native";

import styles from "./styles";
import { SERVER_URL } from "../../config";
import { PRIMARY_ORANGE } from "../../constants/colors";
import floatingButtons from "../../constants/floatingButtons";
import { selectIdToken } from "../../features/userSlice";
import { commentsAdded, getComments } from "../../features/commentsSlice";
import showErrorInDevelopment from "../../utils/showErrorInDevelopment";
import TitleContainer from "./TitleContainer/TitleContainer";
import RatingBoardContainer from "./RatingBoardContainer/RatingBoardContainer";
import TagBoardContainer from "./TagBoardContainer/TagBoardContainer";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentBoardContainer from "./CommentBoardContainer/CommentBoardContainer";
import RecommendationBoardContainer from "./RecommendationBoardContainer/RecommendationBoardContainer";
import ReviewModal from "../ReviewModal/ReviewModal";
import Loading from "../Loading/Loading";
import SectionDivider from "./SectionDivider/SectionDivider";
import FeedbackBoard from "../../components/FeedbackBoard/FeedbackBoard";
import generateHeaderOption from "../../utils/generateHeaderOption";

const Beer = ({ navigation, route }) => {
  const { myBeerImageURL, beerId } = route.params;
  const dispatch = useDispatch();
  const navState = useNavigationState((state) => state);
  const moveY = useRef(new Animated.Value(100)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isFetching, setIsFetching] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [shouldShowFeedBack, setShouldShowFeedBack] = useState(false);
  const [beerInfo, setBeerInfo] = useState(null);
  const [myReview, setMyReview] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const userId = useSelector((state) => state.user.id);
  const idToken = useSelector(selectIdToken);
  const commentDatum = useSelector(getComments);

  useEffect(() => {
    if (navState.routes[navState.index - 1]?.name === "Success") {
      navigation.setOptions({
        gestureEnabled: false,
      });
    }
  }, [navigation, navState.index, navState.routes]);

  useEffect(() => {
    if (isModalVisible) {
      return;
    }

    const serverUrl = SERVER_URL[process.env.NODE_ENV];
    const headers = generateHeaderOption(idToken);
    const fetchUrls = [
      `${serverUrl}/beers/${beerId}`,
      `${serverUrl}/beers/${beerId}/comments/`,
      `${serverUrl}/beers/${beerId}/recommendations/`,
    ];

    const fetchAllData = async () => {
      const fetchedDatum = fetchUrls.map((url) => {
        return (async () => {
          const response = await fetch(url, {
            headers: {
              ...headers,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          return await response.json();
        })();
      });

      try {
        const [
          fetchedBeerData,
          fetchedCommentDatum,
          fetchedRecommendation,
        ] = await Promise.all(fetchedDatum);

        const userReview = fetchedCommentDatum.filter(
          ({ user: { _id } }) => _id === userId
        );
        const userReviewId = userReview[0]?._id;
        let response;

        if (userReviewId) {
          response = await fetch(`${serverUrl}/reviews/${userReviewId}`, {
            headers: {
              ...headers,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
        }

        const fetchedMyReview = await response?.json();
        setBeerInfo(fetchedBeerData || {});
        setMyReview(fetchedMyReview || {});
        dispatch(commentsAdded(fetchedCommentDatum || []));
        setRecommendation(fetchedRecommendation || []);
      } catch (err) {
        showErrorInDevelopment("Failed Beer scrren fetch ", err);
        setBeerInfo({});
        setMyReview({});
        dispatch(commentsAdded([]));
        setRecommendation([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchAllData();
  }, [idToken, navigation, beerId, userId, dispatch, isModalVisible]);

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
    <>
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
              source={{ uri: myBeerImageURL || beerInfo.imagePath }}
            />
          </View>
          <TitleContainer
            title={beerInfo.name}
            rating={myReview.rating}
            reviewCounts={commentDatum.length}
          />
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
            <RecommendationBoardContainer beers={recommendation} />
          </Animated.View>
          <SectionDivider direction="left" text="Comments" />
          <CommentBoardContainer
            navigation={navigation}
            commentDatum={commentDatum}
          />
        </View>
        <ReviewModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          navigation={navigation}
          setShouldShowFeedBack={setShouldShowFeedBack}
          reviewId={myReview._id}
          beerId={beerInfo._id}
        />
        {shouldShowFeedBack && (
          <Animated.View style={{ ...styles.feedbackContainer, top: scrollY }}>
            <FeedbackBoard setShouldShowFeedBack={setShouldShowFeedBack} />
          </Animated.View>
        )}
      </Animated.ScrollView>
      <FloatingAction
        actions={floatingButtons}
        color={PRIMARY_ORANGE}
        distanceToEdge={{ vertical: 100, horizontal: 30 }}
        showBackground={false}
        onPressItem={(name) => {
          if (name === "reviewButton") {
            setModalVisible(true);
          }
        }}
      />
    </>
  );
};

export default Beer;
