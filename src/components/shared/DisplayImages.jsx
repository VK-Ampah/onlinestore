import Button from "./Button"
import NavBar from "./NavBar"


const DisplayImages = () => {
  return (
    <div className="flex flex-col justify-center h-80 w-full items-center bg-cloth">
        <div className="text-center flex flex-col" >
            <div className=" flex justify-center text-center mb-10 bg-slate-900 h-20 p-4">
                <h1 className="text-4xl font-semibold">Welcome to SPORTS DAMON</h1>
            </div>
            <p> 
                  <Button
                        bgColor="silver"
                        color="black"
                        size="xl"
                        
                        //   onclick of the button, a handleclick call back function is called, this function sets the value of cart to TRUE (isClicked.cart=true) and if this value is true the cart component will be rendered below
                        // onClick THIS function should take the data and append it to the CART DATA ARRAY
                        customFunc={""}
                        // customFunc={() => {}}
                        icon={`SHOP NOW`}
                        />
            </p>
          
        </div>
    </div>
  )
}

export default DisplayImages
