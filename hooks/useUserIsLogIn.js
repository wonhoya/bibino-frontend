import { useSelector } from "react-redux";

const useUserIsLogIn = () => {
  const idToken = useSelector((state) => state.token.idToken);
  const status = useSelector((state) => state.token.status);

  return { status, idToken };
};

export default useUserIsLogIn;
