import { useEffect, useState } from "react";
import { products, productsCategory } from "../../api/products";
import { colorsData, paymentOptions, reviewsArray, shippingOptions, sizesData } from "../../api/data";
import { imagesList } from "../../api/unspalsh";
import { Button } from "../shared";
import { useStateContext } from "../../contexts/ContextProvider";



const ProductDetails = () => {
  const catList = ["electronics","jewelery","men's clothing","women's clothing"];

const { addProductToCart } = useStateContext();
const {cartItems, setCartItems} = useStateContext();

console.log(cartItems)



  const [UnspalshImages, setUnsplashImages] = useState([]);

  const [singleProductDetails, setsingleProductDetails] = useState([])

    // Fetch products once from API
 useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await productsCategory(catList[0]);

      // Use find to get the first item with id equal to 9
      const productWithId9 = data.find(item => parseInt(item.id) === 9);

      if (productWithId9) {
        setsingleProductDetails(productWithId9);
      } else {
        console.log("Product with id 9 not found in the category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
 console.log(singleProductDetails)

 // Fetch shoe images from unspalsh
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const images= await imagesList('person');
            if(!images.length){
               throw Error;
            }
            else{
                const reservedImages = images.slice(0,4);
                const pics = []
                const newData = reservedImages.forEach((item)=>{pics.push(item.urls.thumb)})
                setUnsplashImages(pics)}
        } 
        catch(error) {console.log(error)}
    };
    fetchData()
  },[])
  console.log(UnspalshImages)


  return (
    <div>
        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex flex-col col-span-2 flex-1 mr-4">
                <h1 className="text-slate-400 mb-1">{singleProductDetails?.category && (
                    `${singleProductDetails.category.toUpperCase()}`
                    )}
                </h1>
                <div className=" flex text-3xl font-semibold mb-1">{singleProductDetails.title} <span className="ml-2 text-lg font-light">#{singleProductDetails.id}</span></div>
                <div className="flex mb-1">
                    <span><img className="w-5 h-5 mr-1" src={`/assets/star-yel.svg`} alt="LoveIcon"/></span> 
                    {/* <span className="mr-1">{singleProductDetails?.rating.rate && (singleProductDetails.rating.rate)}</span>
                    <span>({singleProductDetails?.rating.count && singleProductDetails.rating.count})</span> */}
                    <span className="mr-1">{singleProductDetails?.rating?.rate}</span>
                    <span>({singleProductDetails?.rating?.count})</span>

                </div>
               
                <div className= "flex flex-col justify-center items-center m-2  bg-slate-300 p-4">
                    <figure className="mb-4 object-cover bg-slate-300 inline-block h-full w-80">
                        <img 
                            src={singleProductDetails.image} alt={singleProductDetails.title}
                            className="mb-4 object-cover w-full h-80 rounded-lg align-middle leading-none shadow-lg"
                        />
                        <figcaption className="p-2"> {}</figcaption>
                    </figure>
                </div>                    
               
                <div className="mb-4">
                    <h1 className="mb-2 bg-slate-950 rounded-lg w-60 font-bold"> Product Description</h1>
                    <p>{singleProductDetails?.description && (singleProductDetails.description.split(";").map((item,index)=>(
                        <ul key={index}>
                            <li>-  {`  ${item}`}</li>
                        </ul>
                    )))}</p>
                </div>
                <div className="mb-4 ">
                    <h1 className='font-bold mb-2'>Reviews</h1>
                    <div className="flex flex-row flex-wrap lg:flex-nowrap">
                    {reviewsArray.map((item,index)=>(
                        <div className="flex flex-row gap-7 mr-2"> 
                            <div>
                                <img className="rounded-full h-12 w-12 m-2" src={UnspalshImages[index]} alt={""}/>
                            </div>
                            <div className="mr-4"> 
                                <h4 className="font-thin text-slate-200 mb-1 mr-1 text-ellipsis">{item.name}</h4>
                                <p className="font-light text-sm">{item.reviewText}</p>
                            </div>
                        </div>

                    ))}
                    </div>
                </div>
                <div className="mb-10 ">
                    {/* <button onClick={()=>setCartItems(singleProductDetails) } className="bg-white text-black rounded-md w-40">ADD TO CART</button> */}
                    <Button
                        bgColor="white"
                        color="black"
                        size="10"
                        borderRadius =""
                        //   onclick of the button, a handleclick call back function is called, this function sets the value of cart to TRUE (isClicked.cart=true) and if this value is true the cart component will be rendered below
                        // onClick THIS function should take the data and append it to the CART DATA ARRAY
                        customFunc={() =>addProductToCart(singleProductDetails)}
                        // customFunc={() => {}}
                        icon={`ADD TO CART`}
                        className="bg-white text-black rounded-md w-40"
                        />
                </div>
            </div>
            <div className="grid grid-rows-5 grid-flow-col ml-6">
                <div>
                    <p className="m-1 text-xl font-bold">$ {singleProductDetails.price}</p>
                    <p className="rounded-xl"> Discounts 10%</p>
                    <p className="m-1"> Sales End: December 23, 2023</p>
                </div>
                <div className="flex flex-col">
                        <div className="mb-4">
                            <h5 className="mt-1 mr-2 text-sm text-start">Payments Options:</h5>
                        </div>
                        <div className="flex flex-row">
                            {paymentOptions.map((item,index)=>(
                                <div key={index} className="m-2 border-2 p-2">
                                    <div className="flex justify-center items-start"> 
                                        <img className="flex w-12 h-12 rounded-lg bg-white" src={item.icon} alt={""}/>
                                    </div>
                                    <p className="mt-1 mr-2 text-sm text-start">{item.name}</p>
                                </div>
                            ))}
                        </div>

                </div>
                <div>
                    <div className="flex flex-col">
                        <div><h5>Sizes:</h5></div>
                        <div className="flex flex-row">
                            {sizesData.map((item,index)=>(
                                    <div className="m-2 border-2 p-2">
                                        <div className="flex flex-row justify-center items-center"> 
                                            <p className="mt-1 mr-2 text-sm text-center">{item.name}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div><h5>Available Colours:</h5></div>
                        <div className="flex flex-row">
                            {colorsData.map((item,index)=>(
                                    <div key={index} className="m-2 border-2 p-2" style={{backgroundColor:`${item.code}`}}>
                                        <div className="flex flex-row justify-center items-center"> 
                                            <p className="mt-1 mr-2 text-sm text-center">{item.name}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <h5 className="mt-1 mr-2 text-sm text-start">Delivery Options:</h5>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            {shippingOptions.map((item,index)=>(
                                <div key={index} className="m-2 border-2 p-2">
                                    <div className="flex justify-center items-start"> 
                                        <img className="flex w-12 h-12 rounded-lg bg-white" src={item.icon} alt={""}/>
                                    </div>
                                    <p className="mt-1 mr-2 text-sm text-start">{item.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
     
      

      
      

    </div>
  )
}

export default ProductDetails
