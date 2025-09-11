import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import ContactForm from '@/component/Contact/Contact'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative py-20 px-6 overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banner.png')"
          }}
        ></div>
        

      
        <div className="relative max-w-6xl mx-auto text-center text-white z-10 justify-center mt-40">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Thank you for your interest in Glucks Wealth. We are committed to providing exceptional financial planning and investment management services to our clients. If you have any questions or would li
</p>
</div>
</div>
      {/* Contact Form and Info Section */}
   <ContactForm/>
    
    </div>
  )
}

export default ContactPage