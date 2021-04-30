import { StyleSheet, Dimensions } from "react-native";

import {
  RUBIK_MEDIUM,
  RUBIK_BOLD,
  RUBIK_REGULAR,
} from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginVertical: windowWidth / 50,
    width: windowWidth / 1.2,
    height: windowWidth / 2.8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  descriptionContatiner: {
    height: 50,
    maxHeight: 110,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  mainContainer: {
    justifyContent: "space-between",
    height: windowWidth / 6,
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
    borderRadius: 20,
  },
  image: {
    width: windowWidth / 12.5,
    height: windowWidth / 12.5,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    marginTop: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 12,
  },
  work: {
    marginBottom: "6%",
    fontFamily: RUBIK_MEDIUM,
    fontSize: 11,
  },
  comment: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 17,
  },
  ratingBoardContainer: {
    height: 10,
  },
});

export default styles;
