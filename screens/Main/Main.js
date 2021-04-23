import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodayBeers } from "../../features/todayBeersSlice";
import styles from "./styles";
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

  const isStaleTodayBeersData =
    new Date().toDateString() !==
    new Date(todayBeersData.timestamp).toDateString();
  const hasTodayBeersData = !!todayBeersData.beers.length;
  const hasFetchTodayBeers = isStaleTodayBeersData || !hasTodayBeersData;

  useEffect(() => {
    if (!hasFetchTodayBeers) {
      return;
    }

    dispatch(fetchTodayBeers());
  }, [hasFetchTodayBeers, dispatch]);

  if (hasFetchTodayBeers) {
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
