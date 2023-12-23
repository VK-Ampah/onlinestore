import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { products } from "../../api/products";


const NavBar = () => {
  const [productList, setProductList] = useState([]);

 const categories = ["electronics","jewelery","men's clothing","women's clothing"]

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

  const uniqueCategories = Array.from(new Set(productList.map(item => item.category)));
  return (
    <div className= "flex justify-center w-full jusfity-end items-end gap-10 p-2 text-2xl font-bold">  
      <div className=" flex justify-center">
       <div class="mt-2 bg-slate-900 text-xl">
         
            <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
               {/* {uniqueCategories?(uniqueCategories.map((category, index) => 
                (
                     <Link key ={index} to={`/ProductCategory/${category}`}>
                      <li class="flow-root">
                        {category}
                      </li>
                     </Link>
                )
                )):null}   */}

                {categories.map((category, index) =>(
                      <Link key ={index} to={`/ProductCategory/${category}`}>
                        <li className="flow-root">
                          {category.toUpperCase()}
                        </li>
                      </Link>
                  ))} 
                


            </div>
          </div>
        </div>
      </div>
    
  )
}

export default NavBar