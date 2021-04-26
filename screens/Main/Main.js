import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import { getUser } from "../../features/userSlice";
import { fetchTodayBeers } from "../../features/todayBeersSlice";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ContentsContainer from "./ContentsContainer/ContentsContainer";
import Loading from "../Loading/Loading";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const todayBeersData = useSelector((state) => {
    const { todayBeers } = state;
    return {
      beers: todayBeers.beers,
      timestamp: todayBeers.timestamp,
    };
  });
  const user = useSelector(getUser);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const getTodayBeers = async () => {
      try {
        await dispatch(fetchTodayBeers());
      } catch (err) {
        // 투데이 맥주 fetch 실패에 대한 에러 핸들링
      } finally {
        setIsLoading(false);
      }
    };

    getTodayBeers();
  }, [isLoading, dispatch]);

  const nowDate = new Date().toDateString();
  const beerUpdateDate = new Date(todayBeersData.timestamp).toDateString();

  const isTodayBeerDataOutdated = (today, compareDate) => {
    return today !== compareDate;
  };
  const shouldUpdateTodayBeers = isTodayBeerDataOutdated(
    nowDate,
    beerUpdateDate
  );

  if (shouldUpdateTodayBeers && !isLoading) {
    setIsLoading(true);
  }

  if (shouldUpdateTodayBeers || isLoading) {
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
