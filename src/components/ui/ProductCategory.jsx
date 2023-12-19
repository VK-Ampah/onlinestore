import { useEffect, useState } from "react";
import { products, productsCategory } from "../../api/products";


const ProductCategory = () => {
  const catList = ["electronics","jewelery","men's clothing","women's clothing"];

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await products();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div >
    
      {productList.map((item,index) => (
        <div key={index}>
            <div className= "rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <img src={item.image} alt={item.category} width="200px" height="200px"></img>
            </div>
            <p className="bg-cyan-900"> title: {item.title}</p>
            <p> description: {item.description}</p>
            <p>category : {item.category}</p>
            <p className=""> price: {item.price}</p>

            <div className="flex flex-row bg-cyan-500 justify-center rounded-full">
              <p className="mr-4"> rating: {item.rating.rate}</p>
              <p className="mr-4 bg_sprint"> rating count: {item.rating.count}</p>
            </div>
        </div>
        
      
      ))}
    </div>
  )
}

export default ProductCategory
