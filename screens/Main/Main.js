import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Camera } from "expo-camera";
import * as Linking from "expo-linking";

import styles from "./styles";
import isTodayBeerDataOutdated from "../../utils/isTodayBeerDataOutdated";
import { getUser } from "../../features/userSlice";
import {
  fetchTodayBeers,
  todayBeersDeleted,
} from "../../features/todayBeersSlice";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ContentsContainer from "./ContentsContainer/ContentsContainer";
import Loading from "../Loading/Loading";

const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const todayBeersData = useSelector((state) => {
    const { todayBeers } = state;
    return {
      beers: todayBeers.beers,
      timestamp: todayBeers.timestamp,
    };
  });
  const user = useSelector(getUser);

  const [isLoading, setIsLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const getTodayBeers = async () => {
      try {
        await dispatch(fetchTodayBeers());
      } catch (err) {
        dispatch(todayBeersDeleted());
      } finally {
        setIsLoading(false);
      }
    };

    getTodayBeers();
  }, [isLoading, dispatch]);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();

      if (status === "granted") {
        return setHasPermission(true);
      }

      if (status === "denied" || "undetermined") {
        return setHasPermission(false);
      }
    };

    requestPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const nowDate = new Date().toDateString();
      const beerUpdateDate = new Date(todayBeersData.timestamp).toDateString();
      const shouldUpdate = isTodayBeerDataOutdated(nowDate, beerUpdateDate);

      if (!todayBeersData.beers.length || shouldUpdate) {
        setIsLoading(true);

        try {
          await dispatch(fetchTodayBeers());
        } catch (err) {
          dispatch(todayBeersDeleted());
        } finally {
          setIsLoading(false);
        }
      }
    });

    return unsubscribe;
  }, [navigation, todayBeersData.beers, todayBeersData.timestamp, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasPermission === false) {
    return Linking.openSettings();
  }

  return (
    <>
      <SafeAreaView style={styles.safeArewView} />
      <View style={styles.container}>
        <ProfileContainer
          userName={user.name}
          userAvatar={user.avatar}
          characterAverage={user.characteristic}
          reviewCount={user.reviewCounts}
        />
        <ContentsContainer beers={todayBeersData.beers} />
      </View>
    </>
  );
};

export default Main;
