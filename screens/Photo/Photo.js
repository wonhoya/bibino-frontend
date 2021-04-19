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
import * as FileSystem from "expo-file-system";
import Loading from "../Loading/Loading";

const mockUserId = 123;

const Photo = () => {
  const cameraRef = useRef(null);
  //카메라 허가는 앱 자체에 기억되는듯
  const [hasPermission, setHasPermission] = useState(null);
  //카메라 타입체크 후면 카메라가 기본으로 사용
  const [type, setType] = useState(Camera.Constants.Type.back);
  //카메라가 실행되어야만 takepicture해야함
  const [isCameraReady, setisCameraReady] = useState(false);

  const [isPreview, setIsPreview] = useState(false);

  const [photoUri, setPhotoUri] = useState(null);

  console.log("Permission check", hasPermission);
  console.log("Camera Ready check", isCameraReady);

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

  const handleTakePicture = async () => {
    if (!isCameraReady) {
      return;
    }

    if (cameraRef.current) {
      const option = { quality: 1 };
      const photoData = await cameraRef.current.takePictureAsync(option);
      console.log("photoData is", photoData);
      setPhotoUri(photoData.uri);
      console.log("photoUri in state is", photoUri);
      await cameraRef.current.pausePreview();
      setIsPreview(true);
    }
  };

  const handleRetake = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const handleUse = async () => {
    // uri를 카피해서 저장함
    // 구글 비전 api로 보냄
    const image = photoUri;
    console.log("image is", image);
    const path = FileSystem.documentDirectory;
    try {
      const dirInfo = await FileSystem.getInfoAsync(`${path}bibino`);

      console.log("dirInfo", dirInfo);
      console.log(dirInfo.exists);

      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(`${path}bibino`, {
          intermediates: true,
        });
      }
    } catch (error) {
      console.log(error);
    }

    // const copy = await FileSystem.copyAsync({
    //   from: image,
    //   to: `${FileSystem.documentDirectory}`,
    // });
    // console.log("copy async is", copy);
  };

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
        handleRetake={handleRetake}
        handleUse={handleUse}
        isPreview={isPreview}
      />
    </View>
  );
};

export default Photo;
