import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const BeerCard = ({ uri }) => {
  return (
    <>
      <Image style={styles.image} source={{ uri }} />
    </>
  );
};

export default BeerCard;
