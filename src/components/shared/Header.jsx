import { useStateContext } from "../../contexts/ContextProvider"
import { ShoppingCart } from "../ui"
import { FiShoppingCart } from 'react-icons/fi';

import Button from "./Button"
import DisplayImages from "./DisplayImages";


const Header = () => {
     const {isClicked,setIsClicked, handleClick} = useStateContext();
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-red-800">Sign in</a>
                      <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                      <a href="#" className="text-sm font-medium text-white-700 hover:text-red-800">Create account</a>
                </div>
        </div>
        <div>
           <Button
              bgColor=""
              color="white"
              size="10"
              customFunc={() => handleClick('cart')}
              icon={<FiShoppingCart/>}
              />
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
