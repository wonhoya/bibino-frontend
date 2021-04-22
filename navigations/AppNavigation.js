import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "../screens/Loading/Loading";

import { getToken, tokenStateSet } from "../features/tokenSlice";
import ASYNC_STATE from "../constants/asyncState";
import MainStackNavigator from "./MainStackNavigator";

const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToken = async () => {
      try {
        const resultAction = await dispatch(getToken());
        unwrapResult(resultAction);
      } catch (err) {
      } finally {
        setIsLoading(false);
        dispatch(tokenStateSet(ASYNC_STATE.IDLE));
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
