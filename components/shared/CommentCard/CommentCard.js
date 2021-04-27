import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import styles from "./styles";

import RatingBoard from "../../shared/RatingBoard/RatingBoard";

const { width: windowWidth } = Dimensions.get("window");

const CommentCard = ({ commentData }) => {
  const {
    user: { _id: id, name: username, imagePath: uri },
    comment,
    rating,
  } = commentData;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image id={id} style={styles.image} source={{ uri }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{username}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.comment}>
          {comment}
        </Text>
      </View>
      <View style={styles.ratingBoardContainer}>
        <RatingBoard mode="static" rating={rating} size={windowWidth / 20} />
      </View>
    </View>
  );
};

export default CommentCard;
