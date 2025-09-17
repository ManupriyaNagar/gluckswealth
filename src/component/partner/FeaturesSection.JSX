import React from "react";
import { FaLayerGroup, FaFileInvoice, FaChartPie, FaBell } from "react-icons/fa";
import { MdPayments, MdFamilyRestroom } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";

const features = [
  {
    icon: <FaLayerGroup size={28} />,
    title: "Multiple Products and Multiple Providers",
  },
  {
    icon: <RiUserAddLine size={28} />,
    title: "Online KYC, Onboarding and Transactions",
  },
  {
    icon: <FaFileInvoice size={28} />,
    title: "Create and Manage Customer Portfolios",
  },
  {
    icon: <FaFileInvoice size={28} />,
    title: "Download RTA Statements and Share them in Real-Time",
  },
  {
    icon: <MdPayments size={28} />,
    title: "Multiple Payment Options",
  },
  {
    icon: <MdFamilyRestroom size={28} />,
    title: "Family Reports",
  },
  {
    icon: <FaChartPie size={28} />,
    title: "Analytical Reports",
  },
  {
    icon: <FaBell size={28} />,
    title: "Alerts and Notifications",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12 ">
        Features of Glucks Wealth Online Mutual <br/> Funds Distribution Platform
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Red Circle with Icon */}
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white mb-4 shadow-md">
              {feature.icon}
            </div>
            <p className="text-lg font-medium text-gray-800">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
