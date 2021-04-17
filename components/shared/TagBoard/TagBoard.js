import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const mockTagData = ["Aromatic", "Body", "TOK", "SUCK"];

const TagBoard = ({ text, onPress, mode }) => {
  return <TouchableOpacity onPress={onPress} />;
};

export default TagBoard;
