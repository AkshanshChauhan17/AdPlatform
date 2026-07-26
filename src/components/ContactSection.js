"use client";

import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="w-full bg-[#F3F4F6] pb-32 pt-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto relative">
                
                {/* Main Yellow Container */}
                <div className="w-full bg-[#E8C84B] rounded-[2.5rem] px-6 py-12 md:px-12 md:py-20 lg:p-20 relative shadow-sm">
                    
                    {/* Top Right Squiggle Decoration */}
                    <svg className="absolute top-8 right-8 md:top-12 md:right-16 w-20 h-24 text-black/30 opacity-70 rotate-12 pointer-events-none hidden sm:block" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M70,20 C90,10 100,40 80,50 C60,60 40,20 60,10 C80,0 100,30 80,50 C60,70 30,30 50,20 C70,10 90,40 70,60 C50,80 20,40 40,30 C60,20 80,50 60,70 C40,90 10,50 30,40" />
                    </svg>

                    {/* Bottom Left Squiggle Decoration */}
                    <svg className="absolute bottom-32 left-4 md:bottom-24 md:left-8 w-20 h-24 text-black/30 opacity-70 -rotate-45 pointer-events-none hidden sm:block" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M70,20 C90,10 100,40 80,50 C60,60 40,20 60,10 C80,0 100,30 80,50 C60,70 30,30 50,20 C70,10 90,40 70,60 C50,80 20,40 40,30 C60,20 80,50 60,70 C40,90 10,50 30,40" />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 mb-20 lg:mb-12">
                        
                        {/* Left Column: Contact Form */}
                        <div className="flex flex-col max-w-xl w-full">
                            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">
                                Get In Touch
                            </h2>
                            
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="w-full bg-transparent border border-gray-800/40 rounded-[1rem] px-5 py-3.5 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full bg-transparent border border-gray-800/40 rounded-[1rem] px-5 py-3.5 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        className="w-full bg-transparent border border-gray-800/40 rounded-[1rem] px-5 py-3.5 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                    <select 
                                        className="w-full bg-transparent border border-gray-800/40 rounded-[1rem] px-5 py-3.5 text-gray-700 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled hidden>Choose A Option</option>
                                        <option value="billboard">Billboard Advertising</option>
                                        <option value="digital">Digital Displays</option>
                                        <option value="support">Customer Support</option>
                                    </select>
                                </div>
                                
                                <textarea 
                                    placeholder="Message Here.." 
                                    rows="4"
                                    className="w-full bg-transparent border border-gray-800/40 rounded-[1rem] px-5 py-4 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                                ></textarea>
                                
                                <button type="submit" className="mt-2 bg-[#1A1A1A] hover:bg-black text-white text-sm md:text-base font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors w-fit">
                                    Send Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Image */}
                        <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg border border-black/5">
                            <img 
                                src="/get_in_touch.png" 
                                alt="Subway Advertisement Display" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom Overlapping Stats Bar */}
                <div className="absolute -bottom-20 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
                    <div className="bg-white rounded-[1.5rem] shadow-xl py-10 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x-0 md:divide-x divide-gray-200 text-center border border-gray-100">
                        
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">200+</h3>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Canvases</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">12M+</h3>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Weekly Impressions</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">200K+</h3>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Creatives</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">500+</h3>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Clients</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}