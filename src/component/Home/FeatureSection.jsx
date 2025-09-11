"use client";
import { Check } from "lucide-react";

const features = [
  {
    title: "Personalized Approach",
    description:
      "Our team takes a personalized approach to investment management, creating customized portfolios that meet each individual’s specific needs and goals.",
  },
  {
    title: "Expert Team",
    description:
      "Our team of financial experts has decades of combined experience in the industry, providing clients with confidence in their investment decisions.",
  },
  {
    title: "Results-Driven",
    description:
      "Our focus is on delivering results for our clients, and we measure our success by the success of our clients.",
  },
  {
    title: "Transparent Fees",
    description:
      "We believe in transparency when it comes to fees and charges, ensuring that our clients know exactly what they are paying for.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From investment management to retirement planning to financial planning, we offer a full suite of services to help clients reach their financial goals.",
  },
  {
    title: "Trustworthy Partner",
    description:
      "We are committed to our clients' success and are dedicated to building long-term relationships based on trust and integrity.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/admin-ajax.png')" }}
      />

      <div className="max-w-7xl mx-auto  relative z-4">
        <p className="text-gray-700 mb-12 text-lg md:px-0 px-4">
          Investing in your financial future has never been easier. Contact us
          today to schedule a free consultation and see how Glucks Wealth can
          help you achieve your investment goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col"
            >
              <div className="flex items-center  space-x-2">
                <Check className="text-blue-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-500 text-lg font-semibold">
                  {feature.title}:
                </h3>
              </div>
              <p className="text-gray-600 text-lg ml-5 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
