import { useEffect, useState } from "react";
import { imagesList } from "../../api/unspalsh";

const Footer = () => {
  const [UnspalshImages, setUnsplashImages] = useState([]);
  
  // Fetch mastercard images from unspalsh (updated)
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const images= await imagesList('visa');
            if(!images.length){
               throw Error;
            }
            else{setUnsplashImages(images)}
        } 
        catch(error) {console.log(error)}
    };
    fetchData()
  },[])
  console.log(UnspalshImages)
}


    
  

export default Footer
