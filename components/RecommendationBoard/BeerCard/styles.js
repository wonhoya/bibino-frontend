import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 3,
    height: windowWidth / 2,
    marginHorizontal: windowWidth / 40,
  },
});

export default styles;
