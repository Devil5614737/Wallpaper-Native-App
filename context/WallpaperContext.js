import { createContext, useEffect, useState } from "react";
import { createClient } from "pexels";



const client = createClient(
    "563492ad6f91700001000001d8e4d62e5c414d42b55acc1ef9442684"
  );


export const WallpaperContext=createContext(null);


export  const WallpaperContextProvider=({children})=>{
    const[loading,setLoading]=useState(false);
const[images,setImages]=useState([]);
const[previewImage,setPreviewImage]=useState();
const[query,setQuery]=useState("");



const searchByCategory=(category,navigation)=>{
    setLoading(true)
    client.photos.search({ query:category.toLowerCase(), per_page: 50 }).then((res) =>{ 
        setLoading(false)
        setImages(res.photos)}).catch(e=>console.log(e))
navigation.navigate('ImagesScreen')

}


const displayImage=(item,navigation)=>{
    navigation.navigate('ImagePreviewScreen');
    setPreviewImage(item)
}


    return (
        <WallpaperContext.Provider value={{searchByCategory,images,loading,displayImage,previewImage,setQuery,query,setLoading,setImages}}>
            {children}
        </WallpaperContext.Provider>
    )
};