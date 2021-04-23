import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import ModalDropdown from "react-native-modal-dropdown";
import debounce from "lodash.debounce";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import { SearchIcon } from "../../assets/svgs/icon";
import { SEARCH_TITLE_TEXT } from "../../constants/text";
import getHeadersIncludedIdToken from "../../utils/getHeadersIncludedIdToken";
import SearchCardBoard from "../../components/SearchCardBoard/SearchCardBoard";

//mockup
//https://github.com/RazaShehryar/react-native-modal-dropdown#api
//onSelect <= interaction func

const fetchBeerSearched = async (searchText, idToken, setSearchedBeers) => {
  const headers = getHeadersIncludedIdToken(idToken);
  const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/search`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ searchText }),
  });

  const searchedBeers = await response.json();
  const processedSearchedBeers = searchedBeers.map((beer) => {
    return {
      id: beer._id,
      name: beer.name,
      description: beer.description.slice(0, 25) + "...",
      imagePath: beer.imagePath,
    };
  });
  setSearchedBeers(processedSearchedBeers);
};

const debouncedFetchBeerSearched = debounce(fetchBeerSearched, 300);

const Search = () => {
  const idToken = useSelector((state) => state.token.idToken);
  const [searchText, setSearchText] = useState("");
  const [searchedBeers, setSearchedBeers] = useState([]);

  useEffect(() => {
    debouncedFetchBeerSearched(searchText, idToken, setSearchedBeers);
  }, [searchText, idToken, setSearchedBeers]);

  const handleSearchInput = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{SEARCH_TITLE_TEXT}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <SearchIcon size={30} />
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              placeholder="Search beers"
              onChangeText={handleSearchInput}
              value={searchText}
            />
          </View>
          <SearchCardBoard beers={searchedBeers} />
        </View>
      </View>
    </>
  );
};

export default Search;
