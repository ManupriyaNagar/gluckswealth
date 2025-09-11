import React from 'react'
import Banner from '@/component/Home/Banner'

const NPSPage = () => {
  return (
    <>
    <Banner 
    title="National Pension System (NPS)" 
    breadcrumb={["Home", "National Pension System (NPS)"]} 
  />
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto py-12 md:px-0 px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Navigating the National Pension System (NPS): A Comprehensive Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The National Pension System (NPS) has emerged as a popular retirement investment avenue for individuals across India. In this article, we will delve into the details of NPS, its features, benefits, and considerations.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Understanding NPS */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Understanding NPS
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The National Pension System is a voluntary, long-term retirement savings scheme designed to provide financial security in the post-retirement years. It is regulated by the Pension Fund Regulatory and Development Authority (PFRDA).
            </p>
          </section>

          {/* Features of NPS */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Features of NPS
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li><strong>Flexibility:</strong> NPS allows subscribers to choose between equity and debt investments based on their risk appetite.</li>
              <li><strong>Tax Benefits:</strong> NPS offers tax benefits under Section 80CCD(1), 80CCD(2), and 80CCD(1B) of the Income Tax Act.</li>
              <li><strong>Tier Structure:</strong> NPS has two tiers – Tier I is a non-withdrawable account for retirement, while Tier II is a voluntary savings account.</li>
            </ul>
          </section>

          {/* Types of NPS Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Types of NPS Accounts
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li><strong>Tier I Account:</strong> It's a mandatory account with restrictions on withdrawals until retirement.</li>
              <li><strong>Tier II Account:</strong> It's a voluntary savings account with no withdrawal restrictions.</li>
            </ul>
          </section>

          {/* Investment Options */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Investment Options
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NPS offers different investment options known as Asset Class E (Equity), Asset Class C (Corporate Bonds), and Asset Class G (Government Securities).
            </p>
          </section>

          {/* Benefits of NPS */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of NPS
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li><strong>Market-Linked Returns:</strong> The equity component of NPS allows for potentially higher returns compared to traditional savings.</li>
              <li><strong>Systematic Saving:</strong> NPS encourages disciplined savings for retirement.</li>
            </ul>
          </section>

          {/* Eligibility and Contribution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Eligibility and Contribution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Any Indian citizen between 18 and 60 years of age can join NPS. The minimum contribution is Rs. 500 per month or Rs. 6,000 annually.
            </p>
          </section>

          {/* Withdrawal Rules */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Withdrawal Rules
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>At least 40% of the accumulated corpus must be utilized to purchase an annuity.</li>
              <li>Subscribers can withdraw the remaining 60% as a lump sum or in a phased manner.</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              <div className="flex md:flex-row flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Is NPS suitable for self-employed individuals?</h3>
                <p className="text-gray-700">Yes, NPS is open to both salaried and self-employed individuals.</p>
              </div>
              <div className="flex md:flex-row flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Can I change my investment allocation in NPS?</h3>
                <p className="text-gray-700">Yes, NPS subscribers can change their investment allocation twice a year.</p>
              </div>
              <div className="flex md:flex-row flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">What is the tax treatment of NPS withdrawals?</h3>
                <p className="text-gray-700">Taxability of NPS withdrawals depends on the annuity option chosen.</p>
              </div>
              <div className="flex md:flex-row flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">Can NRIs invest in NPS?</h3>
                <p className="text-gray-700">Yes, NRIs can invest in NPS, subject to regulations.</p>
              </div>
              <div className="flex md:flex-row flex-col">
                <h3 className="font-semibold text-gray-900 mb-2">How do I open an NPS account?</h3>
                <p className="text-gray-700">NPS accounts can be opened through authorized banks and financial institutions.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-gray-700 leading-relaxed">
              In conclusion, the National Pension System (NPS) offers a well-structured retirement savings avenue with flexibility, tax benefits, and market-linked returns. As individuals plan for a secure retirement, NPS emerges as a viable and rewarding investment option.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default NPSPage