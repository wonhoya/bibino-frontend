import React from "react";
import { View, Dimensions } from "react-native";

import getStarRatings from "../../../utils/getStarRatings";
import styles from "./styles";

const RatingBoard = ({
  mode = "static",
  review,
  setReview,
  rating = 3,
  total = 5,
  size = 50,
}) => {
  if (mode === "static") {
    const stars = getStarRatings(rating, total, size);
    return <View style={styles.container}>{stars}</View>;
  }

  if (mode === "dynamic") {
    const { width: screenWidth } = Dimensions.get("window");
    const firstStarOffsetX = (screenWidth - size * total) / 2;
    const starsForCalculate = Array(total * 2)
      .fill(null)
      .map((elem, index) => {
        return {
          starOffsetX: firstStarOffsetX + (index * size) / 2,
          calculatedRating: (index + 1) / 2,
        };
      });

    const stars = getStarRatings(review.rating, total, size);

    const handleTouchStart = (event) => {
      const pageX = Math.floor(event.nativeEvent.pageX);

      for (const { starOffsetX, calculatedRating } of starsForCalculate) {
        if (starOffsetX <= pageX && pageX < starOffsetX + size) {
          setReview({ ...review, rating: calculatedRating });
        }
      }
    };

    return (
      <View style={styles.container} onTouchStart={handleTouchStart}>
        {stars}
      </View>
    );
  }
};

export default RatingBoard;
