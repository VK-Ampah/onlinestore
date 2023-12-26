const Checkout = () => {
  return(
    <div className=" mr-20 p-10 flex justify-center items-center">
        <form className="mt-6">
          <div className="grid grid-cols-12 gap-y-6 gap-x-4">
            <div className="col-span-full">
              <label htmlFor="email-address" className="block text-sm font-medium text-white-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autoComplete="email"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="card-name" className="block text-sm font-medium text-white-700">
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="card"
                  id="name-on-card"
                  name="card-name"
                  autoComplete="cc-name"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="card-number" className="block text-sm font-medium text-white-700">
                Card number
              </label>
              <div className="mt-1">
                <input
                
                  type="card"
                  id="card-number"
                  name="card-number"
                  autoComplete="cc-number"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-8 sm:col-span-9">
              <label htmlFor="expiration-date" className="block text-sm font-medium text-white-700">
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <input
                  type="card"
                  name="expiration-date"
                  id="expiration-date"
                  autoComplete="exp"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-4 sm:col-span-3">
              <label htmlFor="cvc" className="block text-sm font-medium text-white-700">
                CVC
              </label>
              <div className="mt-1">
                <input
                  type="card"
                  name="cvc"
                  id="cvc"
                  autoComplete="csc"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="block text-sm font-medium text-white-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="city" className="block text-sm font-medium text-white-700">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="region" className="block text-sm font-medium text-white-700">
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="region"
                  name="region"
                  autoComplete="address-level1"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="postal-code" className="block text-sm font-medium text-white-700">
                Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  autoComplete="postal-code"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-2">
            <div className="flex items-center h-5">
              <input
                id="same-as-shipping"
                name="same-as-shipping"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <label htmlFor="same-as-shipping" className="text-sm font-medium text-white-900">
              Billing address is the same as shipping address
            </label>
          </div>

          <button id="payment"
            type="submit"
            className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Pay
          </button>
        </form>
    </div>
)
}
export default Checkout