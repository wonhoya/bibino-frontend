import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "../screens/Loading/Loading";

import { getIdToken, tokenStatusSet } from "../features/tokenSlice";
import ASYNC_STATUS from "../constants/asyncStatus";
import MainStackNavigator from "./MainStackNavigator";

const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToken = async () => {
      try {
        await dispatch(getIdToken());
      } catch (err) {
        // 에러 핸들링 추가해야함.
      } finally {
        setIsLoading(false);
        dispatch(tokenStatusSet(ASYNC_STATUS.IDLE));
      }
    };

    loadToken();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
