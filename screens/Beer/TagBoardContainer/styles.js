import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { width: "90%", marginTop: windowWidth / 20 },
});

export default styles;
