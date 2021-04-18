import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_LIGHT_GREY, PRIMARY_WHITE } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.2,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
  textInput: {
    width: windowWidth / 1.3,
    padding: 10,
    borderRadius: 8,
    backgroundColor: PRIMARY_WHITE,
    fontSize: windowWidth / 25,
  },
});

export default styles;
