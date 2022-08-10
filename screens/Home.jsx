import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Category } from "../components/category";
import { useContext } from "react";
import { WallpaperContext } from "../context/WallpaperContext";
import { Motion } from "@legendapp/motion";




export default function Home({navigation}) {
const {searchByCategory}=useContext(WallpaperContext)
  
const categories=[
  {
    id:1,
    category:"Abstract",
    img:"https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
  },
  {
    id:2,
    category:"Landscapes",
    img:"https://images.unsplash.com/photo-1562043236-559c3b65a6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    id:3,
    category:"Nature",
    img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    id:4,
    category:"Space",
    img:"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
]


  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.imageContainer}
          source={require("../assets/bg.png")}
        >
          <View style={styles.searchBox}>
            <TextInput
              style={styles.input}
              placeholder="search image"
              placeholderTextColor="#858585"
            />
            <Feather
              style={{
                position: "absolute",
                right: 20,
                top: 15,
              }}
              name="search"
              size={20}
              color="#C2C2C2"
            />
          </View>
        </ImageBackground>
        
        <Text  
  style={{color:'white',fontSize:25,left:17}}>Categories</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map(item=>
          <Category navigation={navigation}  searchByCategory={searchByCategory} key={item.id} title={item.category} img={item.img}/>
            )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    height: 300,
  },
  searchBox: {
    height: 50,
    margin: "auto",
    width: "80%",
    top: 122,
    left: 42,
    position: "relative",
  },
  input: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: 18,
    paddingLeft: 12,
  },
  categories: {
    padding: 18,
  },
});
