"use client";

import { Hexagon, CircleDashed, Zap, Box, Clover } from 'lucide-react';

export default function LocationSearch() {
    return (
        <section className="w-full bg-white rounded-t-[2.5rem] md:rounded-t-[3rem] py-16 md:py-24 mt-8">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bottom Section: Map & Search */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Map Outline */}
                    <div className="flex justify-center lg:justify-end pr-0 lg:pr-16 order-2 lg:order-1">
                        {/* Using a placeholder SVG outline map of India */}
                        <img 
                            src="/Map Of India.png" 
                            alt="India Map Outline" 
                            className="w-full max-w-[350px] md:max-w-[450px] object-contain opacity-80 mix-blend-multiply hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Right Column: Search Details */}
                    <div className="flex flex-col items-start max-w-lg order-1 lg:order-2">
                        <span className="text-sm font-bold text-gray-900 mb-3 tracking-wide">
                            Watch Some Video
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-gray-900 leading-[1.1] mb-6">
                            We Get You India
                        </h2>
                        
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                            Billboard Advertising Is A Powerful Marketing Tool That He Businesses 
                            Gain Visibility And Reach Their Target Audience
                        </p>
                        
                        {/* Search Input Form */}
                        <form 
                            onSubmit={(e) => e.preventDefault()} 
                            className="relative flex items-center bg-transparent border border-gray-600 rounded-full p-1.5 w-full max-w-md focus-within:border-gray-900 transition-colors"
                        >
                            <input 
                                type="text" 
                                placeholder="Street Address Or Zip/Postal Code" 
                                className="flex-1 bg-transparent border-none outline-none pl-5 pr-2 py-2 text-sm text-gray-800 placeholder-gray-500 w-full" 
                            />
                            <button 
                                type="submit" 
                                className="bg-[#F2D65B] hover:bg-[#E5C84F] text-black font-semibold text-sm px-8 py-2.5 rounded-full border border-black/80 transition-colors shadow-sm"
                            >
                                Go
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}