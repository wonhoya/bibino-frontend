import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, EXPO_CLIENT_ID } from "@env";

// 추후 배포할 때 써야하는 enum 입니다.
const CLIENT_ID = {
  ios: IOS_CLIENT_ID,
  android: ANDROID_CLIENT_ID,
  web: EXPO_CLIENT_ID,
};

export { CLIENT_ID };
