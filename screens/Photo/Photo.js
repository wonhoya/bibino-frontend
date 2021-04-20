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
  console.log("test is", test);

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
      //폴더가 없으면 폴더를 만들고, 있으면 거기 있는 사진을 불러옴.
      const dirInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );

      if (!dirInfo.exists) {
        console.log("in");
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "photos/",
          { intermediates: true }
        );
      } else {
        const photos = await FileSystem.readDirectoryAsync(
          FileSystem.documentDirectory + "photos/"
        );

        const uris = photos.map((photo) => {
          return `${FileSystem.documentDirectory}photos/${photo}`;
        });

        console.log("uris", uris);

        // setTest(`${FileSystem.documentDirectory}photos/${photos[0]}`);

        setTest(uris);
      }
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
      // console.log("photoData is", photoData);
      setPhotoUri(photoData.uri);
      // console.log("photoUri in state is", photoUri);
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
    try {
      //디렉토리 삭제
      // await FileSystem.deleteAsync(FileSystem.documentDirectory + "photos/");

      //디렉토리 확인.
      // const dirInfo = await FileSystem.getInfoAsync(
      //   FileSystem.documentDirectory + "photos/"
      // );

      // if (!dirInfo.exists) {
      //   console.log("in");
      //   await FileSystem.makeDirectoryAsync(
      //     FileSystem.documentDirectory + "photos/",
      //     { intermediates: true }
      //   );
      // }

      await FileSystem.copyAsync({
        from: photoUri,
        to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
      });

      const dirInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );
      console.log("2", dirInfo);

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
        {test &&
          test.map((photo, index) => {
            return (
              <Image style={styles.image} key={index} source={{ uri: photo }} />
            );
          })}
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
