"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 ">
      {/* Top section with columns */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-sm text-gray-700 md:text-start text-center justify-center">
        
        {/* Goals */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4 text-xl">Goals</h3>
          <ul className="space-y-2 text-lg">
            <li>Save For Children</li>
            <li>Save Tax</li>
            <li>Retirement Plan</li>
            <li>Build Long Term Wealth</li>
          </ul>
          <div className="mt-4 space-y-3 md:ml-0 ml-10">
            <Image src="/playstore.svg" alt="Google Play" width={140} height={40} />
            <Image src="/app-store.svg" alt="App Store" width={140} height={40} />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Quick links</h3>
          <ul className="space-y-2 text-lg">
            <li>About Us</li>
            <li>Blog</li>
            <li>Calculator</li>
            <li>Career</li>
            <li>Sitemap</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-gray-600 mb-4 text-xl">Products</h3>
          <ul className="space-y-2 text-lg">
            <li>Mutual Fund</li>
            <li>Fixed Deposit</li>
            <li>PMS</li>
            <li>P2P Loan</li>
            <li>AIF</li>
            <li>NPS</li>
            <li>Bond</li>
            <li>Digital Gold</li>
            <li>Loan Against Securities (LAS)</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Partner</h3>
          <ul className="space-y-2 text-lg">
            <li>Become Our Partner</li>
            <li>Become MF Distributor</li>
            <li>Grow Your MF Business</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Get in Touch</h3>
          <ul className="space-y-2 text-lg">
            <li>Greater Noida, UP (IN)</li>
            <li>care@gluckswealth.com</li>
            <li>+91 11 6965 8917</li>
          </ul>
        </div>
      </div>

      {/* Certification / License cards */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pb-6 bg-white rounded-lg shadow">
        <div className="py-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <img src="/one.svg" alt="AMFI Certificate" className="w-[600px] h-auto" />
          <img src="/two.svg" alt="BSE Certificate" className="w-[600px] h-auto" />
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center text-gray-600 text-sm mt-8 space-y-4 bg-white">
        <div className="container mx-auto text-lg pt-10 md:px-0 px-4">
        <p className="mb-10 ">
          Mutual fund investments are subject to market risk. Read all
          scheme-related documents carefully before investing. Past performance
          is not an indicator of future returns. The value of your investment
          may go up or down, and the principal invested is not guaranteed.
          Glucks Wealth does not guarantee any returns on investments made
          through mutual funds. We recommend investors to consult with a
          financial advisor before making any investment decisions.
        </p>
        <p>
          Glucks Wealth Pvt. Ltd. (with ARN code 251543) makes no warranties or
          representations, express or implied, on products offered through the
          platform. It accepts no liability for any damages or losses, however,
          caused, in connection with the use of, or on the reliance of its
          product or related services. Terms and conditions of the website are
          applicable. The mutual fund investments are subject to market risks.
          Please read the scheme information and other related documents
          carefully before investing.
        </p>
        </div>
         <div className="bg-blue-500 text-white py-4 fomt-bold mt-8 text-center text-lg">
        © Copyright 2023 Gluck Wealth Pvt. Ltd.
      </div>
      </div>

      {/* Bottom Copyright Bar */}
     
    </footer>
  );
}
