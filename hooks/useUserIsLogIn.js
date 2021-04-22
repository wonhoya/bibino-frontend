import { useSelector } from "react-redux";

const useUserIsLogIn = () => {
  const accessToken = useSelector((state) => state.token.accessToken);
  const status = useSelector((state) => state.token.status);

  return { status, accessToken };
};

export default useUserIsLogIn;
