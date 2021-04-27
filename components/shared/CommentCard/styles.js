import { StyleSheet, Dimensions } from "react-native";
import {
  RUBIK_MEDIUM,
  RUBIK_BOLD,
  RUBIK_REGULAR,
} from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: windowWidth / 50,
    width: windowWidth / 1.2,
    height: windowWidth / 4.8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
    borderRadius: 20,
  },
  image: {
    width: windowWidth / 6.5,
    height: windowWidth / 6.5,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1.5,
    marginTop: "1%",
    marginLeft: "3%",
  },
  userName: {
    marginBottom: "18%",
    fontFamily: RUBIK_BOLD,
    fontSize: 18,
  },
  work: {
    marginBottom: "6%",
    fontFamily: RUBIK_MEDIUM,
    fontSize: 11,
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
