import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import { fetchMyBeers, getUser } from "../../features/userSlice";
import formatItems from "../../utils/formatItems";
import ASYNC_STATUS from "../../constants/asyncStatus";

const numColumns = 3;

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [shouldFetch, setShouldFetch] = useState(!user.beers.length);
  const isFetchingUserBeers = useSelector(
    (state) => state.user.status === ASYNC_STATUS.LOADING
  );

  const informationPhrase =
    isFetchingUserBeers === ASYNC_STATUS.FAILED
      ? "사진 불러오기 실패.\n화면을 아래로 당겨서 새로고침 해주세요."
      : "사진이 없습니다. 맥주를 찍어보세요.";

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }

    const getMyBeers = async () => {
      await dispatch(fetchMyBeers());
      setShouldFetch(false);
    };

    getMyBeers();
  }, [shouldFetch, dispatch]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setShouldFetch(true);
    });

    return unsubscribe;
  }, [navigation, shouldFetch]);

  const handleReFetchMyBeers = () => {
    if (isFetchingUserBeers) {
      return;
    }

    setShouldFetch(true);
  };

  const renderItem = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.photo, styles.invisiblePhoto]} />;
    }

    if (item.phrase) {
      return <Text>{item.phrase}</Text>;
    }
    return (
      <TouchableOpacity
        style={styles.photo}
        onPress={() => {
          navigation.navigate("Beer", {
            beerId: item.beer,
            myBeerImageURL: item.myBeerImageURL,
          });
        }}
      >
        <Image
          source={{ uri: item.myBeerImageURL }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: user.avatar }}
            resizeMode="contain"
          />
          <Text style={styles.title}>{user.name}</Text>
        </View>
        <View style={styles.galleryContainer}>
          <View style={styles.gallery}>
            <FlatList
              data={formatItems(user.beers, numColumns, informationPhrase)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
              showsVerticalScrollIndicator={false}
              refreshing={shouldFetch}
              onRefresh={handleReFetchMyBeers}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
