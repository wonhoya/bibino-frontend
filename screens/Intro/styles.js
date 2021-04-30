import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_WHITE } from "../../constants/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  windowContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: PRIMARY_WHITE,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

styles.dotsOpacity = (pageIndex, index) => {
  return { opacity: pageIndex === index ? 1 : 0.2 };
};

export default styles;
