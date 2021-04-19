import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import styles from "./styles";
import BeerCard from "./BeerCard/BeerCard";

const { width: windowWidth } = Dimensions.get("window");

const RecommendationBoard = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageWidth = windowWidth / 8;

  useEffect(() => {
    setTimeout(() => {
      const beersData = require("./beers.json");
      setBeers(beersData);
      setIsLoading(false);
    }, 1000);
  }, [setBeers, setIsLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : null}
      {!isLoading && beers.length ? (
        <FlatList
          data={beers}
          renderItem={({ item }) => <BeerCard uri={item.uri} />}
          keyExtractor={({ id }) => "" + id}
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
      {!isLoading && !beers.length ? <Text>추천 맥주가 없어요...</Text> : null}
    </View>
  );
};

export default RecommendationBoard;
