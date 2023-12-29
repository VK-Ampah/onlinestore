
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../../contexts/ContextProvider'; 
import { cartData } from '../../api/data';

import { Button } from '../shared'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

// implement a function to set Cart to false
// actually use the setIsclicked function to change the state of the icon to false when clicked




const ShoppingCart = () => {
//   const [setIsClicked ] = useStateContext();


   

  const { isClicked, setIsClicked, cartItems,removeItemFromCart, clearAndCloseCartAndOpenCheckout } = useStateContext();
  console.log(cartItems)

  const itemPrices = cartItems.map(item => item.price);
  const subTotal = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const hst = subTotal * parseFloat(0.15);
  const total = subTotal + hst;

  // Convert each value to 2 decimal places
  const subTotalFormatted = subTotal.toFixed(2);
  const hstFormatted = hst.toFixed(2);
  const totalFormatted = total.toFixed(2);

  return (
    <div className="bg-half-transparent w-full fixed top-0 right-0 z-50 h-screen">
      <div className="float-right duration-1000 ease-in-out transition-all bg-slate-700 md:w-400 p-8 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Cart</p>
          {/* <button 
          type="button" 
          onClick={() => setIsClicked({ ...isClicked, cart: false })}
          style={{color: 'rgb(153,171,180)', borderRadius:'50%'}}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button> */}

          <Button
                            bgColor=""
                            color="white"
                            size="xl"
                           
                            customFunc={() => setIsClicked({ ...isClicked, cart: false })}
                            icon={<MdOutlineCancel />}
                            // className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            />
        </div>
        {cartItems?.length > 0 ? (
         cartItems.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color p-4">
                <img className="rounded-lg h-20 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold flex-wrap ">{item.title}</p>
                  <p className="text-slate-500 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center justify-between w-full">
                    <div className='w-full'>
                      <p className="font-semibold text-lg">$ {item.price}</p>
                      {/* <div className="flex items-center border-1 border-r-0 border-color rounded">
                        <p className="p-2 border-r-1 border-slate-600 border-color text-red-600 "><AiOutlineMinus /></p>
                        <p className="p-2 border-r-1 border-color border-slate-600 text-green-600">0</p>
                        <p className="p-2 border-r-1 border-color border-slate-600 text-green-600"><AiOutlinePlus /></p>
                      </div> */}
                    </div>
                    <div className='flex justify-end w-full max-w-full'>
                         <Button
                            bgColor=""
                            color="white"
                            size="10"
                           
                            customFunc={() => removeItemFromCart(index)}
                            icon={<MdOutlineCancel />}
                            // className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        ) 
        : (
          <p>Cart is empty</p>
        )}

        {cartItems?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color p-4">
                <img className="rounded-lg h-20 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold flex-wrap ">{item.title}</p>
                  <p className="text-slate-500 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center justify-between w-full">
                    <div className='w-full'>
                      <p className="font-semibold text-lg">$ {item.price}</p>
                      {/* <div className="flex items-center border-1 border-r-0 border-color rounded">
                        <p className="p-2 border-r-1 border-slate-600 border-color text-red-600 "><AiOutlineMinus /></p>
                        <p className="p-2 border-r-1 border-color border-slate-600 text-green-600">0</p>
                        <p className="p-2 border-r-1 border-color border-slate-600 text-green-600"><AiOutlinePlus /></p>
                      </div> */}
                    </div>
                    <div className='flex justify-end w-full max-w-full'>
                         <Button
                            bgColor=""
                            color="white"
                            size="10"
                           
                            customFunc={() => removeItemFromCart(index)}
                            icon={<MdOutlineCancel />}
                            // className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
         
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
          
            <div>
              <p className="font-semibold">
                $ {subTotalFormatted}
              </p>
            </div>

          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">HST</p>
            <p className="font-semibold">$ {hstFormatted}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$ {totalFormatted}</p>
          </div>

        </div>
        <div className="mt-5 text-black flex justify-center items-center">
          {/* empty cart */}
          <Link to="/checkout">
            <Button
            bgColor="white"
            color="black"
            size="10"
            customFunc={() => clearAndCloseCartAndOpenCheckout()}
            icon={`PROCEED TO CHECKOUT`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart

