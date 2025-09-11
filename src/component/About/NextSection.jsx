import React from 'react'
import { Megaphone } from 'lucide-react'

const NextSection = () => {
    return (
        <div className="bg-gray-50 py-16 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                           <img src="/bhopu.png" alt="" />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            At Glucks Wealth
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                            we strive to provide our clients with personalized financial planning and
                            investment management services. Our team of experienced professionals works
                            closely with our clients to understand their unique financial goals and help them
                            build a strong financial foundation.
                        </p>


                    </div>

                    {/* Right Image Section */}
                    <div className="relative w-[50%] h-full flex ml-auto">
                        {/* Blue Dotted Texture Background */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-62 h-62 opacity-30">
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
                            className="absolute bottom-10 left-20 w-[60vh] h-[30vh] object-cover rounded-lg shadow-lg z-2"
                        />

                        {/* Second Image - Bottom Left */}
                        <img
                            src="/about3.jpg"
                            alt="Team working in office environment"
                            className="absolute  top-20 right-30 w-[60vh] h-[30vh] object-cover rounded-lg shadow-lg z-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextSection