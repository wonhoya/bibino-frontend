import { StyleSheet } from "react-native";

import { PRIMARY_LIGHT_GREY } from "../../constants/colors";
import { RUBIK_BOLD } from "../../constants/font";
import { COMMENTS_RATING_FONT_SIZE } from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
  descriptionContainer: {
    alignItems: "flex-start",
    marginLeft: 35,
    marginBottom: 10,
  },
  commentsContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  rating: {
    fontFamily: RUBIK_BOLD,
    fontSize: COMMENTS_RATING_FONT_SIZE,
  },
});

export default styles;
