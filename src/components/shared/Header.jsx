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
    </div>
  )
}

export default Header
// updated
