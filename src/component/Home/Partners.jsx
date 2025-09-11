// components/Partners.tsx
"use client";
import Image from "next/image";

const partners = [
  "/client6.jpg.jpeg",
  "/client7.jpg.jpeg",
  "/client5.jpg.jpeg",
  "/client4.jpg.jpeg",
  "/client3.jpg.jpeg",
  "/client2.jpg.jpeg",
  "/client1.jpg.jpeg",
  "/client8.jpg.jpeg",
  "/",
];

export default function Partners() {
  return (
    <section className="py-12 bg-white relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center opacity-10 z-1"
        style={{ 
          backgroundImage: "url('/graph-.png')",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Partner&apos;s
        </h2>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 z-2">
            {partners.concat(partners).map((logo, index) => (
              <div
                key={index}
                className="relative  flex-shrink-0 w-88 h-24 bg-gray-100 flex items-center justify-center rounded-lg shadow z-3"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={300}
                  height={80}
                  className="object-contain z-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
