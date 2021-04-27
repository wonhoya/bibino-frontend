import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { unwrapResult } from "@reduxjs/toolkit";

import Loading from "../screens/Loading/Loading";
import { getIdToken, removeIdToken, userDeleted } from "../features/userSlice";
import MainStackNavigator from "./MainStackNavigator";

const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToken = async () => {
      try {
        const resultAction = await dispatch(getIdToken());
        const idToken = unwrapResult(resultAction);
        if (!idToken) {
          throw new Error("Invaild token in the secure store");
        }
      } catch (err) {
        dispatch(userDeleted());
        await dispatch(removeIdToken());
      } finally {
        setIsLoading(false);
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
