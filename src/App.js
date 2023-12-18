import './App.css';
// import { createApi } from 'unsplash-js';
// import { unsplashApi } from './api/unspalsh';
// import { images } from './api/unspalsh';
import { imagesList } from './api/unspalsh';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Checkout, Home, ProductDetails, ProductList, ShoppingCart } from './components/ui';
import { Footer, Header, NavBar } from './components/shared';




const App =  () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await imagesList();
        console.log('This is', data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="App">
      {/* wrap our application with the Browser Router to enforce routing */}
        <BrowserRouter>
        <div>
          <div><Header/></div>
          <div><NavBar/> </div>
          <div className="flex h-screen">
            {/* Routes for main pages */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ProductDetails" element={<ProductDetails />} />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
              <Route path="/Checkout" element={<Checkout />} />
            </Routes>
          </div>
          <div><Footer/></div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
