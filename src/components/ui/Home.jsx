import { useEffect, useState } from "react";
import { products } from "../../api/products";
import { imagesList } from "../../api/unspalsh";
import { Link } from "react-router-dom";
import { DisplayImages, TopDiscount } from "../shared";
// import {TopD}


const Home = () => {

  const [productList, setProductList] = useState([]);

  const [UnspalshImages, setUnsplashImages] = useState([]);
//   const [unsplashSportImages, setUnspalshSportImages] = useState([]);

//   Fetch products once from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await products();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


// Fetch shoe images from unspalsh
//   useEffect(()=>{
//     const fetchData = async()=>{
//         try{
//             const images= await imagesList('shoes-nike');
//             if(!images.length){
//                throw Error;
//             }
//             else{setUnsplashImages(images)}
//         } 
//         catch(error) {console.log(error)}
//     };
//     fetchData()
//   },[])
//   console.log(UnspalshImages)

// create unique categries from product list
const uniqueCategories = Array.from(new Set(productList.map(item => item.category)));


  return (
    <div className="flex flex-col w-full">    

        <div className="">
            <TopDiscount/>
        </div>
       
        <div className="grid grid-cols-2 gap-4">
           
                {/* <Navigate></Navigate> */}

                    {uniqueCategories?(uniqueCategories.map((category, index) => {
                // Filter each category in its own array
                const categoryItems = productList.filter(item => item.category === category);
                // console.log(categoryItems)

                // Render the second item for each category , could be first item, but the image for mens clothing was a bag and didnt visualize it well
                const categoryItem = categoryItems[1];

                return (
                     <Link to={`/ProductCategory/${category}`}>
                        <div key={index} className="m-4">
                            <div key={index} className="flex flex-col justify-center h-full w-full items-center p-2">
                                    <div className="relative">
                                        <figure class="mb-4 inline-block h-full max-w-sm">
                                            <img
                                            src={categoryItem.image}
                                            alt={categoryItem.category}
                                            className="mb-4 object-cover w-80 h-80 rounded-lg align-middle leading-none shadow-lg"
                                            />
                                            <figcaption
                                                class="text-center text-xl font-semibold">
                                                    {categoryItem.category.toUpperCase()}
                                            </figcaption>
                                        </figure>

                                        <div className="absolute flex top-2 right-2 rounded-full z-30 w-40 h-40 text-center justify-center bg-red-600 text-white">
                                            <div className="flex flex-col items-center  justify-center text-center p-4 rounded-full">
                                                <strong className="text-4xl font-semibold">70% </strong>
                                                <p className="text-xl font-semibold">OFF</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div><button onClick={()=>{}} className="bg-black text-white rounded-md w-40">SHOP NOW</button></div>
                            </div>
                            
                        </div>
                     </Link>
                );
                })):null}  

            {/* {UnspalshImages.length > 1 && UnspalshImages[1].urls ? (
                    <div className="m-4">
                        <div className="flex flex-col justify-center items-center p-2">
                            {UnspalshImages[1].urls.full && (
                                <figure class="mb-4 inline-block object-cover">
                                    <img
                                    src={UnspalshImages[1].urls.thumb || UnspalshImages[1].urls.full}
                                    alt={UnspalshImages[1].alt_description || ''}
                                    className="mb-4 object-cover w-80 h-80 rounded-lg align-middle leading-none shadow-lg"
                                    />
                                    <figcaption
                                        class="text-center text-sm font-semibold">
                                        NIKE SHOES
                                    </figcaption>
                                </figure>
                            )}
                            <div><button onClick={()=>{}} className="bg-black text-white rounded-md w-40">SHOP NOW</button></div>
                        </div>
                       


                    </div>
                    ) : null} */}
        </div>

    </div>
  )
}

export default Home

