import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { products } from "../../api/products";


const NavBar = () => {

 const categories = ["electronics","jewelery","men's clothing","women's clothing"]

  return (
    <div className= "flex justify-center w-full jusfity-end items-end gap-10 p-2 text-2xl font-bold border-y-2 md:w-auto md:p-4 md:text-md">  
      <div className="flex justify-center">
       <div className="mt-2 bg-slate-900 xs:text-sm md:text-md text-slate-300">
         
            <div className="-mb-px flex xs:space-x-1 md:space-x-8 xs:px-1 md:px-4 xs:gap-1 md:gap-4 justify-center text-sm md:text-lg font-light overflow-hidden xs:w-auto" aria-orientation="horizontal" role="tablist">
                      <NavLink  to={`/home`}>
                        <li className="md:text-xl xs:text-sm xs:hidden md:inline-block flow-root hover:bg-slate-300 hover:text-black rounded-md hover:font-semibold hover:text-2xl p-1">
                          Home
                        </li>
                      </NavLink>

               {categories.map((category, index) =>(
                      <NavLink key ={index} to={`/ProductCategory/${category}`} className="">
                        <li className="md:text-xl xs:text-sm flow-root hover:bg-slate-300 hover:text-black rounded-md hover:font-semibold hover:text-2xl p-1">
                          {category.charAt(0).toUpperCase() + category.slice(1).replace(/'/g, "").split(" ")[0]}
                          
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