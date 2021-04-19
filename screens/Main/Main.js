import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./styles";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ContentsContainer from "./ContentsContainer/ContentsContainer";
import Loading from "../Loading/Loading";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const beerData = require("./sample.json");
      const userData = {
        name: "이상엽",
        imagePath: "XXXXXXX",
        preferences: {},
      };
      setIsLoading(false);
      setBeers(beerData);
      setUser(userData);
    }, 1000);
  }, [setBeers, setIsLoading]);

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        {isLoading ? <Loading /> : null}
        {!isLoading && beers.length ? (
          <>
            <ProfileContainer user={user} />
            <ContentsContainer beers={beers} />
          </>
        ) : null}
      </View>
    </>
  );
};

export default Main;
