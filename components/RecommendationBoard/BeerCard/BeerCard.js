import React from "react";
import { Image, Text } from "react-native";

const BeerCard = ({ uri }) => {
  return (
    <>
      <Image
        style={{ width: 80, height: 150, marginHorizontal: 15 }}
        source={require("../../../assets/pngs/beerSample7.png")}
      />
    </>
  );
};

export default BeerCard;
