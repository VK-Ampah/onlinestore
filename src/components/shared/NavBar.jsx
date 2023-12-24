import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { products } from "../../api/products";


const NavBar = () => {

 const categories = ["electronics","jewelery","men's clothing","women's clothing"]

  return (
    <div className= "flex justify-center w-full jusfity-end items-end gap-10 p-2 text-2xl font-bold border-y-2 md:w-auto md:p-4 md:text-md">  
      <div className=" flex justify-center">
       <div class="mt-2 bg-slate-900 text-md text-slate-300">
         
            <div className="-mb-px flex space-x-8 px-4 gap-4 justify-center text-lg font-light overflow-auto sm:w-auto" aria-orientation="horizontal" role="tablist">
              <NavLink  to={`/home`}>
                        <li className="flow-root hover:bg-slate-300 hover:text-black rounded-md hover:font-semibold hover:text-2xl p-1">
                          HOME
                        </li>
                      </NavLink>

               {categories.map((category, index) =>(
                      <NavLink key ={index} to={`/ProductCategory/${category}`} className="">
                        <li className="flow-root hover:bg-slate-300 hover:text-black rounded-md hover:font-semibold hover:text-2xl p-1">
                          {category.toUpperCase().replace(/'/g, "")}
                        </li>
                      </NavLink>
                  ))} 
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar