// components/AboutUs.tsx
"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-10   h-full bg-center opacity-80"
        style={{ 
          backgroundImage: "url('/map.png')",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Glucks Wealth is a leading mutual fund distributor company that is
            dedicated to providing top-notch investment solutions to individuals,
            families, and businesses. Our team of experienced financial advisors
            is committed to helping clients achieve their financial goals by
            providing personalized investment advice and guidance.
          </p>
          <button className="px-6 py-2 border-2 border-gray-400 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition">
            Know More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/about-us-2048x1707.png" // put your illustration in public/about.png
            alt="About Us Illustration"
            width={500}
            height={400}
            className="object-contain"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
