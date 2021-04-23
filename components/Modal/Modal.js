import React, { useRef, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Modal from "react-native-modal";

function WrapperComponent() {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
