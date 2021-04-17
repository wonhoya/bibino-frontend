import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import {
  RatingStarFilledIcon,
  RatingStarhalfFilledIcon,
  RatingStarUnfilledIcon,
} from "../../../assets/svgs/icon";

import getStarRatings from "../../../utils/getStarRatings";

const RatingBoard = ({ mode, rating = 3, total = 5, size = 50 }) => {
  const [rate, setRate] = useState(rating);
  if (mode === "static") {
    const stars = getStarRatings(rating, total, size);

    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {stars}
      </View>
    );
  }

  if (mode === "dynamic") {
    const { width: screenWidth } = Dimensions.get("window");
    const first = (screenWidth - size * total) / 2;
    const sizes = Array(total * 2)
      .fill(null)
      .map((elem, index) => {
        return {
          starX: first + (index * size) / 2,
          rating: (index + 1) / 2,
        };
      });

    const stars = getStarRatings(rate, total, size);
    return (
      <View
        style={{
          flexDirection: "row",
        }}
        onTouchStart={(eve) => {
          const pageX = Math.floor(eve.nativeEvent.pageX);

          for (const { starX, rating } of sizes) {
            if (starX <= pageX && pageX < starX + size) {
              setRate(rating);
            }
          }
        }}
        onTouchMove={(eve) => {
          const pageX = Math.floor(eve.nativeEvent.pageX);

          for (const { starX, rating } of sizes) {
            if (starX <= pageX && pageX < starX + size) {
              setRate(rating);
            }
          }
        }}
      >
        {stars}
      </View>
    );
  }
};

export default RatingBoard;
