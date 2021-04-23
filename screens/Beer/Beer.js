import React, { useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../constants/colors";

import TitleContainer from "./TitleContainer/TitleContainer";
import RatingBoardContainer from "./RatingBoardContainer/RatingBoardContainer";
import TagBoardContainer from "./TagBoardContainer/TagBoardContainer";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentBoardContainer from "./CommentBoardContainer/CommentBoardContainer";
import RecommendationBoardContainer from "./RecommendationBoardContainer/RecommendationBoardContainer";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import SectionDivider from "./SectionDivider/SectionDivider";

const actions = [
  {
    icon: <AntDesign name="form" size={19} color={PRIMARY_BLACK} />,
    name: "reviewButton",
    position: 2,
    color: PRIMARY_ORANGE,
  },
  {
    icon: <AntDesign name="sharealt" size={20} color={PRIMARY_BLACK} />,
    name: "shareButton",
    position: 1,
    color: PRIMARY_ORANGE,
  },
];

const Beer = ({ navigation }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOnScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setOffsetY(y);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      onScroll={handleOnScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/pngs/beerSample8.png")}
        />
        <TitleContainer title="RAEA BEER" />
        <RatingBoardContainer rating={4} />
        <TagBoardContainer />
        <SectionDivider direction="right" text="Description" />
        <Text style={styles.description}>
          2020 bottle shared by a friend. Darkest brown pour with a medium light
          brown head. Aroma of malt, maple, chocolate, bourbon, vanilla and some
          coffee. Malt and vanilla flavor giving way to coconut(!), maple and
          chocolate before a sweet bourbon and maple finish. Just a tad less
          sweetness and it would have been perfect, but definitely deserving of
          the hype.
        </Text>
        <SectionDivider direction="left" text="Characteristic" />
        <CharacteristicContainer />
        <SectionDivider direction="right" text="Recommendation" />
        <RecommendationBoardContainer />
        <SectionDivider direction="left" text="Comments" />
        <CommentBoardContainer />
      </View>

      <View style={[styles.buttonContainer, styles.handleButtonY(offsetY)]}>
        <FloatingAction
          actions={actions}
          color={PRIMARY_ORANGE}
          showBackground={false}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
            if (name === "reviewButton") {
              setModalVisible(true);
            }
          }}
        />
      </View>
      <ModalContainer
        isModalVisible={isModalVisible}
        handleOnReact={closeModal}
      />
    </ScrollView>
  );
};

export default Beer;
