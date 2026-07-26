"use client";

import { Hexagon, CircleDashed, Zap, Box, Clover } from 'lucide-react';

export default function Logos() {
    return (
        <section className="w-full md:rounded-t-[3rem] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Trusted Companies */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-800 text-sm md:text-base font-medium mb-10 text-center">
                        Join The 150+ Companies Trusting Maxline Company
                    </p>
                    
                    {/* Logos Container */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Fake Logo 1 */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                            <Hexagon className="w-8 h-8 text-[#FF5722] fill-[#FF5722]/20" />
                            <span>Logoipsum</span>
                        </div>
                        {/* Fake Logo 2 */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                            <CircleDashed className="w-8 h-8 text-[#03A9F4]" />
                            <span className="text-[#03A9F4]">logoipsum</span>
                        </div>
                        {/* Fake Logo 3 */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                            <div className="bg-[#EF5350] p-1.5 rounded-full text-white">
                                <Zap className="w-5 h-5 fill-current" />
                            </div>
                            <span>Logoipsum</span>
                        </div>
                        {/* Fake Logo 4 */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                            <span className="text-[#4CAF50]">logo</span>
                            <Box className="w-8 h-8 text-[#8BC34A] fill-[#8BC34A]" />
                            <span className="text-[#4CAF50]">ipsum</span>
                        </div>
                        {/* Fake Logo 5 */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                            <span className="font-semibold text-gray-700">Logo</span>
                            <Clover className="w-8 h-8 text-[#FF9800]" />
                            <span className="font-semibold text-gray-700">Ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}