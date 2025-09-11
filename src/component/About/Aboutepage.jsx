"use client";

export default function AboutHero() {
  return (
    <section className="relative w-full h-90 flex items-center justify-center text-center">
      {/* Background with diagonal cut */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 clip-diagonal"></div>

      {/* Text */}
      <h1 className="relative text-4xl md:text-5xl font-bold text-white">
        About Us
      </h1>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
        }
      `}</style>
    </section>
  );
}
