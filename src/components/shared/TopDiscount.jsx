import { Link } from "react-router-dom";

const TopDiscount = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-image2 text-white flex flex-row w-full justify-between items-center xs:m-1 md:m-2 bg-slate-800">
        <div className="md:flex flex-col xs:gap-1 xs:text-sm md:gap-4 bg-image3 xs:p-1 xs:m-1 md:p-4 md:m-4 xs:hidden md:w-full">
          <h4>
            <span className="xs:text-sm md:text-2xl font-extrabold text-red-500 mr-1">NEW</span>
            <span className="xs:text-sm md:text-2xl font-extrabold text-white">COLLECTIONS</span>
          </h4>
          <div className="flex justify-center">
            <h4>
              <span className="xs:text-sm md:text-2xl font-extrabold  text-white mr-1">Merry</span>
              <span className="xs:text-sm md:text-2xl font-extrabold text-red-500">Christmas</span>
            </h4>
          </div>
        </div>

        <div className="flex flex-col md:gap-4 p-6 bg-black xs:m-3 md:m-2 xs:w-full md:w-full">
          <h2 className="xs:m-0 md:m-2 xs:text-sm md:text-4xl font-extrabold text-red-500">Up to 70% OFF</h2>
          <p className="xs:m-1 md:m-2 font-bold">*Free Delivery from December 23*</p>
          <div className="flex justify-center text-center">
            <Link to="/">
              <button className="bg-white text-black rounded-md w-40">SHOP NOW</button>
            </Link>
          </div>
        </div>

        <div className="md:flex flex-col xs:gap-1 xs:text-sm md:gap-10 xs:p-1 xs:m-1 justify-center text-center text-red-500 md:m-4 md:p-2 bg-black xs:hidden md:w-full">
          <h1 className="xs:text-sm md:text-3xl font-extrabold">
             BEST GIFT SHOP
          </h1>
          <span className="xs:text-sm md:text-2xl font-extrabold text-white"> Festive Surprices </span>
        </div>
      </div>
    </div>
  );
}

export default TopDiscount
