import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import SearchCard from "./SearchCard/SearchCard";

const SearchCardBoard = ({ beers }) => {
  //이거 만약 ranking일때만 위 3개 색칠해주는거면 props받아온 후에
  //로직 조금 수정해줘야함
  const renderItem = ({ item, index }) => {
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
