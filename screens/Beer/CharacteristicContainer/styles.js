import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");
const chracterMarginTop = windowWidth / 6;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: windowWidth / 2,
    marginVertical: windowWidth / 10,
  },
  body: { marginTop: chracterMarginTop },
  sparkling: { marginTop: chracterMarginTop },
});

export default styles;
