import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Modal from "react-native-modal";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import RatingBoard from "../shared/RatingBoard/RatingBoard";
import Button from "../shared/Button/Button";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";

const ModalContainer = ({
  navigation,
  isModalVisible,
  closeModal,
  setShouldShowFeedBack,
}) => {
  const [comment, setComment] = useState("");
  const [review, setReview] = useState({
    rating: 0,
    aroma: 5,
    body: 5,
    sparkling: 5,
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BACKEND_URL_FOR_DEV}/users/123/review`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review, comment }),
      });

      if (!response.ok) {
        return navigation.navigate("Failure");
      }

      const result = await response.json();

      closeModal();
      setShouldShowFeedBack(true);
    } catch (error) {
      navigation.navigate("Failure");
    }
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
          <RatingBoard mode="dynamic" review={review} setReview={setReview} />
          <CharacteristicContainer review={review} setReview={setReview} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="How was it? Feel free to leave your thought!"
            onChangeText={(value) => setComment(value)}
          />
          <Button mode="primary" text="Submit" onPress={handleSubmit} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalContainer;
