import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import avatarImg from "../../../assets/pngs/avatarSample.png";
import styles from "./styles";

import RatingBoard from "../../shared/RatingBoard/RatingBoard";

const { width: windowWidth } = Dimensions.get("window");

const CommentCard = ({ user }) => {
  const { id, username, work, rating, comment } = user;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image id={id} style={styles.image} source={avatarImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.work}>{work}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
      <View style={styles.ratingBoardContainer}>
        <RatingBoard mode="static" rating={rating} size={windowWidth / 20} />
      </View>
    </View>
  );
};

export default CommentCard;
