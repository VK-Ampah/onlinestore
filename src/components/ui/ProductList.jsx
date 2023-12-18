import { useEffect, useState } from "react";
import { products } from "../../api/products"

const ProductList = () => {
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
    <div>
    
      {productList.map((item,index) => (
        <div key={index}>
            <img src={item.image} alt={item.category} width="200px"></img>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <div>
            <p>{item.rating.rate}</p>
            <p>{item.rating.count}</p>
            </div>
        </div>
        
      
      ))}
    </div>
  )
}

export default ProductList
