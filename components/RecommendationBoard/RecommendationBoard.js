import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import BeerCard from "./BeerCard/BeerCard";

const RecommendationBoard = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const beersData = require("./beers.json");
      setBeers(beersData);
      setIsLoading(false);
    }, 1000);
  }, [setBeers, setIsLoading]);

  return (
    <View style={{ width: 400, height: 150 }}>
      {isLoading ? <Text>Loading...</Text> : null}
      {!isLoading && beers.length ? (
        <FlatList
          data={beers}
          renderItem={({ item }) => <BeerCard uri={item.uri} />}
          keyExtractor={({ id }) => "" + id}
          horizontal={true}
          getItemLayout={(data, index) => {
            return {
              length: 80 * 5,
              offset: 75,
              index,
            };
          }}
          initialScrollIndex={2}
        />
      ) : null}
      {!isLoading && !beers.length ? <Text>추천 맥주가 없어요...</Text> : null}
    </View>
  );
};

export default RecommendationBoard;
