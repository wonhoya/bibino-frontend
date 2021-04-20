import React from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import styles from "./styles";
import { SearchIcon } from "../../assets/svgs/icon";
import SearchCardBoard from "../../components/SearchCardBoard/SearchCardBoard";
import { SEARCH_TITLE_TEXT } from "../../constants/text";

//mockup
//https://github.com/RazaShehryar/react-native-modal-dropdown#api
//onSelect <= interaction func
const data = ["Name", "Date", "Ratings"];

const Search = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{SEARCH_TITLE_TEXT}</Text>
          </View>
          <View style={styles.indicatorContainer}>
            <Text style={[styles.paragraph, styles.indicator]}>sorted by:</Text>
            <ModalDropdown
              options={data}
              defaultValue={data[0]}
              dropdownStyle={styles.dropdown}
              textStyle={styles.dropdownText}
              onSelect={() => console.log("selected")}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <SearchIcon size={30} />
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>
          <SearchCardBoard />
        </View>
      </View>
    </>
  );
};

export default Search;
