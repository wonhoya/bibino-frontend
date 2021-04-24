import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import SearchCard from "./SearchCard/SearchCard";
import {
  PRIMARY_DARK_GREY,
  PRIMARY_ORANGE,
  SEARCH_YELLOW,
  SERACH_RED,
} from "../../constants/colors";

const SearchCardBoard = ({ beers }) => {
  //이거 만약 ranking일때만 위 3개 색칠해주는거면 props받아온 후에
  //로직 조금 수정해줘야함
  const renderItem = ({ item, index }) => {
    let backgroundColor;
    const colorCase = index % 4;

    switch (colorCase) {
      case 0:
        backgroundColor = SERACH_RED;
        break;
      case 1:
        backgroundColor = PRIMARY_ORANGE;
        break;
      case 2:
        backgroundColor = SEARCH_YELLOW;
        break;
      default:
        backgroundColor = PRIMARY_DARK_GREY;
    }

    return <SearchCard beer={item} backgroundColor={backgroundColor} />;
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
