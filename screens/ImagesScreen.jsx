import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React from 'react'
import  Constants  from 'expo-constants'
import { useContext } from 'react'
import { WallpaperContext } from '../context/WallpaperContext'

export default function ImagesScreen({navigation}) {
  const {images,loading,displayImage}=useContext(WallpaperContext);
  // console.log(images.photos[0].src.portrait)
  // console.log(images.photos[0].url)

  return (
    <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          {loading? <ActivityIndicator size="large" color="#0000ff" />:
          images.map(item=>
            <TouchableWithoutFeedback key={item.id} onPress={()=>displayImage(item,navigation)}>

              <Image  key={item.id} style={styles.image} resizeMode='cover' source={{uri:item.src.portrait}} />
            </TouchableWithoutFeedback>
            // <TouchableHighlight>
              
            // </TouchableHighlight>
            )
          
          }

  
        </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
        backgroundColor:'black'
    },
    imageContainer:{
display: "flex",
flexDirection:'row',
flexWrap:'wrap',
padding:12
    },
    image:{
        width:'46%' ,
        height:350,
    marginBottom:12,
    marginLeft:12
    }
})