import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import SearchCard from "./SearchCard/SearchCard";

const SearchCardBoard = ({ beers }) => {
  const renderItem = ({ item }) => {
    return <SearchCard beer={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={beers}
        renderItem={renderItem}
        keyExtractor={({ id }) => "" + id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchCardBoard;
