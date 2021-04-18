import React from "react";
import { View } from "react-native";

import styles from "./styles";

import RatingContainer from "./RatingContainer/RatingContainer";
import HorizonBar from "./HorizonBar/HorizonBar";
import ChracteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentInput from "./CommentInput/CommentInput";
import EditButton from "./EditButton/EditButton";

const ratings = require("./ratingsMock.json");

const Modal = () => {
  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        <RatingContainer />
        <HorizonBar />
        <ChracteristicContainer ratings={ratings} />
        <CommentInput />
        <EditButton />
      </View>
    </View>
  );
};

export default Modal;
