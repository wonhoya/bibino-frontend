import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchMyBeers, getUser } from "../../features/userSlice";
import formatItems from "../../utils/formatItems";
import ASYNC_STATUS from "../../constants/asyncStatus";

import styles from "./styles";

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
      ? "Fail to get photos\nPlease swipe down to refresh"
      : "No photos. Please take a picture";

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
        <View style={styles.galleryContainer}>
          <View style={styles.gallery}>
            <FlatList
              data={formatItems(user.beers, numColumns, informationPhrase)}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
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
