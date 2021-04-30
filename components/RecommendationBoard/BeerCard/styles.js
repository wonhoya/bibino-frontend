import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 2,
    height: windowWidth / 1.5,
    marginHorizontal: windowWidth / 60,
  },
});

export default styles;
