import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 5,
    height: windowWidth / 3,
    marginHorizontal: windowWidth / 24,
  },
});

export default styles;
