import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
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
  const scrollA = useRef(new Animated.Value(0)).current;

  // const [offsetY, setOffsetY] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOnScroll = (event) => {
    // const { y } = event.nativeEvent.contentOffset;
    // setOffsetY(y);

    Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollA } } }],
      {
        useNativeDriver: false,
      },
      { listener: (event) => console.log(event) }
    )(event);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Animated.ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      onScroll={handleOnScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={[styles.image, styles.handleImageY(scrollA)]}
            source={require("../../assets/pngs/beerSample8.png")}
          />
        </View>
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
        <CommentBoardContainer navigation={navigation} />
      </View>

      {/* <View style={[styles.buttonContainer, styles.handleButtonY(offsetY)]}>
        <FloatingAction
          actions={actions}
          color={PRIMARY_ORANGE}
          showBackground={false}
          onPressItem={(name) => {
            if (name === "reviewButton") {
              setModalVisible(true);
            }
          }}
        />
      </View> */}
      <ModalContainer
        isModalVisible={isModalVisible}
        handleOnReact={closeModal}
      />
    </Animated.ScrollView>
  );
};

export default Beer;
