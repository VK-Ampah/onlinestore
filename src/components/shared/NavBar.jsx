import React from 'react'

const NavBar = () => {
  return (
    <div> 
      <div className="justify-center">
       <div class="mt-2">
         
            <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Home</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Mens Clothing</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Jewelry</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Electronics</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Womens Clothing</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-white-500 hover:text-red-800">Nike Shoes</a>
                </li>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default NavBar