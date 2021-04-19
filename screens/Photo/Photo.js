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

import styles from "./styles";
import Configuration from "../Configuration/Configuration";
import PhotoTabBar from "../../components/PhotoTabBar/PhotoTabBar";
import Loading from "../Loading/Loading";

const Photo = () => {
  const cameraRef = useRef(null);
  //카메라 허가는 redux-persist 에 넣어야 기억할 수 있지 않을까..?
  const [hasPermission, setHasPermission] = useState(null);
  //카메라 타입체크
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraReady, setisCameraReady] = useState(false);

  console.log("Permission check", hasPermission);
  console.log("Camera Ready check", isCameraReady);

  const handleTakePicture = async () => {
    console.log("button clicked");
    if (cameraRef.current) {
      const option = { quality: 1 };
      const photoData = await cameraRef.current.takePictureAsync(option);
      console.log("photoData is", photoData);
      await cameraRef.current.pausePreview();
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
    //테스트용으로 일단 Configuration 으로 보냄. 여기서 카메라 설정 페이지 만들던가 해야할듯.
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
      {isCameraReady ? (
        // <View style={styles.buttonContainer}>
        //   <TouchableOpacity style={styles.button} onPress={handleTakePicture} />
        // </View>
        <PhotoTabBar />
      ) : (
        // 카메라가 준비되기 전에는 로딩 페이지 렌더
        <View style={styles.LoadingContainer}>
          <Loading />
        </View>
      )}
    </View>
  );
};

export default Photo;
