import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingTop: windowWidth / 50,
    paddingBottom: windowWidth / 110,
    borderRadius: 10,
    backgroundColor: PRIMARY_ORANGE,
    alignItems: "center",
  },
});

export default styles;
