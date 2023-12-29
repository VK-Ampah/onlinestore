import { useEffect, useState } from "react";
import { products, productsCategory } from "../../api/products";
import { colorsData, paymentOptions, reviewsArray, shippingOptions, sizesData } from "../../api/data";
import { imagesList } from "../../api/unspalsh";
import { Button, TopDiscount } from "../shared";
import { useStateContext } from "../../contexts/ContextProvider";
import { Mastercard, Visa, Paypal } from 'react-payment-logos/dist/flat';
import { ToastMaker } from "../shared/";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = ({ProdCategory, itemId}) => {
    const catList = ["electronics","jewelery","men's clothing","women's clothing"];

    
    <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
     />

     const showToast = (e)=>{  

         e.preventDefault();

            toast('Succefully Added Cart', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      addProductToCart(singleProductDetails);
   }

    const [bgColor, setBgColour] = useState('');

    const { addProductToCart } = useStateContext();
    const {cartItems, setCartItems} = useStateContext();

    // console.log(cartItems)
    // console.log(ProdCategory)
    // console.log(itemId)



  const [UnspalshImages, setUnsplashImages] = useState([]);

  const [singleProductDetails, setsingleProductDetails] = useState([])

    // Fetch products once from API
 useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await productsCategory(ProdCategory);

      // Use find to get the first item with id equal to 9
      const productWithId9 = data.find(item => parseInt(item.id) === parseInt(itemId));

      if (productWithId9) {
        setsingleProductDetails(productWithId9);
      } else {
        console.log(`Product with id ${itemId} not found in the category`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
//  console.log(singleProductDetails)

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
//   console.log(UnspalshImages)


  return (
    <div className="flex flex-col">
        <TopDiscount/>

        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex flex-col col-span-full lg:col-span-2 flex-1 mr-4">
                
                <h1 className="text-slate-400 mb-1">{singleProductDetails?.category && (
                    `${singleProductDetails.category.toUpperCase()}`
                    )}
                </h1>
                <div className="flex text-sm lg:text-3xl font-semibold mb-1">{singleProductDetails.title} <span className="ml-2 text-lg font-light">#{singleProductDetails.id}</span></div>
                <div className="flex mb-1">
                    <span><img className="w-5 h-5 mr-1" src={`/assets/star-yel.svg`} alt="LoveIcon"/></span> 
                    {/* <span className="mr-1">{singleProductDetails?.rating.rate && (singleProductDetails.rating.rate)}</span>
                    <span>({singleProductDetails?.rating.count && singleProductDetails.rating.count})</span> */}
                    <span className="mr-1">{singleProductDetails?.rating?.rate}</span>
                    <span>({singleProductDetails?.rating?.count})</span>

                </div>
               
                <div className= "flex flex-col justify-center items-center m-2 p-2" style={{backgroundColor:bgColor}}>
                    <figure className="mb-4 object-cover inline-block h-64 md:h-full w-64 md:w-80 p-2 bg-white rounded-md" style={{backgroundColor:bgColor}}>
                        <img 
                            src={singleProductDetails.image} alt={singleProductDetails.title}
                            className="mb-4 object-cover w-full h-full rounded-lg align-middle leading-none shadow-lg"
                        />
                        <figcaption className="p-2"> {}</figcaption>
                    </figure>
                </div>                    
               
                <div className="mb-4">
                    <h1 className="mb-2 rounded-lg w-60 font-bold"> Product Description</h1>
                    <div>{singleProductDetails?.description && (singleProductDetails.description.split(";").map((item,index)=>(
                        <ul key={index}>
                            <li className="text-sm lg:text-xl">{`- ${item}`}</li>
                        </ul>
                    )))}</div>
                </div>
                <div className="mb-4 ">
                    <h1 className='font-bold mb-2'>Reviews</h1>
                    <div className="flex flex-row flex-wrap lg:flex-nowrap">
                    {reviewsArray.map((item,index)=>(
                        <div key={index} className="flex flex-row gap-7 mr-2"> 
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
                <div className="mb-10 w-60 flex justify-center rounded-lg">
                    <Button
                        bgColor="white"
                        color="black"
                        size="10"
                        customFunc={(e) =>showToast(e)}
                        icon={`ADD TO CART`}
                        className="bg-white text-black rounded-xl w-40 ml-10"
                    />
                    <ToastContainer/>

                </div>
            </div>
            <div className="flex flex-col col-span-full lg:col-span-1 lg:grid lg:grid-rows-5 lg:grid-flow-col lg:ml-6">
                <div className="w-full flex flex-col mb-4 lg:mb-0">
                    <p className="m-1 text-sm lg:text-xl font-bold">$ {singleProductDetails.price}</p>
                    <p className="rounded-xl"> Discounts 10%</p>
                    <p className="lg:m-1"> Sales End: December 23, 2023</p>
                </div>
                <div className="flex flex-col ">
                        <div className="lg:mb-4">
                            <h5 className="mt-1 mr-2 text-sm text-start">Payments Options:</h5>
                        </div>
                        <div className="flex flex-row">
                            {paymentOptions.map((item,index)=>(
                                <div key={index} className="mr-1 lg:m-2 lg:border-1 lg:p-2">
                                    <div className="flex justify-center items-start"> 
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                </div>
                <div>
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <div><h5>Sizes:</h5></div>
                        <div className="flex flex-row">
                            {sizesData.map((item,index)=>(
                                    <div key={index} className="m-1 lg:m-2 border-2 lg:border-2 p-1 lg:p-2 w-10 lg:w-15">
                                        <div className="flex flex-row justify-center items-center"> 
                                            <p className="mt-1 mr-2 text-xs lg:text-sm text-center">{item.name}</p>
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
                                    <div key={index} className="flex m-2 border-2 w-12  justify-center items-center rounded-xl h-12">
                                        <button 
                                                type="button" 
                                                onClick={() => setBgColour(`${item.code}`)}
                                                style={{backgroundColor:`${item.code}`}}
                                                className="text-2xl p-4 hover:drop-shadow-xl w-full h-full rounded-xl"
                                                >                                  
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <h5 className="mt-1 lg:mt-0 mr-2 text-sm text-start">Delivery Options:</h5>
                        </div>
                        <div className="flex flex-row justify-start items-start lg:items-center">
                            {shippingOptions.map((item,index)=>(
                                <div key={index} className="m-1 lg:m-2 border-2 p-2">
                                    <div className="flex justify-center text-start items-start bg-white"> 
                                       <img src = {item.icon} alt={item.alt} className=" w-6 h-6 lg:w-12 lg:h-12"></img>
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
