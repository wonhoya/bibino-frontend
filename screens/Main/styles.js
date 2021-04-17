import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
  font: {
    fontFamily: "Rubik_700Bold",
    fontSize: 50,
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    width: Dimensions.get("window").width * 0.91,
    alignSelf: "center",
  },
  profileContainer: {
    marginTop: 10,
  },
  upperProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Dimensions.get("window").height * 0.2,
  },
  hashTagContainer: {},
  contentsContainer: {
    height: Dimensions.get("window").height * 0.4,
  },
});

export default styles;
