import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Image,
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

  const [test, setTest] = useState(null);

  console.log("Permission check", hasPermission);
  console.log("Camera Ready check", isCameraReady);
  console.log("testing is", test);

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

  useEffect(() => {
    const readPhotos = async () => {
      const photos = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory + "photos/"
      );

      console.log(photos);
      setTest(`${FileSystem.documentDirectory}photos/${photos[0]}`);
    };

    readPhotos();
  }, []);

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
    const path = FileSystem.documentDirectory;
    try {
      //디렉토리인지 항상 확인.
      // await FileSystem.deleteAsync(FileSystem.documentDirectory + "photos/");
      const readAsync = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("READ ASYNC", readAsync);

      const dirInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );

      console.log("dirInfo", dirInfo);
      console.log(dirInfo.exists);

      if (!dirInfo.exists) {
        console.log("in");
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "photos/",
          {
            intermediates: true,
          }
        );
      }
      const dirInfo1 = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("1", dirInfo1);

      const readAsync2 = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("READ ASYNC", readAsync2);

      await FileSystem.copyAsync({
        from: photoUri,
        to: `${FileSystem.documentDirectory}photos/2.jpg`,
      });

      const dirInfo2 = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("2", dirInfo2);

      const readAsync3 = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("READ ASYNC", readAsync3);
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === false) {
    //일단 Configuration 으로 보냄.
    return <Configuration />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.test}>
        {test && <Image style={styles.image} source={{ uri: test }} />}
      </View>
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
