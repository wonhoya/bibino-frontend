import { StyleSheet } from "react-native";

import {
  PRIMARY_ORANGE,
  PRIMARY_GREY,
  PRIMARY_LIGHT_GREY,
} from "../../constants/colors";
import { RUBIK_BOLD } from "../../constants/font";
import { COMMENTS_RATING_FONT_SIZE } from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  commentsContainer: {
    flex: 9,
    alignItems: "center",
  },
  rating: {
    fontFamily: RUBIK_BOLD,
    fontSize: COMMENTS_RATING_FONT_SIZE,
  },
});

export default styles;
