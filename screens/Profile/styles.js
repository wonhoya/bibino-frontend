import { StyleSheet } from "react-native";

import { PRIMARY_WHITE } from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  PROFILE_SORT_FONT_SIZE,
  PROFILE_TITLE_FONT_SIZE,
} from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_WHITE,
  },
  infoContainer: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontFamily: RUBIK_BOLD,
    fontSize: PROFILE_TITLE_FONT_SIZE,
  },
  sortDescription: {
    marginHorizontal: 30,
    fontSize: PROFILE_SORT_FONT_SIZE,
    fontFamily: RUBIK_REGULAR,
  },
  tagBoardContainer: {
    alignItems: "center",
    height: 30,
  },
  galleryContainer: {
    flex: 7,
    paddingTop: 20,
  },
  gallery: {
    flex: 1,
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  photo: {
    flex: 1,
    height: 200,
    margin: 5,
  },
  invisiblePhoto: {
    backgroundColor: "transparent",
  },
});

export default styles;
