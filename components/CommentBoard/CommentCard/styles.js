import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_BLACK, PRIMARY_WHITE } from "../../../constants/colors";

import {
  RUBIK_MEDIUM,
  RUBIK_REGULAR,
  RUBIK_LIGHT,
} from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.2,
    marginVertical: windowWidth / 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY_WHITE,
  },
  descriptionContatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 50,
    maxHeight: 110,
  },
  mainContainer: {
    justifyContent: "space-between",
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
    marginBottom: 30,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_LIGHT,
    fontSize: 17,
  },
  ratingBoardContainer: {
    height: 10,
  },
});

export default styles;
