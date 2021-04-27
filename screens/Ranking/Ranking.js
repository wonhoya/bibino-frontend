import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import Loading from "../Loading/Loading";
import FirstRankingContainer from "./FirstRankingContainer/FirstRankingContainer";
import SecondRankingContainer from "./SecondRankingContainer/SecondRankingContainer";
import ThirdRankingContainer from "./ThirdRankingContainer/ThirdRankingContainer";
import generateHeaderOption from "../../utils/generateHeaderOption";
import { selectIdToken } from "../../features/userSlice";

const Ranking = ({ navigation }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [beerRankings, setBeersRanking] = useState(null);
  const firstOpactiy = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const restOpacity = useRef(new Animated.Value(0)).current;

  const idToken = useSelector(selectIdToken);

  const restBeers = [];
  const topThreeBeers = [];

  beerRankings?.forEach((beerRanking, index) => {
    if (index < 3) {
      topThreeBeers.push(beerRanking);
    } else {
      restBeers.push(beerRanking);
    }
  });

  useEffect(() => {
    const getBeerRanking = async () => {
      const headers = generateHeaderOption(idToken);

      try {
        const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/rankings`, {
          method: "GET",
          headers: {
            ...headers,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          return navigation.navigate("Failure");
        }

        const result = await response.json();

        setBeersRanking(result);
        setIsFetching(false);
      } catch (error) {
        navigation.navigate("Failure");
      }
    };
    getBeerRanking();
  }, [navigation, idToken]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(firstOpactiy, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }),
      Animated.timing(restOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [firstOpactiy, secondOpacity, thirdOpacity, restOpacity, isFetching]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.invisible} />
      <Animated.View
        style={{ ...styles.firstContainer, opacity: firstOpactiy }}
      >
        <FirstRankingContainer beerInfo={topThreeBeers[0]} />
      </Animated.View>
      <Animated.View
        style={{ ...styles.secondContainer, opacity: secondOpacity }}
      >
        <SecondRankingContainer beerInfo={topThreeBeers[1]} />
      </Animated.View>
      <Animated.View
        style={{ ...styles.thirdContainer, opacity: thirdOpacity }}
      >
        <ThirdRankingContainer beerInfo={topThreeBeers[2]} />
      </Animated.View>
      <Animated.View style={{ ...styles.restContainer, opacity: restOpacity }}>
        {restBeers?.map((beer, index) => {
          return (
            <View style={styles.restDescriptionContainer} key={beer._id}>
              <Text style={styles.restName}>
                {index + 4}. {beer.name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.restDescription}
              >
                {beer.description}
              </Text>
            </View>
          );
        })}
      </Animated.View>
    </ScrollView>
  );
};

export default Ranking;
