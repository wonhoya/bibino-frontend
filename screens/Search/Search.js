import React, { useState, useEffect } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import { useSelector } from "react-redux";

import { selectIdToken } from "../../features/userSlice";
import fetchSearchBeers from "../../utils/fetchSearchBeers";

import styles from "./styles";

import { SearchIcon } from "../../assets/svgs/icon";
import SearchCardBoard from "../../components/SearchCardBoard/SearchCardBoard";

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
              placeholder="Search beer"
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
