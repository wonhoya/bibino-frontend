import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_ORAGNE } from "../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.1,
    height: windowWidth / 0.75,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
