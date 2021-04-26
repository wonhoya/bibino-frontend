import React, { useEffect } from "react";
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
import {
  fetchMyBeers,
  getUser,
  userBeersShouldFetch,
} from "../../features/userSlice";
import formatItems from "../../utils/formatItems";
import ASYNC_STATUS from "../../constants/asyncStatus";

const numColumns = 3;

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const shouldFetchBeers = useSelector((state) => state.user.shouldFetchBeers);
  const isFetchingUserBeers = useSelector((state) => state.user.status);

  const informationPhrase =
    isFetchingUserBeers === ASYNC_STATUS.FAILED
      ? "사진 불러오기 실패\n화면을 아래로 당겨 새로고침 해주세요"
      : "첫 번째 맥주 사진을 찍어보세요 🍺";

  const handleReFetchMyBeers = () => {
    if (isFetchingUserBeers === ASYNC_STATUS.LOADING) {
      return;
    }
    dispatch(userBeersShouldFetch(true));
    dispatch(fetchMyBeers());
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
          navigation.navigate("Beer", { beerId: item.beer });
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
              refreshing={shouldFetchBeers}
              onRefresh={handleReFetchMyBeers}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
