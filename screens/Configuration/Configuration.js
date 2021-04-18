import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LogOutIcon, ResignIcon, ContactIcon } from "../../assets/svgs/icon";

const Configuration = () => {
  return (
    <>
      {/* <SafeAreaView /> */}
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Configuration</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonBoard}>
            <LogOutIcon />
            <View style={styles.textBoard}>
              <Text style={styles.buttonTitle}>Logout</Text>
              <Text>Membership logout</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBoard}>
            <ResignIcon />
            <View style={styles.textBoard}>
              <Text style={styles.buttonTitle}>Resign</Text>
              <Text>Membership resign</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBoard}>
            <ContactIcon />
            <View style={styles.textBoard}>
              <Text style={styles.buttonTitle}>Contact</Text>
              <Text>Contact</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Configuration;
