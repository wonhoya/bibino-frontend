import React from "react";
import { View, SafeAreaView, Text, Image, FlatList } from "react-native";
import styles from "./styles";

import avatarSample from "../../assets/pngs/avatarSample.png";
import TagBoard from "../../components/shared/TagBoard/TagBoard";
import formatItems from "../../utils/formatItems";

// 동적으로 넣을 방법 찾아야 함!
const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    imagePath: require("../../assets/pngs/beerSample1.png"),
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    imagePath: require("../../assets/pngs/beerSample2.png"),
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    imagePath: require("../../assets/pngs/beerSample3.jpeg"),
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    imagePath: require("../../assets/pngs/beerSample4.png"),
    title: "4 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    imagePath: require("../../assets/pngs/beerSample5.png"),
    title: "5 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    imagePath: require("../../assets/pngs/beerSample6.png"),
    title: "6 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d76",
    imagePath: require("../../assets/pngs/beerSample7.png"),
    title: "7 Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d77",
    imagePath: require("../../assets/pngs/beerSample7.png"),
    title: "8 Item",
  },
];

const numColumns = 3;

const Profile = () => {
  const renderItem = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.photo, styles.invisiblePhoto]} />;
    }

    return (
      <View style={styles.photo}>
        <Image
          source={item.imagePath}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image source={avatarSample} />
          <Text style={styles.title}>Alisa Chimy</Text>
          <View style={styles.tagBoardContainer}>
            <TagBoard />
          </View>
        </View>
        <View style={styles.galleryContainer}>
          <Text style={styles.sortDescription}>Sorted by: Date</Text>
          <View style={styles.gallery}>
            <FlatList
              data={formatItems(data, numColumns)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
