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



const Header = () => {
     const {isClicked,setIsClicked, handleClick} = useStateContext();
       const {cartItems,removeItemFromCart, clearAndCloseCartAndOpenCheckout } = useStateContext();
       const cartCount = cartItems.length;
       console.log(cartCount)
       console.log(cartItems)

  return (
    <div className="flex flex-col w-full md:w-auto m">
      <div className="flex justify-between m-4">
        <div>
            <div className="lg:flex-wrap lg:flex-1 lg:items-center lg:justify-end gap-2 lg:space-x-6 md:flex-wrap">
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-xl hover:bg-cyan-500 hover:text-black hover:p-2 hover:rounded-md  mr-2">Sign in</a>
                      <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-xl hover:bg-cyan-500 hover:text-black hover:p-2 hover:rounded-md">Create account</a>
            </div>
        </div>
        <div className="flex flex-row m-2">
           <input type="text" placeholder="Search" className="border-1 border-gray-300 rounded-md p-1"/>
           <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<IoSearchOutline/>}
              />

        </div>
        <div className="flex flex-row">

          <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<IoPersonCircleSharp/>}
              />


              <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<RiNotification3Line/>}
              />

              <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<BsChatLeft/>}
              />

           <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<FiShoppingCart/>}
              />
              <p className="bg-slate-600 rounded-full w-8 h-8 p-2 text-center text-xs">{cartCount}</p>
            {/* here I pass the handle click function to the button onl */}
            {isClicked.cart && <ShoppingCart/>}
        </div>       
      </div>

      <div className="flex justify-end w-full items-end gap-10 p-2 text-2xl font-bold bg-white"> 
                <DisplayImages/>
      </div>
    </div>
  )
}

export default Header
