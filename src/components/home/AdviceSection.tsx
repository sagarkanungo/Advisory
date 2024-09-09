import React from 'react';
import { FaChartLine, FaAward, FaShieldAlt, FaBalanceScale, FaBullseye, FaFlagCheckered } from "react-icons/fa";

function AdviceSection() {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-teal-950">Share Market Advice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">Technical & Fundamental Research</h3>
            <p className="text-gray-700">Stocks and Commodities Market.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaAward className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">13 Years of Experience</h3>
            <p className="text-gray-700">In Advisory.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaShieldAlt className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">Risk Managed Calls</h3>
            <p className="text-gray-700">To help you invest wisely.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaBalanceScale className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">SEBI Registered</h3>
            <p className="text-gray-700">Registration Number INA000002322.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaBullseye className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">Proven Accuracy</h3>
            <p className="text-gray-700">High accuracy in market predictions.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaFlagCheckered className="text-teal-900 text-6xl mb-4 hover:animate-bounce" />
            <h3 className="text-xl font-bold">Clear Investment Goals</h3>
            <p className="text-gray-700">Helping you achieve your financial goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdviceSection;
