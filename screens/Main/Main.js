import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";

import { ProfileIcon } from "../../assets/svgs/icon";
import { TodayPickLogoSvg } from "../../assets/svgs/ilusts";
import styles from "./styles";

const Main = () => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={styles.profileContainer}>
        <View style={styles.upperProfileContainer}>
          <View>
            <View style={styles.mainParagraphContainer}>
              <Text style={[styles.darkGrey, styles.mainParagraphFont]}>
                Hello,
              </Text>
            </View>
            <Text style={[styles.darkGrey, styles.usernameFont]}>이상엽님</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <ProfileIcon />
          </View>
        </View>

        <View style={styles.hashTagContainer}>
          <Text>HashtagContainer</Text>
        </View>
      </View>
      <View style={styles.contentsContainer}>
        <View>
          <View style={styles.mainParagraphContainer}>
            <Text style={[styles.black, styles.mainParagraphFont]}>
              Beer recommended just for you
            </Text>
          </View>
          <TodayPickLogoSvg />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
