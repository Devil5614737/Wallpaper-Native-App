import { ImageBackground, StyleSheet, Text, TouchableHighlight } from "react-native";

export const Category = ({title,img,searchByCategory,navigation}) => {
  
  return (
    <TouchableHighlight onPress={()=>{

      searchByCategory(title,navigation)
    }
    }>

    <ImageBackground
    
      resizeMode="cover"
      style={styles.categoryImage}
      source={{
        uri:img
      }}
    >
      <Text style={styles.categoryText}>{title}</Text>
    </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  categoryImage: {
    position: "relative",
    width: "100%",
    height: 150,
    borderRadius: 4,
    marginBottom: 22,
  },
  categoryText: {
    color: "white",
    bottom: 10,
    position: "absolute",
    fontSize: 22,
    left: 6,
  },
});
