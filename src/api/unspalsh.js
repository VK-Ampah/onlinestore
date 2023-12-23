import { createApi } from "unsplash-js";
const apiKey = process.env.REACT_APP_ACCESS_KEY;


export const unsplashApi = createApi({ accessKey: apiKey});

// non-feed example



//Get images from unspalsh

export const imagesList = async (queryName) => {
   try{
      const response =  await unsplashApi.search.getPhotos({
      query: queryName,
      page: 1,
      perPage: 10,
      // color: 'green',
      orientation: 'portrait',
      });

      if (response.type==="error") {
         console.log(response.status)
         console.log(response.type)
      }
      else if(response.type==='success') {
      console.log(response.response.results)         
      return response.response.results
      }

   }
   catch (error) 
   {console.log(error)}
}

