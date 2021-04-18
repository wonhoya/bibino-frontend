import React from "react";
import { View } from "react-native";
import Button from "../../shared/Button/Button";

import styles from "./styles";

const EditButton = () => {
  return (
    <View style={styles.container}>
      <Button text="Edit" mode="primary" />
    </View>
  );
};

export default EditButton;
