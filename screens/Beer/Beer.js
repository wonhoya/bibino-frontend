import React from "react";
import { View, ScrollView, Image, Text, Dimensions } from "react-native";

import { RUBIK_MEDIUM } from "../../constants/font";

import { ShareIcon } from "../../assets/svgs/icon";
import Header from "../../components/shared/Header/Header";
import RatingBoard from "../../components/shared/RatingBoard/RatingBoard";
import TagBoard from "../../components/shared/TagBoard/TagBoard";

const { width: windowWidth } = Dimensions.get("window");

const Beer = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <Image
        style={{ width: windowWidth, height: windowWidth / 1.1 }}
        source={require("../../assets/pngs/beerSample8.png")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: windowWidth / 25,
          paddingHorizontal: windowWidth / 12,
        }}
      >
        <Text style={{ fontFamily: RUBIK_MEDIUM, fontSize: windowWidth / 12 }}>
          RAEA BEER
        </Text>
        <ShareIcon size={windowWidth / 15} />
      </View>
      <View style={{ marginLeft: windowWidth / 12 }}>
        <RatingBoard rating={4} />
      </View>
      <View style={{ width: windowWidth / 1.05, marginTop: windowWidth / 60 }}>
        <TagBoard />
      </View>
    </ScrollView>
  );
};

export default Beer;
