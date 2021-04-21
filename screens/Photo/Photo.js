import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image } from "react-native";
import { Camera } from "expo-camera";
import LottieView from "lottie-react-native";

import styles from "./styles";
import Configuration from "../Configuration/Configuration";
import PhotoTabBar from "../../components/PhotoTabBar/PhotoTabBar";
import * as FileSystem from "expo-file-system";
import callGoogleVisionAsync from "../../utils/callGoogleVisionAsync";

const Photo = ({ navigation }) => {
  const cameraRef = useRef(null);

  const [hasPermission, setHasPermission] = useState(null);

  //카메라가 실행되어야만 takepicture해야함
  const [isCameraReady, setisCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isParseStarted, setIsParseStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  // const [photoUri, setPhotoUri] = useState(null);
  const [photobase64, setPhotobase64] = useState(null);

  console.log("isAnimationFinished", isAnimationFinished);
  console.log("Permission check", hasPermission);
  console.log("Camera Ready check", isCameraReady);
  //이거 하면 위험할 수 있음. request too large
  // console.log("photobase64", photobase64);

  useEffect(() => {
    navigation.setOptions({
      animationEnabled: false,
    });
  }, []);

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
  }, []);

  //로컬 디렉토리 저장 함수
  useEffect(() => {
    const makeDirectory = async () => {
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

        //uri에 주소 붙이기 이미지 불러오기 위해서는 이미지 이름 앞에 ${FileSystem.documentDirectory}photos/
        const uris = photos.map((photo) => {
          return `${FileSystem.documentDirectory}photos/${photo}`;
        });

        console.log(uris);
      }
    };

    makeDirectory();
  }, []);

  const handleTakePicture = async () => {
    if (!isCameraReady) {
      return;
    }

    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync({
        quality: 0.3,
        base64: true,
      });
      await cameraRef.current.pausePreview();
      setIsPreview(true);
      setPhotobase64(photoData.base64);
    }
  };

  const handleRetake = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const handleUse = async () => {
    try {
      setIsParseStarted(true);

      //디렉토리 삭제
      // await FileSystem.deleteAsync(FileSystem.documentDirectory + "photos/");

      // 카피 이미지
      // await FileSystem.copyAsync({
      //   from: photoUri,
      //   to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
      // });

      //서버에 이미지 보내고 구글 비전 결과 받기
      const response = await fetch("http://192.168.0.54:3000/api/beers/scan", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "hi are you connected?",
          base64: photobase64,
        }), //photobase64
      });

      const parsed = await response.json();

      // 구글 비전으로 보내기
      // const parsedText = await callGoogleVisionAsync(photobase64);
      // console.log("parsedText:", parsedText);
      setIsParseStarted(false);

      // 여기서 navigate
      navigation.navigate("Success");
    } catch (error) {
      console.log(error);
      navigation.navigate("Failure");
    }
  };

  if (hasPermission === false) {
    //일단 Configuration 으로 보냄.
    return <Configuration />;
  }

  if (isParseStarted) {
    return (
      <View style={styles.resultLoadingContainer}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/animations/resultScreenLoadingAnimation.json")}
            style={styles.animation}
            autoPlay
            loop={true}
            speed={0.6}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Analzing...</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        {isAnimationFinished ? (
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={Camera.Constants.Type.back}
            onCameraReady={() => setisCameraReady(true)}
          />
        ) : (
          <View style={styles.camera} />
        )}
        <PhotoTabBar
          handleTakePicture={handleTakePicture}
          handleRetake={handleRetake}
          handleUse={handleUse}
          isPreview={isPreview}
          isCameraReady={isCameraReady}
          setIsAnimationFinished={setIsAnimationFinished}
        />
      </View>
    </>
  );
};

export default Photo;

{
  /* <View style={styles.test}>
{test &&
  test.map((photo, index) => {
    return (
      <Image style={styles.image} key={index} source={{ uri: photo }} />
    );
  })}
</View> */
}

// const [test, setTest] = useState(null);
