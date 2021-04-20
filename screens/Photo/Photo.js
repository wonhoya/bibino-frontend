import React, { useState, useEffect, useRef } from "react";
import { View, Image } from "react-native";
import { Camera } from "expo-camera";

import styles from "./styles";
import Configuration from "../Configuration/Configuration";
import PhotoTabBar from "../../components/PhotoTabBar/PhotoTabBar";
import * as FileSystem from "expo-file-system";
import { API_URL } from "@env";

async function callGoogleVisionAsync(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          { type: "LABEL_DETECTION", maxResults: 10 },
          { type: "TEXT_DETECTION", maxResults: 5 },
          { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
          { type: "WEB_DETECTION", maxResults: 5 },
        ],
      },
    ],
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const parsed = await response.json();

  console.log("Result:", parsed);

  return parsed.responses[0].labelAnnotations[0].description;
}

const Photo = () => {
  const cameraRef = useRef(null);
  //카메라 허가
  const [hasPermission, setHasPermission] = useState(null);
  //카메라 타입체크 후면 카메라가 기본으로 사용
  const [type, setType] = useState(Camera.Constants.Type.back);
  //카메라가 실행되어야만 takepicture해야함
  const [isCameraReady, setisCameraReady] = useState(false);

  const [isPreview, setIsPreview] = useState(false);

  const [photoUri, setPhotoUri] = useState(null);

  const [photobase64, setPhotobase64] = useState(null);

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
      // await FileSystem.deleteAsync(FileSystem.documentDirectory + "photos/");

      const dirInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "photos/"
      );

      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "photos/",
          { intermediates: true }
        );
      } else {
        const photos = await FileSystem.readDirectoryAsync(
          FileSystem.documentDirectory + "photos/"
        );

        //uri에 주소 붙이기
        const uris = photos.map((photo) => {
          return `${FileSystem.documentDirectory}photos/${photo}`;
        });

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
      const option = { quality: 1, base64: true };
      const photoData = await cameraRef.current.takePictureAsync(option);
      console.log("photoData is", photoData);
      console.log(photoData.base64);
      setPhotobase64(photoData.base64);
      setPhotoUri(photoData.uri);
      await cameraRef.current.pausePreview();
      setIsPreview(true);
    }
  };

  const handleRetake = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const handleUse = async () => {
    try {
      //디렉토리 삭제
      // await FileSystem.deleteAsync(FileSystem.documentDirectory + "photos/");

      await FileSystem.copyAsync({
        from: photoUri,
        to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
      });

      console.log("photobase64:", photobase64);

      callGoogleVisionAsync(photobase64);

      // 구글 비전으로 보내기
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
