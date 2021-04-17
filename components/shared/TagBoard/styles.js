import { StyleSheet } from "react-native";
import {
  TAG_LIGHT_PURPLE,
  TAG_RED,
  TAG_LIGHT_BLUE,
  TAG_BLACK,
  PRIMARY_WHITE,
} from "../../../constants/colors";
import { TAG_FONT_SIZE } from "../../../constants/size";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    height: 24,
    maxWidth: 90,
    minWidth: 50,
    margin: 3,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  tagFont: {
    color: PRIMARY_WHITE,
    fontSize: TAG_FONT_SIZE,
    margin: 5,
    paddingHorizontal: 10,
  },
});

styles.tagBackgroundColor = (tagType) => {
  switch (tagType) {
    case "#Aromatic":
      return { backgroundColor: TAG_LIGHT_PURPLE };

    case "#Body":
      return { backgroundColor: TAG_RED };

    case "#TOK":
      return { backgroundColor: TAG_LIGHT_BLUE };

    case "#SUCK":
      return { backgroundColor: TAG_BLACK };

    default:
      return { backgroundColor: TAG_BLACK };
  }
};

export default styles;
