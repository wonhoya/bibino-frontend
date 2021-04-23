import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE } from "../../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: windowHeight / 5,

    borderRadius: 10,
    backgroundColor: PRIMARY_ORANGE,
    alignItems: "center",
  },
});

export default styles;
