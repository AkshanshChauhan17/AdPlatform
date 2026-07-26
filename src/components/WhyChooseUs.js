"use client";

import { ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start max-w-lg lg:pr-8">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-700 uppercase mb-4">
                            Why Chose Us
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-gray-900 leading-[1.1] mb-6">
                            The Digital Cybsec <br />
                            And Transform <br />
                            Billboard
                        </h2>
                        
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                            Billboard Advertising Is A Powerful Marketing Tool Businesses
                            Gain An Visibility And Reach Their Target Audience Advertising
                            Is A Powerful A Marketing Tool That He Business
                        </p>
                        
                        <button className="px-6 py-2.5 border border-gray-900 rounded-full flex items-center gap-2 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                            Media Finder <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Column: Image & Graphics */}
                    <div className="relative w-full max-w-md mx-auto mt-10 lg:mt-0">
                        
                        {/* Decorative Concentric Circles SVG (Background) */}
                        <svg 
                            className="absolute -left-16 md:-left-32 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 text-gray-300 -z-10 pointer-events-none" 
                            viewBox="0 0 100 100" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="0.5"
                        >
                            <circle cx="50" cy="50" r="15" />
                            <circle cx="50" cy="50" r="25" />
                            <circle cx="50" cy="50" r="35" />
                            <circle cx="50" cy="50" r="45" />
                            <circle cx="50" cy="50" r="55" />
                        </svg>

                        {/* Main Arched Image */}
                        <div className="w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-xl relative z-10">
                            <img 
                                src="/home_choose.png" 
                                alt="Subway Billboard Display" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Yellow Stats Card */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 lg:-right-16 bg-[#F2D65B] rounded-2xl p-6 sm:p-8 shadow-2xl z-20 min-w-[160px] sm:min-w-[200px]">
                            {/* Top Stat */}
                            <div className="flex flex-col gap-1 mb-4">
                                <span className="text-3xl sm:text-4xl font-bold text-gray-900">100%</span>
                                <span className="text-sm font-medium text-gray-700">Billboard</span>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-black/10 my-4"></div>

                            {/* Bottom Stat */}
                            <div className="flex flex-col gap-1 mt-4">
                                <span className="text-3xl sm:text-4xl font-bold text-gray-900">250+</span>
                                <span className="text-sm font-medium text-gray-700">Happy Clients</span>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    );
}