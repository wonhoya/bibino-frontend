import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth / 10,
    borderRadius: 10,
    backgroundColor: PRIMARY_ORANGE,
  },
});

export default styles;
