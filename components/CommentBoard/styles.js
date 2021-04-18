import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_ORAGNE } from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    height: width / 1.09,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_ORAGNE,
  },
});

export default styles;
