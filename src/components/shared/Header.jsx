import { useStateContext } from "../../contexts/ContextProvider"
import { ShoppingCart } from "../ui"
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri'; 
import {BsPersonFill} from 'react-icons/bs';
import {IoPersonCircleSharp} from 'react-icons/io5';
import Button from "./Button"
import DisplayImages from "./DisplayImages";
import { AiOutlineSearch } from "react-icons/ai";
import {FaSearch} from 'react-icons/fa';
import {MdSearch} from 'react-icons/md';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {FiSearch} from 'react-icons/fi';
import {HiSearch} from 'react-icons/hi';
import {IoSearch} from 'react-icons/io5';
import {IoSearchOutline} from 'react-icons/io5';

// const CartButton = ({text,customFunc,bgColor}) => {
//   const {isClicked,setIsClicked, handleClick} = useStateContext();
//   return (
//     <div className="flex justify-center items-center">
//       <button
//         type="button"
//         style= {{backgroundColor: bgColor}}
//         // className= {`text-${size} p-3 hover:drop-shadow-xl rounded-lg hover:first-letter:uppercase hover:text-xl hover:bg-cyan-600 transition-colors`}
//         onClick={customFunc ? customFunc : () => {}}
//         className="relative bg-amber-300 text-2xl">
//             <FiShoppingCart/>
//             <span
//             className="absolute inset-0 object-right-top -mt-2 -mr-2 text-xs font-semibold text-white bg-red-500 rounded-full h-5 w-5 flex items-center justify-center"
//             >{text}</span>    
//       </button>
//       {isClicked.cart && <ShoppingCart/>}
//     </div>
//   )
// }

const CartBtn = ({text,customFunc,icon}) => {
  return(
    <>
        <button className="text-white py-4 px-1 relative border-2 border-transparent rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart"
        onClick={customFunc ? customFunc : () => {}}
        >
            {icon}
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                {text}
              </div>
            </span>
        </button>
    </>
  )
}

const Header = () => {
     const {isClicked,setIsClicked, handleClick} = useStateContext();
       const {cartItems,removeItemFromCart, clearAndCloseCartAndOpenCheckout } = useStateContext();
       const cartCount = cartItems.length;
      //  console.log(cartCount)
      //  console.log(cartItems)

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex justify-between m-1 md:m-4 w-full xs:w-auto">
        <div>
            <div className="hidden md:inline-block items-center md:justify-end gap-2 md:space-x-2 xs:flex-wrap md:flex-nowrap">
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-xl hover:bg-cyan-500 hover:text-black hover:p-2 hover:rounded-md  mr-2">Sign in</a>
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-xl hover:bg-cyan-500 hover:text-black hover:p-2 hover:rounded-md">Create account</a>
            </div>
        </div>
        <div className="flex flex-row m-1 md:m-2 md:w-auto">
           <input type="text" placeholder="Search" className="border-1 border-gray-300 rounded-md p-1 w-24 md:w-auto"/>
           <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={""}
              icon={<IoSearchOutline/>}
              className="hidden"
              />

        </div>
        <div className="flex flex-row">
          <div className="xs:hidden md:inline-block flex justify-center items-center">
            <Button
                bgColor=""
                color="white"
                size="10"
                customFunc={""}
                icon={<IoPersonCircleSharp/>}
                className="hidden"
                />
          </div>
          <div className="xs:hidden md:block flex justify-center items-center">
            <Button
                bgColor=""
                color="white"
                size="10"
                customFunc={""}
                icon={<RiNotification3Line/>}
                className="hidden"
                />
          </div>
          <div className="relative">
            <CartBtn 
            text={cartCount}
            customFunc = {() => handleClick('cart')}
            icon={<FiShoppingCart/>}
            />
            {isClicked.cart && <ShoppingCart/>}
          </div>
            {/* here I pass the handle click function to the button onl */}
        </div>       
      </div>

      <div className="flex justify-end w-full items-end gap-10 p-2 text-2xl font-bold bg-white"> 
                <DisplayImages/>
      </div>
    </div>
  )
}

export default Header
