
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../../contexts/ContextProvider'; 
import { cartData } from '../../api/data';

import { Button } from '../shared'; 

// implement a function to set Cart to false
// actually use the setIsclicked function to change the state of the icon to false when clicked




const ShoppingCart = () => {
//   const [setIsClicked ] = useStateContext();
   

  const { isClicked, setIsClicked, handleClick, cartItems } = useStateContext();
  console.log(cartItems)

  return (
    <div className="bg-half-transparent w-full fixed top-0 right-0 z-50">
      <div className="float-right h-screen  duration-1000 ease-in-out transition-all bg-black md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Cart</p>
          <button 
          type="button" 
          onClick={() => setIsClicked({ ...isClicked, cart: false })}
          style={{color: 'rgb(153,171,180)', borderRadius:'50%'}}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartItems?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color p-4">
                <img className="rounded-lg h-20 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold flex-wrap ">{item.title}</p>
                  <p className="text-slate-500 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">$ {item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 border-slate-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color border-slate-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color border-slate-600 text-green-600"><AiOutlinePlus /></p>
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
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">HST</p>
            <p className="font-semibold">$15</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>

        </div>
        <div className="mt-5 bg-white text-black">
          <Button
          bgColor=""
          color="black"
          size="10"
          borderRadius =""
          customFunc={() => handleClick('cart')}
          icon={`CHECKOUT`}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart

