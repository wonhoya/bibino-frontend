import { CLIENT_ID } from "../config";
import { Platform } from "react-native";

const getClientId = () => {
  if (process.env.NODE_ENV === "development") {
    return CLIENT_ID.web;
  } else {
    return CLIENT_ID[Platform.OS];
  }
};

export default getClientId;
