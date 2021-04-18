import { StyleSheet, Dimensions } from "react-native";
import {
  RUBIK_MEDIUM,
  RUBIK_BOLD,
  RUBIK_REGULAR,
} from "../../../constants/font";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: width / 4.8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginVertical: width / 50,
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: "2%",
  },
  image: {
    width: width / 6,
    height: width / 6,
    borderRadius: 50,
    borderWidth: 2,
  },
  textContainer: {
    flex: 1.5,
    marginTop: "1%",
    marginLeft: "3%",
  },
  userName: {
    fontFamily: RUBIK_BOLD,
    fontSize: 18,
    marginBottom: "2%",
  },
  work: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 11,
    marginBottom: "6%",
  },
  comment: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
  },
  ratingBoardContainer: {
    flex: 1,
    marginTop: "1.5%",
    marginRight: "4%",
  },
});

export default styles;
