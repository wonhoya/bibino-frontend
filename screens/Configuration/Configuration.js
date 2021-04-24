import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { userDeleted } from "../../features/userSlice";
import { removeIdToken } from "../../features/tokenSlice";
import { todayBeersDeleted } from "../../features/todayBeersSlice";
import styles from "./styles";
import { LogOutIcon, ResignIcon, ContactIcon } from "../../assets/svgs/icon";

const Configuration = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    const logOutUser = async () => {
      try {
        const resultAction = await dispatch(removeIdToken());
        unwrapResult(resultAction);
        dispatch(userDeleted());
        dispatch(todayBeersDeleted());
      } catch (err) {
        // 에러 핸들링
      } finally {
        setIsLoading(false);
      }
    };

    logOutUser();
  }, [isLoading, dispatch]);

  const handleLogOut = () => {
    setIsLoading(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Configuration</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBoard}
          onPress={handleLogOut}
          disabled={isLoading}
        >
          <LogOutIcon />
          <View style={styles.textBoard}>
            <Text style={styles.buttonTitle}>Logout</Text>
            <Text style={styles.buttonDescription}>Membership logout</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBoard} disabled={isLoading}>
          <ResignIcon />
          <View style={styles.textBoard}>
            <Text style={styles.buttonTitle}>Resign</Text>
            <Text style={styles.buttonDescription}>Membership resign</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBoard} disabled={isLoading}>
          <ContactIcon />
          <View style={styles.textBoard}>
            <Text style={styles.buttonTitle}>Contact</Text>
            <Text style={styles.buttonDescription}>Contact</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Configuration;
