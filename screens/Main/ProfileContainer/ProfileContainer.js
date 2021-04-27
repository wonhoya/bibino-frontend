import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import TagBoard from "../../../components/shared/TagBoard/TagBoard";

const ProfileContainer = ({
  userName,
  userAvatar,
  characterAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>Hello,</Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>
            {userName}님
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: userAvatar }} />
        </View>
      </View>
      <View style={styles.tagContainer}>
        <TagBoard
          characterAverage={characterAverage}
          reviewCount={reviewCount}
        />
      </View>
    </View>
  );
};

export default ProfileContainer;
