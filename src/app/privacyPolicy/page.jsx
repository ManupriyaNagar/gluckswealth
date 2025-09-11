import Banner from '@/component/Home/Banner'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <>
     <Banner
                title="Privacy Policy"
                breadcrumb={["Home", "Privacy Policy"]}
            />
    <div className=" bg-white">
      <div className="container mx-auto py-12 text-gray-500 text-lg space-y-4">
        <p>
        Welcome to our website gluckswealth.com We at Glucks Wealth respect the privacy of everyone who visits this website and are committed to maintaining the privacy and security of the personal information of all visitors to this website. Our policy on the collection and use of personal information and other information is outlined below.</p>
        <p>We collect personal information from our visitors on a voluntary basis. Personal information may include name, title, company, address, phone number, email address, and other relevant data. Questions or comments submitted by visitors may also include personal information.
        </p>
        <p>
        We collect and use personal information for business purposes in order : that you may download product information, order products and take advantage of certain other features of our website. 
        </p>
        
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicyPage