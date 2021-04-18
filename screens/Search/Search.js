import React from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import { SearchIcon } from "../../assets/svgs/icon";
import SearchCardBoard from "../../components/SearchCardBoard/SearchCardBoard";
import styles from "./styles";

//mockup
//https://github.com/RazaShehryar/react-native-modal-dropdown#api
//onSelect <= interaction func
const data = ["Name", "Date", "Ratings"];

const Search = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>Search</Text>
        </View>
        <View style={styles.indicatorContainer}>
          <Text style={[styles.paragraph, styles.indicatorFont]}>
            sorted by:
          </Text>
          <ModalDropdown
            options={data}
            defaultValue={data[0]}
            dropdownStyle={styles.dropdown}
            textStyle={styles.dropdownFont}
            onSelect={() => console.log("selected")}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <SearchIcon size={30} />
          </View>
          <TextInput style={[styles.input, styles.inputFont]} />
        </View>
        <SearchCardBoard />
      </View>
    </>
  );
};

export default Search;
