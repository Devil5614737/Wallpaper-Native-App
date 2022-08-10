import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
  CameraRoll,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { WallpaperContext } from "../context/WallpaperContext";
import { useState } from "react";


import { downloadFileFromUri } from 'expo-downloads-manager';



export default function ImagePreviewScreen() {
    const { previewImage } = useContext(WallpaperContext);


  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={{ uri: previewImage.src.portrait }}
    >
      <TouchableOpacity style={styles.button} 
     onPress={async () => {
        const { status, error } = await downloadFileFromUri(
              previewImage.url,
              previewImage.alt,
            //   callback
            );
            console.log(status,error)
      }}
      >
        <MaterialCommunityIcons
          style={{ marginRight: 10 }}
          name="download-outline"
          size={24}
          color="#858585"
        />
        <Text
         
          style={{ color: "#858585", fontSize: 19, textAlign: "center" }}
        >
          Download
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    padding: 12,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: 60,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    left: 10,
  },
});
