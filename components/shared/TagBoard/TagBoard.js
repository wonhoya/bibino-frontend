import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
// import styles from "./styles";

const mockTagData = ["Aromatic", "Body", "TOK", "SUCK"];
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TagBoard = ({ text, onPress, mode }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} />;
    </>
  );
};

export default TagBoard;

const styles = StyleSheet.create({
  windowContainer: { width: windowWidth, height: windowHeight },
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonConatainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    color: black,
    fontSize: title_textFontSize,
    fontFamily: Rubik_bold,
    margin: 25,
    textAlign: "center",
  },
  descripton: {
    color: black,
    fontSize: paragraph_textFontSize,
    fontFamily: Rubik_regular,
    margin: 20,
    textAlign: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});
