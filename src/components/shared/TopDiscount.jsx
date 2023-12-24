const TopDiscount = () => {
  return (
    <div className="bg-white">
      <div className="bg-image2 text-white flex flex-row w-full justify-between m-2 bg-slate-800">
        <div className="flex flex-col gap-4 p-6 bg-black m-2">
          <h2 className="m-2 text-4xl font-extrabold text-red-500">Up to 70% OFF</h2>
          <p className="m-2 font-bold">*Free Delivery from December 23*</p>
          <div className="flex justify-center text-center">
            <button className="bg-black rounded-md w-40">SHOP NOW</button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 bg-image3 p-4 m-4">
          <h4>
            <span className="text-2xl font-extrabold text-red-500 mr-1">NEW</span>
            <span className="text-2xl font-extrabold text-white">COLLECTIONS</span>
          </h4>
          <div className="flex justify-center">
            <h4>
              <span className="text-2xl font-extrabold  text-white mr-1">Merry</span>
              <span className="text-2xl font-extrabold text-red-500">Christmas</span>
            </h4>
          </div>

        </div>
        <div className="flex flex-col gap-10 justify-center text-center text-red-500 m-4 p-2 bg-black">
          <h1 className="text-3xl font-extrabold">
             BEST GIFT SHOP
          </h1>
          <span className="text-2xl font-extrabold text-white"> Festive Surprices </span>
        </div>
      </div>
    </div>
  );
}

export default TopDiscount
