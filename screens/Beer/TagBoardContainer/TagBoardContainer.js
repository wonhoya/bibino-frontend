import React from "react";
import { View } from "react-native";

import styles from "./styles";

import TagBoard from "../../../components/shared/TagBoard/TagBoard";

const TagBoardContainer = ({ characterAverage }) => {
  return (
    <View style={styles.container}>
      <TagBoard characterAverage={characterAverage} />
    </View>
  );
};

export default TagBoardContainer;
