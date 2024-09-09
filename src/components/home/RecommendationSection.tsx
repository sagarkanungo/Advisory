import React from "react";

function RecommendationSection() {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-teal-950">
            Share Recommendations Services
          </h2>
        </div>
        <div className="flex justify-between px-20 items-center">
          {/* Equity */}
          <div className="w-36 h-40 bg-blue-50 flex flex-col items-center justify-center transition-all duration-300 transform hover:bg-teal-950 hover:rounded-lg hover:scale-105 group">
            <img
              src="https://cdn-aejmc.nitrocdn.com/IfFtXtYYsxfVXtLJpTkZNIcpfONlJTBm/assets/images/optimized/rev-4da0a7b/www.shyamadvisory.com/wp-content/uploads/2020/10/service1.png"
              alt="Equity"
              className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:grayscale"
            />
            <p className="py-2 font-semibold">EQUITY</p>
          </div>

          {/* MCX */}
          <div className="w-36 h-40 bg-blue-50 flex flex-col items-center justify-center transition-all duration-300 transform hover:bg-teal-950 hover:rounded-lg hover:scale-105 group">
            <img
              src="https://cdn-aejmc.nitrocdn.com/IfFtXtYYsxfVXtLJpTkZNIcpfONlJTBm/assets/images/optimized/rev-4da0a7b/www.shyamadvisory.com/wp-content/uploads/2020/10/service2.png"
              alt="MCX"
              className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:grayscale"
            />
            <p className="py-2 font-semibold">MCX</p>
          </div>

          {/* NCDX */}
          <div className="w-36 h-40 bg-blue-50 flex flex-col items-center justify-center transition-all duration-300 transform hover:bg-teal-950 hover:rounded-lg hover:scale-105 group">
            <img
              src="https://cdn-aejmc.nitrocdn.com/IfFtXtYYsxfVXtLJpTkZNIcpfONlJTBm/assets/images/optimized/rev-4da0a7b/www.shyamadvisory.com/wp-content/uploads/2020/10/service3.png"
              alt="NCDX"
              className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:grayscale"
            />
            <p className="py-2 font-semibold ">NCDX</p>
          </div>

          {/* Currency */}
          <div className="w-36 h-40 bg-blue-50 flex flex-col items-center justify-center transition-all duration-300 transform hover:bg-teal-950 hover:rounded-lg hover:scale-105 group">
            <img
              src="https://cdn-aejmc.nitrocdn.com/IfFtXtYYsxfVXtLJpTkZNIcpfONlJTBm/assets/images/optimized/rev-4da0a7b/www.shyamadvisory.com/wp-content/uploads/2020/10/service4.png"
              alt="Currency"
              className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:grayscale"
            />
            <p className="py-2 font-semibold">CURRENCY</p>
          </div>

          {/* Forex */}
          <div className="w-36 h-40 bg-blue-50 flex flex-col items-center justify-center transition-all duration-300 transform hover:bg-teal-950 hover:rounded-lg hover:scale-105 group">
            <img
              src="https://cdn-aejmc.nitrocdn.com/IfFtXtYYsxfVXtLJpTkZNIcpfONlJTBm/assets/images/optimized/rev-4da0a7b/www.shyamadvisory.com/wp-content/uploads/2020/10/service5.png"
              alt="Forex"
              className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:-translate-y-2 group-hover:filter group-hover:grayscale"
            />
            <p className="py-2 font-semibold">FOREX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationSection;
