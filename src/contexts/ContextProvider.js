import { createContext, useContext, useEffect, useState } from 'react';
// import { cartData } from '../../api/data';
import { productsCategory } from '../api/products';
// creating a context for the application
const StateContext = createContext();

const initialState = {
    cart: false,
}

export const ContextProvider = ({children}) => {
    // add logic that the application depends on


    // Shopping Cartr Context
    const [cartItems, setCartItems] = useState([]);
    //setting initial state value for isClicked to intitialState defined in the initial state object above
    const [isClicked,setIsClicked] = useState((initialState));

    //  GET CART DATA

    // const getCart = ()=> cartData;

    // fetch data

    //  this function takes a product and returns 3 elements
    const updateCart = (product)=> {
        const [imageUrl, title, price] = product
        return imageUrl, title, price
    }   

    // useEffect(()=>{
    //     const
    //     setButton (updateCart())
        
    // },[updateCart()])


    //  GET DATA FROM PRODUCT
    // const catList = ["electronics","jewelery","men's clothing","women's clothing"];
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //         const data = await productsCategory(catList[0]);

    //         // Use find to get the first item with id equal to 9
    //         const productWithId9 = data.find(item => parseInt(item.id) === 9);

    //         if (productWithId9) {
    //             setsingleProductDetails(productWithId9);
    //         } else {
    //             console.log("Product with id 9 not found in the category");
    //         }
    //         } catch (error) {
    //         console.log(error);
    //         }
    //     };

    //     fetchData();
    //     }, []);

  

    //defining a function to update the value of initiatstate when clicked parameter is passed to it
    // after defining we pass it to the stateContext to be used by the children
    const handleClick = (clicked) => {
        // this below would have worked to set the value, if the intitial value set was a string but its an object ie initialState so we cant replace it with a string clicked
        //  setIsClicked (clicked);
        // so we spread intial state object and chage a value when isclicked is passed ie isclicked is set to true and passed to the item
        setIsClicked ({ ...initialState, [clicked]: true});
    };

    return(

        <StateContext.Provider
        // the state context provider passes the value of the state to its children (ie various component or wherever its used)
        // added handleclick to statecontext
        value={{
                isClicked,setIsClicked,
                handleClick}}
                >
            {children}
        </StateContext.Provider>)
}

// how can we use this active menu context inside a component? we have to export 
// by creating the useStateContext that returns a call to useContext(where we pass in the statecontext we want) after we import it in the index.js
export const useStateContext = () => useContext(StateContext)