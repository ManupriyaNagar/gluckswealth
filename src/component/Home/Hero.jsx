"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const items = [
    {
      img: "/save-for-children.png", // replace with your actual image path
      title: "Save for children",
    },
    {
      img: "/save-tax.png",
      title: "Save Tax",
    },
    {
      img: "/retirement-plan.png",
      title: "Retirement Plan",
    },
    {
      img: "/long-term-in.jpg",
      title: "Build Long Term Wealth",
    },
  ];
  const words = ["Digital Gold", "Fixed Deposits", "Loan", "Mutual Funds", "Stock Market", "Insurance"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full bg-gradient-b from-bg-gray-200 to-gray-50 pt-64 pb-16">
        {/* Background image */}


        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
            Welcome to Glucks Wealth
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl text-gray-500">
            Your Trusted Partner for Smart Investments
          </p>

          {/* Animated Words + Button */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span
              key={index}
              className="text-2xl md:text-4xl font-bold text-[#6aa962] transition-opacity duration-700 ease-in-out"
            >
              {words[index]}
            </span>
            <button className="px-5 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition font-bold">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-4 flex justify-center gap-6 ">
            <img
              src="https://gluckswealth.com/wp-content/uploads/2023/02/device-png-1-e1676286300172.png" // replace with your laptop screenshot
              alt="Dashboard"
              width={1000}
              height={500}
              className="h-full w-full z-2"
            />
          </div>
        </div>

        {/* Background subtle chart image (optional) */}
        <div className="absolute inset-0 z-1 opacity-10 bg-[url('/graph-.png')] bg-cover bg-center"></div>
      </section>
      <section className="py-12 relative -mt-10">
        {/* Background image element */}
        <div
          className="absolute left-0 top-0 h-full w-[40vh] bg-cover bg-left z-1"
          style={{
            backgroundImage: "url('/dot-grid.jpg')",
            zIndex: 0
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-2">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-10 -mt-10">
            Start Your Investment Journey Today
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-xl hover:shadow-lg transition  flex flex-col items-center text-center z-4"
              >
                <div className="w-50 h-50 relative mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover z-4"
                  />
                </div>
                <h3 className="text-blue-600 font-semibold text-2xl p-4 max-w-xm">{item.title}</h3>
              </div>
            ))}
          </div>

        </div>
    
      </section>
    </>
  );
}
