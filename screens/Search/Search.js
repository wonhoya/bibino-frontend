import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";
import { SearchIcon } from "../../assets/svgs/icon";
import { SEARCH_TITLE_TEXT } from "../../constants/text";
import fetchSearchBeers from "../../utils/fetchSearchBeers";
import { selectIdToken } from "../../features/tokenSlice";
import SearchCardBoard from "../../components/SearchCardBoard/SearchCardBoard";

//mockup
//https://github.com/RazaShehryar/react-native-modal-dropdown#api
//onSelect <= interaction func

const Search = () => {
  const idToken = useSelector(selectIdToken);
  const [searchInput, setSearchInput] = useState("");
  const [searchedBeers, setSearchedBeers] = useState([]);

  useEffect(() => {
    fetchSearchBeers(searchInput, idToken, setSearchedBeers);
  }, [searchInput, idToken, setSearchedBeers]);

  const handleSearchInput = (text) => {
    setSearchInput(text);
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <SearchIcon size={30} />
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              placeholder="Search b"
              onChangeText={handleSearchInput}
              value={searchInput}
            />
          </View>
          <SearchCardBoard beers={searchedBeers} />
        </View>
      </View>
    </>
  );
};

export default Search;
