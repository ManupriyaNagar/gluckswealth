import React from 'react'

const Hero = () => {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left side: image + text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:w-3/5 gap-6">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://nivesh.com/assets/images/person2.webp"
              alt="hero"
              className="object-cover max-h-[400px] rounded-xl"
            />
          </div>
          
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 leading-snug">
              Be a part of change in the investment industry
            </h2>
            <button className="mt-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition">
              Be A Partner For Free
            </button>
          </div>
        </div>
        
        {/* Right side: Form */}
        <div className="lg:w-2/5 w-full flex  ">
        
        <div className='  right '>
          <form className="h-96 mt-9 ml-6 absolute bg-white rounded-xl shadow p-6 flex flex-col gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
            >
              Be A Partner For Free
            </button>
          </form>
</div>
          <img src="/mobile.png" alt="partner-hero" className="rounded-xl " />
        </div>




      </div>
    </section>
  )
}

export default Hero
