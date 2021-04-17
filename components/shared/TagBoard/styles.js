import { Dimensions, StyleSheet } from "react-native";
import {
  TAG_LIGHT_PURPLE,
  TAG_RED,
  TAG_LIGHT_BLUE,
  TAG_BLACK,
} from "../../../constants/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  testConatainer: {
    width: windowWidth,
    height: windowHeight / 20,
    backgroundColor: "green",
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexDirection: "row",
  },
  tag: {
    height: 24,
    maxWidth: 90,
    minWidth: 50,
    margin: 3,
    borderRadius: 12,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  tagFont: {
    color: "white",
    fontSize: 10,
    margin: 5,
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
      break;
  }
};

export default styles;
