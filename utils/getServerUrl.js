import { BACKEND_URL_FOR_DEV } from "@env";

const getServerUrl = () => {
  let serverUrl;

  if (process.env.NODE_ENV === "development") {
    serverUrl = BACKEND_URL_FOR_DEV;
  } else if (process.env.NODE_ENV === "production") {
    // serverUrl에 배포 서버 할당
  }

  return serverUrl;
};

export default getServerUrl;
