"use client";

import { ArrowRight } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            title: "Exposure Express",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            // Placeholder image matching the vibe of the design
            image: "/home_fe1.png",
        },
        {
            title: "Prime Billboard Services",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "/home_fe2.png",
        },
        {
            title: "Billboard Advantage",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "/home_fe3.png",
        }
    ];

    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-700 uppercase mb-4">
                        Our Features
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
                        Supercharge Your Business <br className="hidden md:block" />
                        With Billboards
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-[#F9FAFB] rounded-t-full rounded-b-[2rem] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Arched Image Container */}
                            <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-8 lg:p-10 flex flex-col gap-4">
                                <h4 className="text-lg lg:text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed pr-4">
                                    {feature.description}
                                </p>
                                <button className="text-sm font-bold text-gray-900 flex items-center gap-2 hover:text-gray-500 transition-colors mt-2 w-fit">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}