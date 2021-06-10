import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const chracterMarginTop = windowWidth / 6;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: windowHeight / 4.5,
    marginVertical: windowHeight / 40,
  },
  body: { marginTop: chracterMarginTop },
  sparkling: { marginTop: chracterMarginTop },
});

export default styles;
