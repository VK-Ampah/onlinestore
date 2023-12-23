import { useStateContext } from "../../contexts/ContextProvider"
import { ShoppingCart } from "../ui"
import { FiShoppingCart } from 'react-icons/fi';

import Button from "./Button"


const Header = () => {
     const {isClicked,setIsClicked, handleClick} = useStateContext();
  return (
    <div>
        <Button
          bgColor=""
          color="white"
          size="10"
          borderRadius =""
          //   onclick of the button, a handleclick call back function is called, this function sets the value of cart to TRUE (isClicked.cart=true) and if this value is true the cart component will be rendered below
          // onClick={()=>handleClick('cart')}
          customFunc={() => handleClick('cart')}
          icon={<FiShoppingCart/>}
          />
        {/* here I pass the handle click function to the button onl */}
        {isClicked.cart && <ShoppingCart/>}

              <div class="ml-auto flex items-center">
                    <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <a href="#" class="text-sm font-medium text-white-700 hover:text-red-800">Sign in</a>
                      <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                      <a href="#" class="text-sm font-medium text-white-700 hover:text-red-800">Create account</a>
                </div>
              </div>
        <div className="flex justify-center bg-black-600 p-5 text-3xl"> 
                ONLINE STORE
          <div className="">  
         
          </div>

          <div className="bg-white w-30">

          </div>
        </div>

    </div>
  )
}

export default Header
