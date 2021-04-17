import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import { ProfileIcon } from "../../assets/svgs/icon";
import { TodayPickLogoSvg } from "../../assets/svgs/ilusts";
import styles from "./styles";

const Main = () => {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.screen]}>
      <View style={styles.profileContainer}>
        <View style={styles.upperProfileContainer}>
          <View>
            <Text>Hello,</Text>
            <Text>이상엽님</Text>
          </View>
          <View>
            <View style={styles.profileImageContainer} />
          </View>
        </View>
        <View style={styles.hashTagContainer}>
          <Text>HashtagContainer</Text>
        </View>
      </View>
      <View />
      <View style={styles.contentsContainer}>
        <View>
          <Text>Beer recommended just for you</Text>
          <TodayPickLogoSvg />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
