import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { CountUp } from "use-count-up";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import { PRIMARY_ORANGE } from "../../constants/colors";

import Loading from "../Loading/Loading";
import FirstRankingContainer from "./FirstRankingContainer/FirstRankingContainer";
import SecondRankingContainer from "./SecondRankingContainer/SecondRankingContainer";
import generateHeaderOption from "../../utils/generateHeaderOption";
import { selectIdToken } from "../../features/userSlice";

const mockbeers = [1, 2, 3, 4, 5, 6, 7];

const Ranking = ({ navigation }) => {
  const [isFetching, setIsFetching] = useState(true);
  const firstOpactiy = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const restOpacity = useRef(new Animated.Value(0)).current;
  const [beerInfo, setBeersInfo] = useState(null);

  const idToken = useSelector(selectIdToken);
  const headers = generateHeaderOption(idToken);
  const amountBeer = 10;

  useEffect(() => {
    const getBeerRanking = async () => {
      try {
        // const response = await fetch(
        //   `${BACKEND_URL_FOR_DEV}/beers/${route.params.beerId}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       ...headers,
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );

        // if (!response.ok) {
        //   return navigation.navigate("Failure");
        // }

        // const result = await response.json();

        // setBeersInfo(result);
        setIsFetching(false);
      } catch (error) {
        navigation.navigate("Failure");
      }
    };
    getBeerRanking();
  }, []);

  console.log("beerInfo is", beerInfo);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(firstOpactiy, {
        toValue: 1,
        duration: 900,
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

  // if (isFetching) {
  //   return <Loading />;
  // }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ranking</Text>

      <Animated.View
        style={{ ...styles.firstContainer, opacity: firstOpactiy }}
      >
        <FirstRankingContainer />
      </Animated.View>

      <Animated.View
        style={{ ...styles.secondContainer, opacity: secondOpacity }}
      >
        <SecondRankingContainer />
      </Animated.View>

      <Animated.View
        style={{ ...styles.thirdContainer, opacity: thirdOpacity }}
      >
        <View
          style={[
            styles.thirdRankingNumberContainer,
            {
              transform: [{ translateY: 10 }, { translateX: -5 }],
            },
          ]}
        >
          <Text style={styles.thirdNumber}>3</Text>
        </View>
        <View style={styles.thirdRankingDescriptionContainer}>
          <Text style={styles.rating}>
            <CountUp isCounting end={2.5} duration={5} /> stars
          </Text>
          <Text style={styles.reviewCount}>
            based on <CountUp isCounting end={132} duration={5} /> review
          </Text>
          <Text style={styles.thirdName}>Kloud</Text>
        </View>
      </Animated.View>
      <Animated.View style={{ ...styles.restContainer, opacity: restOpacity }}>
        {mockbeers.map((beer, index) => {
          return (
            <View style={styles.restDescriptionContainer}>
              <Text style={styles.restName}>{index}.Hoeegarden</Text>
              <Text style={styles.restDescription}>Beerbeer</Text>
            </View>
          );
        })}
      </Animated.View>
    </ScrollView>
  );
};

export default Ranking;
