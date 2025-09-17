import React from "react";
import { FaUsers, FaMoneyBillWave, FaCalculator } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} />,
    value: "55,380",
    label: "Happy Clients",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    value: "₹ 5,80 Cr.",
    label: "Transaction Value",
  },
  {
    icon: <FaCalculator size={40} />,
    value: "4,353",
    label: "Transaction Count",
  },
];

const StatsSection = () => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <div className="bg-teal-700 text-white rounded-xl shadow-md py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-white">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold">{stat.value}</h3>
              <p className="text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
