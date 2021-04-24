import React, { useEffect } from "react";
import { Text } from "react-native";

import styles from "./styles";

const FeedbackBoard = ({ setShouldShowFeedBack }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setShouldShowFeedBack(false);
    }, 1500);

    return () => clearTimeout(id);
  }, [setShouldShowFeedBack]);

  return <Text style={styles.description}>Thank you for review!</Text>;
};

export default FeedbackBoard;
