import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { width: windowWidth },
});

export default styles;
