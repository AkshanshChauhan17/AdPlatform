"use client";

import BreadcrumbHero from '@/components/BreadcrumbHero';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] pb-24">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Contact Us"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
                
                {/* Top Section: Form and Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Contact Form */}
                    <div className="flex flex-col w-full">
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">
                            Contact Us
                        </h2>
                        
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors"
                                />
                            </div>
                            
                            {/* Phone & Subject Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors"
                                />
                                <select 
                                    className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-500 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden>Choose A Option</option>
                                    <option value="support">Customer Support</option>
                                    <option value="sales">Sales & Pricing</option>
                                    <option value="partnership">Partnership</option>
                                </select>
                            </div>
                            
                            {/* Message Textarea */}
                            <textarea 
                                placeholder="Message Here.." 
                                rows="6"
                                className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                            ></textarea>
                            
                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="mt-4 bg-[#F2D65B] hover:bg-[#E5C84F] text-gray-900 text-sm font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors w-fit"
                            >
                                Send Message <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
                        <img 
                            src="/contact_form.png" 
                            alt="Contact Us Background" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Section: Contact Info Cards */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-10 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Info Item 1: Phone */}
                    <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0 first:pt-0">
                        <div className="w-12 h-12 bg-[#F2D65B] rounded-2xl flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-gray-900 fill-gray-900" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-gray-900 font-bold mb-1 text-sm md:text-base">Phone Number</h4>
                            <p className="text-gray-400 text-xs md:text-sm font-medium">(225) 555-0118</p>
                        </div>
                    </div>

                    {/* Info Item 2: Email */}
                    <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
                        <div className="w-12 h-12 bg-[#F2D65B] rounded-2xl flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-gray-900 fill-gray-900" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-gray-900 font-bold mb-1 text-sm md:text-base">Email Address</h4>
                            <p className="text-gray-400 text-xs md:text-sm font-medium">michael.mito@example.com</p>
                        </div>
                    </div>

                    {/* Info Item 3: Address */}
                    <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
                        <div className="w-12 h-12 bg-[#F2D65B] rounded-2xl flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-gray-900 fill-gray-900" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-gray-900 font-bold mb-1 text-sm md:text-base">Address</h4>
                            <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed max-w-[200px]">
                                2715 Ash Dr. San Jose, South Dakota 83475
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}