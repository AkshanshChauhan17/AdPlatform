"use client";

import { ArrowRight, Phone, ChevronRight, ChevronLeft, Rocket } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Main Dark Container */}
            <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-14 lg:p-20 relative overflow-hidden flex flex-col gap-12 lg:gap-16">
                
                {/* Top Row: Heading and Rocket Icon */}
                <div className="flex justify-between items-start w-full relative z-10">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        Unlock Now The Business <br className="hidden md:block" />
                        <span className="relative inline-block mt-2 md:mt-4">
                            <span className="relative z-10 text-white">Billboard</span>
                            {/* Yellow Underline */}
                            <span className="absolute left-0 bottom-1 md:bottom-2 w-full h-[4px] md:h-[6px] bg-[#F2D65B]"></span>
                        </span>{' '}
                        Brilliance
                    </h1>
                    
                    {/* Wireframe Rocket Icon */}
                    <div className="hidden lg:block absolute right-0 top-[-100] opacity-80 text-gray-400 rotate-12">
                        <img 
                            src="/home_rocket.png" 
                            alt="Billboard Exhibition" 
                            className="w-full h-full object-cover rounded-3xl lg:rounded-tl-[3rem] lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-[2.5rem]"
                        />
                    </div>
                </div>

                {/* Bottom Row: Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
                    
                    {/* Left Column (Text & CTA) */}
                    <div className="lg:col-span-5 flex flex-col gap-8 pb-4 lg:pb-12">
                        {/* Stats */}
                        <div className="flex items-center gap-4">
                            <span className="text-5xl lg:text-6xl font-light text-gray-200">500+</span>
                            <span className="text-sm font-medium text-gray-400 max-w-[80px] leading-snug">
                                Happy Clients
                            </span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                            Billboard Advertising Is A Powerful Marketing Tool That Help Businesses Gain Visibility And Reach Their Target Audience
                        </p>
                        
                        {/* Read More Button */}
                        <div>
                            <button className="bg-[#F2D65B] hover:bg-[#E5C84F] text-black text-sm md:text-base font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors">
                                Read More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Image & Overlapping Contact Box) */}
                    <div className="lg:col-span-7 relative w-full h-[350px] md:h-[450px]">
                        {/* Main Image */}
                        <img 
                            src="/home_hero.png" 
                            alt="Billboard Exhibition" 
                            className="w-full h-full object-cover rounded-3xl lg:rounded-tl-[3rem] lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-[2.5rem]"
                        />

                        {/* Bottom Right Floating Box (Need Help & Carousel Controls) */}
                        <div className="absolute bottom-0 right-0 flex flex-col sm:flex-row items-stretch shadow-2xl">
                            
                            {/* Yellow Contact Box */}
                            <div className="bg-[#F2D65B] rounded-tl-3xl sm:rounded-tl-[2.5rem] p-6 md:px-8 md:py-7 flex items-center gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-black" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-semibold text-black/70 mb-0.5">Need Help</p>
                                    <p className="text-base md:text-xl font-bold text-black">(208) 555-0112</p>
                                </div>
                            </div>

                            {/* Dark Carousel Controls */}
                            <div className="bg-[#111111] p-4 md:px-6 md:py-0 flex sm:flex-col items-center justify-center gap-3 sm:rounded-br-[2.5rem]">
                                <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}