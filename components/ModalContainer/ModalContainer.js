import React from "react";
import { View, Text, TextInput } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import RatingBoard from "../shared/RatingBoard/RatingBoard";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import Button from "../shared/Button/Button";

const ModalContainer = ({ isModalVisible, handleOnReact }) => {
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
          <RatingBoard mode="dynamic" />
          <CharacteristicContainer />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="How was it? Feel free to leave your thought!"
          />
          <Button mode="primary" text="submit" />
        </View>
      </Modal>
    </View>
  );
};

export default ModalContainer;
