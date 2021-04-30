import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import styles from "./styles";

import BeerCard from "./BeerCard/BeerCard";

const { width: windowWidth } = Dimensions.get("window");

const RecommendationBoard = ({ beers }) => {
  const imageWidth = windowWidth / 8;

  return (
    <View style={styles.container}>
      {beers?.length ? (
        <FlatList
          data={beers}
          renderItem={({ item }) => <BeerCard uri={item.imagePath} />}
          keyExtractor={({ _id }) => "" + _id}
          horizontal={true}
          getItemLayout={(data, index) => ({
            length: imageWidth * beers.length,
            offset: imageWidth,
            index,
          })}
          initialScrollIndex={Math.floor(beers.length / 2)}
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
      {beers?.length ? null : <Text>추천 맥주가 없어요...</Text>}
    </View>
  );
};

export default RecommendationBoard;
