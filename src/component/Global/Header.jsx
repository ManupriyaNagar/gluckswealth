"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (

 <header className="px-7 z-90">
        <div className="fixed top-6 w-[1470px] bg-white rounded-md shadow-[0_6px_12px_-2px_rgba(0,0,0,0.15)] z-50">
      <div className="container mx-auto flex items-center justify-between  py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://gluckswealth.com/wp-content/uploads/2022/10/Logo-GW.png" // replace with your logo path
            alt="Glucks Wealth"
            width={250}
            height={50}
            priority="true"
          />
        </div>

 
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold text-md">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

   
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1">
              Products <ChevronDown size={16} className="text-blue-600" />
            </button>
            {isProductsOpen && (
              <div className="absolute  left-0 w-66 bg-white rounded-md shadow-lg z-50">
                <Link href="/product/mutualFund" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  Mutual Fund
                </Link>
                <Link href="/product/fixedDeposit" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  Fixed Deposit
                </Link>
                <Link href="/product/pms" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  PMS
                </Link>
                <Link href="/product/p2pLoan" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  P2P Loan
                </Link>
                <Link href="/product/aif" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                Alternative Investment Funds (AIF)
                </Link>
                <Link href="/product/nps" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                National Pension System (NPS)
                </Link>
                <Link href="/product/bond" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  Bond
                </Link>
                <Link href="/product/gold" className="block px-3 py-2 hover:bg-gray-100 rounded text-sm">
                  Gold
                </Link>
               
              </div>
            )}
          </div>

      
          <Link href="/contact">Contact Us</Link>
          <Link href="https://play.google.com/store/apps/details?id=com.gluckswealth.gluckswealth&hl=en_IN&pli=1" target="_blank">Register</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
        </nav>

        {/* Login/Register Button */}
        <Link
          href="/login"
          className="bg-gradient-to-r from-[#18aadd] to-[#6aa962] text-white border-white border-1 font-semibold px-5 py-2 rounded-full shadow hover:opacity-90 transition"
        >
          Login/Register
        </Link>
      </div>
      </div>
    </header>

  );
}
