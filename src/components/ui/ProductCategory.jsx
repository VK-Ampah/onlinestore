import { useEffect, useState } from "react";
import { products } from "../../api/products";
import { imagesList } from "../../api/unspalsh";
import { productsCategory } from "../../api/products";
import { Link } from "react-router-dom";



const ProductCategory = ({prodCategory}) => {

  const [productCategory, setProductCategory] = useState([]);
  const [productCat, setProductCat] = useState([]);

  const cat = ["electronics","jewelery","men's clothing","women's clothing"]
  
  const [UnspalshImages, setUnsplashImages] = useState([]);
//   const [unsplashSportImages, setUnspalshSportImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsCategory(cat[0]);// make this a prop prodCategory
        setProductCategory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
 console.log(productCategory)



//   Fetch products once from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsCategory('jewelery');// make this a prop prodCategory
        setProductCategory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
 console.log(productCategory)

// Fetch shoe images from unspalsh
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const images= await imagesList('shoes-nike');// make this a prop prodCategory
            if(!images.length){
               throw Error;
            }
            else{setUnsplashImages(images)}
        } 
        catch(error) {console.log(error)}
    };
    fetchData()
  },[])
 

  return (
    <div className="flex flex-col w-full">
        <div className=" text-white flex flex-row w-full justify-between m-2 bg-red-600">
            <div className="flex flex-col gap-4 p-4">
                <h2 className="m-2 text-4xl font-extrabold">UP TO 70% OFF</h2>
                <p  className="m-2 font-bold">*Free Delivery from December 23*</p>
                <div className="flex justify-center text-center">
                    <button className="bg-black rounded-md w-40">SHOP NOW</button>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-3xl font-extrabold">TRY THE GIFT BEST GIFT SHOP</h1>
                <h4 className="text-3xl font-semibold"> Browse our Clothes </h4>
            </div>
            <div className="p-2">
                       {UnspalshImages.length > 1 && UnspalshImages[4].urls ? (
                   
                        <div className="flex justify-center items-center p-2">
                        {UnspalshImages[1].urls.full && (
                            <img
                            src={UnspalshImages[4].urls.thumb || UnspalshImages[1].urls.full}
                            alt={UnspalshImages[4].alt_description || ''}
                            className="rounded-full"
                            />
                        )}
                        </div>
                    ) : null}
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
            {productCategory.map((item,index)=>(
                <Link to="/ProductDetails">
                    <div className="flex flex-col">
                        <div key={index} className= "flex flex-col justify-center m-4 rounded-md bg-white text-black">
                            <div key={index}  className= "flex flex-col justify-center items-center m-2">
                                <figure className="mb-4 object-cover inline-block h-full w-full">
                                    <img 
                                        src={item.image} alt={item.category}
                                        className="mb-4 object-cover w-full h-80 rounded-lg align-middle leading-none shadow-lg"
                                    />
                                    <figcaption className="p-2"> {item.title}</figcaption>
                                </figure>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-10 w-auto">
                                <div className="">
                                    <p className="p-2 flex"> 
                                        <span><img className="w-5 h-5 mr-1" src={`/assets/star-yel.svg`} alt="LoveIcon"/></span> 
                                        <span>{item.rating.rate}</span>
                                    </p>
                                </div>
                                <div className="flex justify-center items-center p-2">
                                    <img className="w-5 h-5" src={`/assets/love-svg.svg`} alt="LoveIcon"/>
                                    <p className="mr-4 p-2">{item.rating.count}</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <p className="text-xl font-bold p-2"> $ {item.price}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default ProductCategory
