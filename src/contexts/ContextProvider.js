import { createContext, useContext, useEffect, useState } from 'react';
// import { cartData } from '../../api/data';
import { productsCategory } from '../api/products';
// creating a context for the application
const StateContext = createContext();

const initialState = {
    cart: false,
}

export const ContextProvider = ({children}) => {
  // Shopping Cartr Context
    const [cartItems, setCartItems] = useState([]);
    //setting initial state value for isClicked to intitialState defined in the initial state object above
    const [isClicked,setIsClicked] = useState((initialState));

     const handleClick = (clicked) => {
        setIsClicked ({ ...initialState, [clicked]: true});
    };


    // Fetch products once when clicked on the details page and append to the car data 
    const addProductToCart = (clickedData) => {
        setCartItems([...cartItems, clickedData]);
    }

    // clear cart after checkout use this function in the checkout button and component
    const afterCheckout = () => {
        setCartItems([]);
    }

    // clear carts and set isclicked to false after checkout
    const clearCartAndCloseCartAndOpenCheckout = () => {
        setIsClicked({ ...initialState, cart: false });
        setCartItems([]);
    }
  

    return(

        <StateContext.Provider
        // the state context provider passes the value of the state to its children (ie various component or wherever its used)
        // added handleclick to statecontext
        value={{
                isClicked,setIsClicked,
                handleClick,cartItems,setCartItems,
                addProductToCart,
                afterCheckout,}}
                >
            {children}
        </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext)