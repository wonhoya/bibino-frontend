import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import { API_SERVER_URL } from "@env";

import { selectIdToken } from "../../features/userSlice";
import generateHeaderOption from "../../utils/generateHeaderOption";
import showErrorInDevelopment from "../../utils/showErrorInDevelopment";

import styles from "./styles";

import Button from "../../components/shared/Button/Button";
import RatingBoard from "../../components/shared/RatingBoard/RatingBoard";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";

const { height: windowHeight } = Dimensions.get("window");

const ReviewModal = ({
  navigation,
  isModalVisible,
  closeModal,
  setShouldShowFeedBack,
  reviewId,
  beerId,
}) => {
  const idToken = useSelector(selectIdToken);
  const [comment, setComment] = useState("");
  const [review, setReview] = useState({
    rating: 0.5,
    aroma: 5,
    body: 5,
    sparkling: 5,
  });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    const postReview = async () => {
      const url = `${API_SERVER_URL}/reviews/${reviewId || "new"}`;
      const method = reviewId ? "PUT" : "POST";
      const headers = generateHeaderOption(idToken);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            ...headers,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            beerId,
            review,
            comment,
          }),
        });

        if (!response.ok) {
          return navigation.navigate("Failure");
        }

        await response.json();
      } catch (err) {
        showErrorInDevelopment("Failed Review post ", err);
        navigation.navigate("Failure");
      } finally {
        setIsFetching(false);
        closeModal();
        setShouldShowFeedBack(true);
      }
    };

    postReview();
  }, [
    closeModal,
    beerId,
    idToken,
    navigation,
    comment,
    review,
    reviewId,
    setShouldShowFeedBack,
    isFetching,
  ]);

  const handleSubmit = () => {
    if (isFetching) {
      return;
    }

    setIsFetching(true);
  };

  return (
    <View>
      <Modal
        style={styles.container}
        isVisible={isModalVisible}
        avoidKeyboard={true}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="down"
      >
        <View style={styles.modalContainer}>
          <View style={styles.line} />
          <Text style={styles.title}>Leave your review!</Text>
          <RatingBoard
            mode="dynamic"
            review={review}
            setReview={setReview}
            size={windowHeight / 16}
          />
          <CharacteristicContainer review={review} setReview={setReview} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="How was it? Feel free to leave your thought!"
            onChangeText={(value) => setComment(value)}
          />
          <Button
            mode="primary"
            text="Submit"
            onPress={handleSubmit}
            isLoading={isFetching}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ReviewModal;
