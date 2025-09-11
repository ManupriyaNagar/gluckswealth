"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  return (
    <header className="w-full z-90 px-4 md:px-10">
      <div className="bg-white rounded-md shadow-[0_6px_12px_-2px_rgba(0,0,0,0.15)] z-50 mt-10">
        <div className="container mx-auto w-full flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://gluckswealth.com/wp-content/uploads/2022/10/Logo-GW.png"
              alt="Glucks Wealth"
              width={200}
              height={40}
              className="md:w-[250px] md:h-[50px]"
              priority="true"
            />
          </div>

          {/* Desktop Navigation */}
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
                <div className="absolute left-0 w-66 bg-white rounded-md shadow-lg z-50 p-2">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-gradient-to-r from-[#18aadd] to-[#6aa962] text-white font-semibold px-3 py-1 rounded-full text-sm hover:opacity-90 transition"
            >
              Login
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Login/Register Button */}
          <Link
            href="/login"
            className="hidden md:block bg-gradient-to-r from-[#18aadd] to-[#6aa962] text-white border-white border-1 font-semibold px-5 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            Login/Register
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              <Link 
                href="/" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Products
                  <ChevronDown 
                    size={16} 
                    className={`text-blue-600 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isMobileProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link 
                      href="/product/mutualFund" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mutual Fund
                    </Link>
                    <Link 
                      href="/product/fixedDeposit" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fixed Deposit
                    </Link>
                    <Link 
                      href="/product/pms" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      PMS
                    </Link>
                    <Link 
                      href="/product/p2pLoan" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      P2P Loan
                    </Link>
                    <Link 
                      href="/product/aif" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Alternative Investment Funds (AIF)
                    </Link>
                    <Link 
                      href="/product/nps" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      National Pension System (NPS)
                    </Link>
                    <Link 
                      href="/product/bond" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Bond
                    </Link>
                    <Link 
                      href="/product/gold" 
                      className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gold
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="https://play.google.com/store/apps/details?id=com.gluckswealth.gluckswealth&hl=en_IN&pli=1" 
                target="_blank"
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link 
                href="/privacyPolicy" 
                className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}