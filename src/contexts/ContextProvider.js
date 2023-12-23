import { createContext, useContext, useEffect, useState } from 'react';
// import { cartData } from '../../api/data';
import { productsCategory } from '../api/products';
// creating a context for the application
const StateContext = createContext();

const initialState = {
    cart: false,
    
}
const initialCheckout = {
    checkout: false,
    
}

export const ContextProvider = ({children}) => {
  // Shopping Cartr Context
    // const [cartItems, setCartItems] = useState([]);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cartItems, setCartItems] = useState(storedCart);
    //setting initial state value for isClicked to intitialState defined in the initial state object above
    const [isClicked,setIsClicked] = useState((initialState));

    // Checkout Context

    const [isCheckedOut,setisCheckedOut] = useState((initialCheckout));
    const handleCheckOut = (clicked) => {
        setisCheckedOut ({ ...initialState, [clicked]: true});
    };

    
    // cart context
    const handleClick = (clicked) => {
        setIsClicked ({ ...initialCheckout, [clicked]: true});
    };

    

    // Fetch products once when clicked on the details page and append to the car data 
    const addProductToCart = (clickedData) => {
        setCartItems([...cartItems, clickedData]);
    }

      // Save the cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //  remove cart items with index
    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
  };



    // clear carts and set isclicked to false after checkout to remove the cart
    const clearAndCloseCartAndOpenCheckout = () => {
        setIsClicked({ ...initialState, cart: false });
        setCartItems([]);
        // setCheckout(true); or Navigate to checkout page
    }
  

    return(

        <StateContext.Provider
        // the state context provider passes the value of the state to its children (ie various component or wherever its used)
        // added handleclick to statecontext
        value={{
                isClicked,setIsClicked,
                handleClick,cartItems,setCartItems,
                addProductToCart,
                removeItemFromCart,
                clearAndCloseCartAndOpenCheckout,}}
                >
            {children}
        </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)