import React from "react";
import { View, ScrollView, Image, Text } from "react-native";

import styles from "./styles";
import TitleContainer from "./TitleContainer/TitleContainer";
import RatingBoardContainer from "./RatingBoardContainer/RatingBoardContainer";
import TagBoardContainer from "./TagBoardContainer/TagBoardContainer";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentBoardContainer from "./CommentBoardContainer/CommentBoardContainer";
import RecommendationBoardContainer from "./RecommendationBoardContainer/RecommendationBoardContainer";

const Beer = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/pngs/beerSample8.png")}
        />
        <TitleContainer title="RAEA BEER" />
        <RatingBoardContainer rating={4} />
        <TagBoardContainer />
        <CharacteristicContainer />
        <Text style={styles.description}>
          숙성에서부터 여과까지 생산 전 공정을 맥주가 얼기 직전, 영하의 온도에서
          제조하여 시원하고 청량한 페일라거 맥주 본연의 맛을 극대화
        </Text>
        <CommentBoardContainer />
      </View>
      <RecommendationBoardContainer />
    </ScrollView>
  );
};

export default Beer;
