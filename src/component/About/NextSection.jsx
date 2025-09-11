import React from 'react'

const NextSection = () => {
    return (
        <div className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                           <img src="/bhopu.png" alt="Megaphone icon" className="w-8 h-8" />
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            At Glucks Wealth
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                            we strive to provide our clients with personalized financial planning and
                            investment management services. Our team of experienced professionals works
                            closely with our clients to understand their unique financial goals and help them
                            build a strong financial foundation.
                        </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative order-1 lg:order-2">
                        {/* Mobile Layout - Single Column */}
                        <div className="sm:hidden space-y-4">
                            <img
                                src="/about2.jpg"
                                alt="Team working in office environment"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="/about3.jpg"
                                alt="Team working in office environment"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Tablet Layout - Side by Side */}
                        <div className="hidden sm:flex lg:hidden gap-4">
                            <img
                                src="/about2.jpg"
                                alt="Team working in office environment"
                                className="flex-1 h-64 object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="/about3.jpg"
                                alt="Team working in office environment"
                                className="flex-1 h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Desktop Layout - Creative Positioning with Dots */}
                        <div className="hidden lg:block relative h-96">
                            {/* Blue Dotted Texture Background */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 opacity-20">
                                    <div className="grid grid-cols-8 gap-1">
                                        {Array.from({ length: 64 }).map((_, i) => (
                                            <div key={i} className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* First Image - Top Right */}
                            <img
                                src="/about2.jpg"
                                alt="Team working in office environment"
                                className="absolute top-0 right-0 w-56 h-36 object-cover rounded-lg shadow-lg z-10 transform hover:scale-105 transition-transform duration-300"
                            />

                            {/* Second Image - Bottom Left */}
                            <img
                                src="/about3.jpg"
                                alt="Team working in office environment"
                                className="absolute bottom-0 left-0 w-56 h-36 object-cover rounded-lg shadow-lg z-10 transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextSection