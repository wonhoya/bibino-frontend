import React from "react";
import { View } from "react-native";
import {
  RatingStarFilledIcon,
  RatingStarhalfFilledIcon,
  RatingStarUnfilledIcon,
} from "../../../assets/svgs/icon";

import getStarRatings from "../../../utils/getStarRatings";

const RatingBoard = ({ mode, rating = "", total = "", size = "50" }) => {
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
  }
};

export default RatingBoard;
