import {
  BACKEND_URL_FOR_DEV,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  EXPO_CLIENT_ID,
} from "@env";

const SERVER_URL = {
  development: BACKEND_URL_FOR_DEV,
  production: "it will be production url",
};

// 추후 배포할 때 써야하는 enum 입니다.
const CLIENT_ID = {
  ios: IOS_CLIENT_ID,
  android: ANDROID_CLIENT_ID,
  web: EXPO_CLIENT_ID,
};

export { SERVER_URL, CLIENT_ID };
