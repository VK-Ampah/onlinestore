import { useEffect, useState } from "react";
import { products } from "../../api/products";
import { imagesList } from "../../api/unspalsh";
import { productsCategory } from "../../api/products";
import { Link } from "react-router-dom";
import { TopDiscount } from "../shared";




const ProductCategory = ({prodCategory}) => {

  const [productCategory, setProductCategory] = useState([]);
  const [productCat, setProductCat] = useState([]);

  const cat = ["electronics","jewelery","men's clothing","women's clothing"]
  
  const [UnspalshImages, setUnsplashImages] = useState([]);
//   const [unsplashSportImages, setUnspalshSportImages] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await productsCategory(prodCategory);// make this a prop prodCategory
//         setProductCategory(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);
//  console.log(productCategory)



//   Fetch products once from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsCategory(prodCategory);// make this a prop prodCategory
        setProductCategory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [prodCategory]);
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
       
        <TopDiscount/>

        <div className="grid grid-cols-3 gap-4">
            {productCategory?.map((item,index)=>(
                <Link to={`/ProductDetails/${item.category}/${item.id}`}>
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
