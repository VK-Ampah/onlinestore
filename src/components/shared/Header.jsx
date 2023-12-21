import { useStateContext } from "../../contexts/ContextProvider"
import { ShoppingCart } from "../ui"
import Button from "./Button"


const Header = () => {
     const {isClicked,setIsClicked, handleClick} = useStateContext();
  return (
    <div>
        <Button
        bgColor="red"
        color="white"
        size="10"
        text="cart"
        borderRadius =""
        //   onclick of the button, a handleclick call back function is called, this function sets the value of cart to TRUE (isClicked.cart=true) and if this value is true the cart component will be rendered below
        onClick={handleClick('cart')}
        >
            <img className= "w-12 h-12" src="/assets/cart.svg" alt="">
            </img>
        </Button>
        {/* here I pass the handle click function to the button onl */}
        {isClicked.cart && <ShoppingCart/>}
    </div>
  )
}

export default Header
