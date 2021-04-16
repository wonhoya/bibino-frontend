import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  stretch: {
    flex: 1,
    resizeMode: "cover",
  },
  animation: {
    position: "absolute",
    alignSelf: "center",
    width: 100,
    height: 100,
    backgroundColor: "#F2994A",
  },
});

export default styles;
