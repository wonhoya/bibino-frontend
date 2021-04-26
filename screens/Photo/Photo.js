import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { Camera } from "expo-camera";
import { BACKEND_URL_FOR_DEV } from "@env";

import styles from "./styles";
import Configuration from "../Configuration/Configuration";
import PhotoTabBar from "../../components/PhotoTabBar/PhotoTabBar";
import CameraLoading from "../Loading/CameraLoading";
import { selectIdToken } from "../../features/tokenSlice";
import generateHeaderOption from "../../utils/generateHeaderOption";

const Photo = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraReady, setisCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isParseStarted, setIsParseStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [photobase64, setPhotobase64] = useState(null);

  const idToken = useSelector(selectIdToken);
  const headers = generateHeaderOption(idToken);

  useEffect(() => {
    const unSubscribe = navigation.addListener("focus", () => {
      setIsPreview(false);
      setPhotobase64(null);
    });

    return unSubscribe;
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      animationEnabled: false,
    });
  }, [navigation]);

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
      const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/scan`, {
        method: "POST",
        headers: {
          ...headers,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base64: photobase64,
        }),
      });

      if (!response.ok) {
        return navigation.navigate("Failure");
      }

      const result = await response.json();

      setIsParseStarted(false);

      if (result.status === "Analyze Success") {
        navigation.navigate("Success", {
          beerId: result.payload._id,
        });
      } else {
        navigation.navigate("AnalyzeFailure");
      }
    } catch (error) {
      navigation.navigate("Failure");
    }
  };

  if (hasPermission === false) {
    //일단 Configuration 으로 보냄.
    return <Configuration />;
  }

  if (isParseStarted) {
    return <CameraLoading />;
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
