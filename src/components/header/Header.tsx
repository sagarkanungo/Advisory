import React from "react";
import { FaChartBar } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function Header() {
  return (
    <div>
      <div className="flex justify-around px-0 py-1  flex-wrap items-center bg-teal-950 gap-48 text-white ">
        <div className="flex items-baseline gap-3">
        <FaChartBar className="text-2xl mt-2"/>
        <div className="flex flex-col">
        <h1 className="text-3xl font-serif font-semibold underline">
          AK Advisory
        </h1>
        <p>Investment Advisor</p>
        </div>

        </div>
        <div className="flex items-center gap-4">
            <IoIosCall/>
            <h1 className="text-xl font-serif font-semibold underline">
            Contact Us
          </h1>
          <p>88-96548721</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
