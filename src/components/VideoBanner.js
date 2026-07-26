"use client";

import { ArrowRight, Play } from 'lucide-react';

export default function VideoBanner() {
    return (
        <section className="w-full bg-[#F3F4F6] pb-16 md:pb-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Banner Container */}
                <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[450px] md:min-h-[500px] flex items-center bg-gray-900 shadow-xl">
                    
                    {/* Background Image */}
                    <img 
                        src="/home_video.png" 
                        alt="Subway Billboard Advertisement" 
                        className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
                    />

                    {/* Heavy Dark Gradient Overlay (Left to Right) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/10 md:to-transparent"></div>

                    {/* Decorative Radial Burst SVG (Matches the lines behind the text) */}
                    <svg 
                        className="absolute left-0 top-0 h-full w-[300px] opacity-20 pointer-events-none text-white" 
                        viewBox="0 0 200 500" 
                        fill="none"
                    >
                        <line x1="-50" y1="250" x2="200" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                        <line x1="-50" y1="250" x2="200" y2="150" stroke="currentColor" strokeWidth="2" />
                        <line x1="-50" y1="250" x2="200" y2="250" stroke="currentColor" strokeWidth="3" />
                        <line x1="-50" y1="250" x2="200" y2="350" stroke="currentColor" strokeWidth="2" />
                        <line x1="-50" y1="250" x2="200" y2="450" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                        <line x1="-50" y1="250" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
                        <line x1="-50" y1="250" x2="100" y2="420" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    {/* Content Wrapper */}
                    <div className="relative z-10 w-full px-6 py-12 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
                        
                        {/* Left Side: Text Content */}
                        <div className="max-w-lg flex flex-col items-start gap-4 md:gap-5">
                            <span className="text-white text-sm md:text-base font-semibold tracking-wide">
                                Watch Some Video
                            </span>
                            
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                Your Brand With <br />
                                Billboard
                            </h2>
                            
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                                Billboard Advertising Is A Powerful Marketing Tool That Help Businesses Gain Visibility And Reach
                            </p>
                            
                            <button className="mt-2 bg-[#F2D65B] hover:bg-[#E5C84F] text-black text-sm font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors">
                                Read More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Right Side: Play Button */}
                        <div className="md:pr-12 lg:pr-32 self-center md:self-auto">
                            <button className="w-20 h-20 md:w-24 md:h-24 bg-[#F2D65B] hover:bg-[#E5C84F] rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg group">
                                {/* Fill is set to currentColor to make the play triangle solid black */}
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-2 group-hover:text-gray-900" fill="currentColor" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}