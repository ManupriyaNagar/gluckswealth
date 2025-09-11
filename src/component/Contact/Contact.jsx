"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                    Let's Get In Touch
                </h2>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                    <div className="group cursor-pointer">
                        <Phone className="mx-auto mb-2 text-teal-700 group-hover:text-teal-800 transition-colors" size={28} />
                        <a
                            href="tel:+911169658917"
                            className="text-gray-700 hover:text-teal-700 transition-colors"
                        >
                            +91 11 6965 8917
                        </a>
                    </div>
                    <div className="group cursor-pointer">
                        <Mail className="mx-auto mb-2 text-teal-700 group-hover:text-teal-800 transition-colors" size={28} />
                        <a
                            href="mailto:care@gluckswealth.com"
                            className="text-gray-700 hover:text-teal-700 transition-colors"
                        >
                            care@gluckswealth.com
                        </a>
                    </div>
                    <div className="group cursor-pointer">
                        <MapPin className="mx-auto mb-2 text-teal-700 group-hover:text-teal-800 transition-colors" size={28} />
                        <a
                            href="https://maps.google.com/?q=T3-236,+Golden-I,+Techzone+-+IV,+Greater+Noida+West,+UP+-+201306"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-teal-700 transition-colors block"
                        >
                            <p>T3-236, Golden-I,Techzone - IV</p>
                            <p>Greater Noida West, UP - 201306</p>
                        </a>
                    </div>
                </div>

                <hr className="border-gray-300 mb-12" />

                {/* Form */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">
                        Or fill out the form below
                    </h3>

                    <form className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm">
                        {/* Inquiry Purpose */}
                        <div>
                            <label className="block text-gray-700 mb-1">Inquiry Purpose*</label>
                            <select className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                                <option>Choose one option...</option>
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-700 mb-1">Description that fits you*</label>
                            <select className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                                <option>Choose one option...</option>
                                <option>Individual</option>
                                <option>Business</option>
                            </select>
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name..."
                                className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        {/* Organization */}
                        <div>
                            <label className="block text-gray-700 mb-1">Organization</label>
                            <input
                                type="text"
                                placeholder="Enter your organization..."
                                className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Enter your phone number..."
                                className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        {/* Message (Full Width) */}
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Enter your message here..."
                                className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-teal-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-800 transition"
                            >
                                Submit Form →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}