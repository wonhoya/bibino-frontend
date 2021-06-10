import { StyleSheet } from "react-native";

import { PRIMARY_ORANGE } from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultLoadingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_ORANGE,
  },
  animationContainer: {
    width: 400,
    height: 300,
    marginTop: "50%",
  },
  descriptionContainer: {
    flex: 2,
    marginTop: 10,
  },
  description: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
  },
});

export default styles;
