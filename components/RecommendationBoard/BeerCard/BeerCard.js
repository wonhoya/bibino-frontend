import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const BeerCard = ({ uri }) => {
  return (
    <>
      <Image
        style={styles.image}
        source={require("../../../assets/pngs/beerSample7.png")}
      />
    </>
  );
};

export default BeerCard;
