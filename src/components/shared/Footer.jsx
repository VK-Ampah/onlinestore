import { useEffect, useState } from "react";
import { imagesList } from "../../api/unspalsh";

const Footer = () => {
  /*const [UnspalshImages, setUnsplashImages] = useState([]);
  
  // Fetch mastercard images from unspalsh
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
  console.log(UnspalshImages)*/
  return (
      <div className="flex justify-between bg-red-600 p-5">    
        <div className="bg-red-600">
          <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
              <li class="flow-root">
                  <a href="#Top" class="-m-2 block p-2 text-white-500 hover:text-red-800">Back To Top</a>
              </li>
              <div class="flow-root -m-2 block p-2 font-medium text-white-900"> 
                  @Copyright 2023 Online Store
                </div>
            </div>
          </div>
        </div>
  )
}

export default Footer