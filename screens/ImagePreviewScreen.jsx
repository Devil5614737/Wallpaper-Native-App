import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { WallpaperContext } from "../context/WallpaperContext";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Haptics from 'expo-haptics';

export default function ImagePreviewScreen() {
  const { previewImage } = useContext(WallpaperContext);

  const downloadFile = async (url) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    let path = url.split("/");
    const file_name = path[path.length - 1];
    FileSystem.downloadAsync(url, FileSystem.documentDirectory + file_name)
      .then(({ uri }) => {
        alert("Download successfull ", uri);
        MediaLibrary.createAssetAsync(uri).then((asset) => {
          console.log("asset", asset);
          MediaLibrary.createAlbumAsync("myfolder", asset)
            .then((data) => console.log(data.title))
            .catch((error) => alert(error));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={{ uri: previewImage.src.portrait }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => downloadFile(previewImage.src.portrait)}
      >
        <MaterialCommunityIcons
          style={{ marginRight: 10 }}
          name="download-outline"
          size={24}
          color="#858585"
        />
        <Text style={{ color: "#858585", fontSize: 19, textAlign: "center" }}>
          Download
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
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
