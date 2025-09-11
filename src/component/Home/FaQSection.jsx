// src/component/Home/FAQSection.jsx

"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,

    question: "What is Glucks Wealth?",
    answer:
      "Glucks Wealth is a mutual fund distributor company that helps clients make informed investment decisions and reach their financial goals. We offer a personalized approach to investment management and a full suite of financial planning services.",
  },
  {
    id: 2,

    question: "What services does Glucks Wealth offer?",
    answer:
      "We offer investment management, retirement planning, financial planning, and other related services to help clients reach their financial goals.",
  },
  {
    id: 3,
    question: "Who can invest with Glucks Wealth?",
    answer:
      "Anyone who is looking to invest in mutual funds can invest with Glucks Wealth. We serve individuals, families, and businesses of all sizes.",
  },
  {
    id: 4,
    question: "Is there a minimum investment amount?",
    answer: "Yes, there is a minimum investment amount required to open an account with Glucks Wealth. Please contact us for more information.",
  },
  {
    id: 5,
    question: "How are fees charged?",
    answer:
      "Our fees are charged based on the assets under management and are deducted from clients' portfolios on a monthly basis. We believe in transparency when it comes to fees and charges and provide clear and concise information to our clients.",
  },
  {
    id: 6,
    question: "How secure is my investment with Glucks Wealth?",
    answer:
      "We take the security of our clients' investments very seriously and employ a range of measures to ensure the safety and security of client assets.",
  },
  {
    id: 7,
    question: "How do I monitor my investments?",
    answer:
      "Clients can monitor their investments through our secure online platform, which provides access to portfolio information, performance tracking, and investment updates.",
  },
  {
    id: 8,
    question: "What is the process for withdrawing funds?",
    answer:
      " Clients can withdraw funds from their portfolios at any time by submitting a request through our online platform or by contacting us directly.",
  },
];

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className=" pl-4">
              <button
                className="flex items-center w-full text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="mr-2 text-blue-500"><img src="/question.png" alt="" /></span>
                {faq.question}
              </button>

              <div
                className={`mt-2 text-gray-600 transition-all duration-300 ${
                  activeFAQ === faq.id ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}