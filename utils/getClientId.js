import { Platform } from "react-native";

import { CLIENT_ID } from "../config";

const getClientId = () => {
  if (process.env.NODE_ENV === "development") {
    return CLIENT_ID.web;
  } else {
    return CLIENT_ID.web;
  }
};

export default getClientId;
