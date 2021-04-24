import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import { BACKEND_URL_FOR_DEV } from "@env";
import RatingBoard from "../shared/RatingBoard/RatingBoard";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import Button from "../shared/Button/Button";

const ModalContainer = ({ navigation, isModalVisible, handleOnReact }) => {
  const [isFetching, setIsFetching] = useState("Submit");

  //리덕스에서 비어 평가한 값을 가져와야함
  const [review, setReview] = useState({
    rating: 2,
    aroma: 3,
    body: 3,
    flavor: 3,
  });

  const handleSubmit = async () => {
    try {
      setIsFetching("Loading...");

      const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/scan`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review,
        }),
      });

      if (!response.ok) {
        return navigation.navigate("Failure");
      }

      const result = await response.json();

      //모달창 끄기. 이름 바꿔야될듯.
      handleOnReact();
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
        onBackdropPress={handleOnReact}
        onSwipeComplete={handleOnReact}
        swipeDirection="down"
      >
        <View style={styles.modalContainer}>
          <View style={styles.line} />
          <Text style={styles.title}>Leave your review!</Text>
          <RatingBoard mode="dynamic" review={review} />
          <CharacteristicContainer review={review} setReview={setReview} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="How was it? Feel free to leave your thought!"
          />
          <Button mode="primary" text={isFetching} onPress={handleSubmit} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalContainer;
