import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import TagBoard from "../../../components/shared/TagBoard/TagBoard";

//mockData
import { ProfileIcon } from "../../../assets/svgs/icon";

const ProfileContainer = ({ userName, userAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>Hello,</Text>
          </View>
          <Text style={styles.username}>{userName}님</Text>
        </View>
        <View style={styles.imageContainer}>
          <ProfileIcon />
          <Image source={{ uri: userAvatar }} />
        </View>
      </View>
      <View style={styles.tagContainer}>
        <TagBoard />
      </View>
    </View>
  );
};

export default ProfileContainer;
