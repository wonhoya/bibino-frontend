import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  box: {
    height: 100,
    width: 100
  }
});

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        onPress={() => setColors([...colors, randomRGB()])}
        title="Add a Color"
      />
      <FlatList
        keyExtractor={(item, i) => item + i}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ ...styles.box, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
