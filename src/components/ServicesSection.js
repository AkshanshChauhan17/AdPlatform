"use client";

// Example of updating the Read More button in ServicesSection.js
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
    // Data array for the 6 services shown in the design
    const services = [
        {
            title: "Exposure Express",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Prime Billboard Services",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1562591970-254471cb7655?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Billboard Advantage",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1559253664-ca2cfb9c2b41?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Billboard Boost",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1572947645841-06105c31f4e1?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Roadside Reach",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1616858908819-21b96d98c6d3?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "High Impact Ads",
            description: "Billboard Advertising Is Powerful Marketing Tool That Design Best",
            image: "https://images.unsplash.com/photo-1555598687-3914a4fc937f?q=80&w=800&auto=format&fit=crop",
        }
    ];

    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Services Grid (3 columns on large screens, 2 rows total) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-[#F9FAFB] rounded-t-full rounded-b-[2rem] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Arched Image Container */}
                            <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-8 lg:p-10 flex flex-col gap-4">
                                <h4 className="text-lg lg:text-xl font-bold text-gray-900">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed pr-4">
                                    {service.description}
                                </p>

                                <Link
                                    href={`/services/exposure-express`}
                                    className="text-sm font-bold text-gray-900 flex items-center gap-2 hover:text-gray-500 transition-colors mt-2 w-fit"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}