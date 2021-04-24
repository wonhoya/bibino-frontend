import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import { fetchTodayBeers } from "../../features/todayBeersSlice";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ContentsContainer from "./ContentsContainer/ContentsContainer";
import Loading from "../Loading/Loading";

const Main = () => {
  const dispatch = useDispatch();
  const todayBeersData = useSelector((state) => {
    const { todayBeers } = state;
    return {
      beers: todayBeers.beers,
      timestamp: todayBeers.timestamp,
    };
  });
  const user = useSelector((state) => state.user);

  const nowDate = new Date().toDateString();
  const beerUpdateDate = new Date(todayBeersData.timestamp).toDateString();

  const isTodayBeerDataOutdated = (today, compareDate) => {
    return today !== compareDate;
  };

  const hasTodayBeersData = !!todayBeersData.beers.length;
  const shouldUpdateTodayBeers =
    isTodayBeerDataOutdated(nowDate, beerUpdateDate) || !hasTodayBeersData;

  useEffect(() => {
    if (!shouldUpdateTodayBeers) {
      return;
    }

    dispatch(fetchTodayBeers());
  }, [shouldUpdateTodayBeers, dispatch]);

  if (shouldUpdateTodayBeers) {
    return <Loading />;
  }

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <ProfileContainer userName={user.name} userAvatar={user.avatar} />
        <ContentsContainer beers={todayBeersData.beers} />
      </View>
    </>
  );
};

export default Main;
