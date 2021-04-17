import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const CharacteristicBoard = ({ rating = 3 }) => {
  const [slideVal, setSlideVal] = useState(rating);
  const sliderStyle = {
    sliderDummy: {
      backgroundColor: "#d3d3d3",
      width: 300,
      height: 20,
      borderRadius: 50,
      position: "absolute",
    },
    sliderReal: {
      backgroundColor: "#119EC2",
      width: (slideVal / 50) * 300,
      height: 20,
    },
  };
  return (
    <View>
      <Text
        style={{
          position: "relative",
          backgroundColor: "red",
          right: 10,
          bottom: 15,
          fontSize: 30,
        }}
      >
        Aroma
      </Text>
      <View style={{ borderRadius: 50, overflow: "hidden" }}>
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <View style={sliderStyle.sliderDummy} />
          <View style={sliderStyle.sliderReal} />
        </View>
        <Slider
          style={{
            width: 300,
            height: 20,
          }}
          minimumValue={0}
          maximumValue={48}
          value={slideVal}
          onValueChange={(value) => setSlideVal(value)}
          maximumTrackTintColor="transparent"
          minimumTrackTintColor="transparent"
        />
      </View>
    </View>
  );
};

export default CharacteristicBoard;
