import React from "react";

function HomePage() {
  return (
    <div >
      <div
        className="w-full min-h-[500px] h-auto bg-cover bg-center flex items-center justify-around"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/stock-market-pd5zksxr07t7a4xu.jpg')",
        }}
      >
        <div className="flex w-full max-w-xl  bg-opacity-40 bg-black rounded-lg p-10">
          {/* Left Side Content */}
          <div className="w-1/2 p-6 text-white">
            <h3 className="text-xl font-semibold">We Give</h3>
            <h1 className="text-5xl font-bold my-4">Recommendations</h1>
            <p className="text-lg">
              On the right stocks at the right time to help you make better
              investment decisions.
            </p>
          </div>
          </div>


          {/* Right Side Form */}
          <div className="w-2/6 p-1 bg-white rounded-lg shadow-lg">
          <div className="bg-teal-950 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-2xl font-semibold">Enquiry Form</h2>
            </div>
            <form className="space-y-6 px-3">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-900"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring  focus:ring-teal-900"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <select className="w-0.5/3 px-2 py-2 border rounded-l-md focus:outline-none focus:ring  focus:ring-teal-900">
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    className="w-2/3 px-4 py-2 border rounded-r-md focus:outline-none focus:ring  focus:ring-teal-900"
                    placeholder="Enter your number"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-teal-900  focus:ring-teal-900 border-gray-300 rounded"
                />
                <label className="ml-2 block text-gray-700">
                  I agree to the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-950 text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default HomePage;
