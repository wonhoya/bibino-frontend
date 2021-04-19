import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import Configuration from "../Configuration/Configuration";
import PhotoTabBar from "../../components/PhotoTabBar/PhotoTabBar";
import Loading from "../Loading/Loading";

const Photo = () => {
  const cameraRef = useRef(null);
  //카메라 허가는 앱 자체에 기억되는듯
  const [hasPermission, setHasPermission] = useState(null);
  //카메라 타입체크 후면 카메라가 기본으로 사용
  const [type, setType] = useState(Camera.Constants.Type.back);
  //카메라가 실행되어야만 takepicture해야함
  const [isCameraReady, setisCameraReady] = useState(false);

  const [isPreview, setIsPreview] = useState(false);

  console.log("Permission check", hasPermission);
  console.log("Camera Ready check", isCameraReady);

  const handleTakePicture = async () => {
    if (!isCameraReady) {
      return;
    }

    if (cameraRef.current) {
      const option = { quality: 1 };
      const photoData = await cameraRef.current.takePictureAsync(option);
      console.log("photoData is", photoData);
      await cameraRef.current.pausePreview();
      setIsPreview(true);
    }
  };

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status === "granted") {
        return setHasPermission(true);
      }
      if (status === "denied" || "undetermined") {
        return setHasPermission(false);
      }
    };
    requestPermission();
  }, [hasPermission]);

  if (hasPermission === false) {
    //일단 Configuration 으로 보냄.
    return <Configuration />;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        onCameraReady={() => setisCameraReady(true)}
      />
      <PhotoTabBar
        handleTakePicture={handleTakePicture}
        isPreview={isPreview}
      />
    </View>
  );
};

export default Photo;
