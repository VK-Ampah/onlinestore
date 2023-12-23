const TopDiscount = () => {
  return (
    <div className="bg-white">
      <div className=" text-white flex flex-row w-full justify-between m-2 bg-slate-800">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="m-2 text-4xl font-extrabold">UP TO 70% OFF</h2>
          <p className="m-2 font-bold">*Free Delivery from December 23*</p>
          <div className="flex justify-center text-center">
            <button className="bg-black rounded-md w-40">SHOP NOW</button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-extrabold">
            TRY THE GIFT BEST GIFT SHOP
          </h1>
          <h4 className="text-3xl font-semibold"> Browse our Clothes </h4>
        </div>
      </div>
    </div>
  );
}

export default TopDiscount
