import { StyleSheet } from "react-native";
import {
  TAG_LIGHT_PURPLE,
  TAG_RED,
  TAG_LIGHT_BLUE,
  TAG_BLACK,
  PRIMARY_WHITE,
  TAG_HEAVY,
  TAG_LIGHT,
  TAG_AROMA,
  TAG_PURE,
  TAG_SPARKLE,
  TAG_TENDER,
} from "../../../constants/colors";
import { TAG_FONT_SIZE } from "../../../constants/size";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
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
    case "heavyLover":
      return { backgroundColor: TAG_HEAVY };

    case "like a Feather":
      return { backgroundColor: TAG_LIGHT };

    case "niche":
      return { backgroundColor: TAG_AROMA };

    case "refresh":
      return { backgroundColor: TAG_PURE };

    case "toks":
      return { backgroundColor: TAG_SPARKLE };

    case "tender":
      return { backgroundColor: TAG_TENDER };

    case "mellow":
      return { backgroundColor: TAG_HEAVY };

    case "light":
      return { backgroundColor: TAG_LIGHT };

    case "bittersweet":
      return { backgroundColor: TAG_AROMA };

    case "mild":
      return { backgroundColor: TAG_PURE };

    case "toks":
      return { backgroundColor: TAG_SPARKLE };

    case "bland":
      return { backgroundColor: TAG_TENDER };

    default:
      return { backgroundColor: TAG_BLACK };
  }
};

export default styles;
