"use client";

import BreadcrumbHero from '@/components/BreadcrumbHero';
import { ChevronsRight, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceDetail() {
    // Dummy list of services for the sidebar
    const serviceLists = [
        { name: "Billboard Boost", href: "#", active: false },
        { name: "Exposure Express", href: "#", active: false },
        { name: "Prime Billboard Services", href: "#", active: false },
        { name: "Billboard Advantage", href: "#", active: false },
        { name: "High Impact Ads", href: "#", active: false },
    ];

    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            <BreadcrumbHero
                heading="Our Services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Page Content Container */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Top Banner Image (Spans the container) */}
                <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-sm relative z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2070&auto=format&fit=crop"
                        alt="Service Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">

                    {/* Left Column: Sidebar (Overlaps the banner image) */}
                    <div className="lg:col-span-4 flex flex-col gap-8 lg:-mt-32 relative z-10">

                        {/* Service Lists Widget */}
                        <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg shadow-gray-200/50">
                            <div className="bg-[#F2D65B] p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-gray-900">Service Lists</h3>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col gap-2">
                                {serviceLists.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={service.href}
                                        className={`flex items-center justify-between p-4 rounded-xl transition-colors ${service.active
                                                ? 'bg-gray-50 text-gray-900 font-semibold'
                                                : 'text-gray-900 hover:bg-gray-50 font-medium'
                                            }`}
                                    >
                                        <span>{service.name}</span>
                                        <ChevronsRight className="w-4 h-4 text-[#F2D65B]" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Get in Touch Widget */}
                        <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-lg shadow-gray-200/50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2D65B] flex items-center justify-center shrink-0 shadow-sm">
                                        <Phone className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">(270) 555-0117</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2D65B] flex items-center justify-center shrink-0 shadow-sm">
                                        <Mail className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Sara.Cruz@Example.Com</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2D65B] flex items-center justify-center shrink-0 shadow-sm">
                                        <Clock className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Mon-Sun : 8AM - 5PM</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Main Content */}
                    <div className="lg:col-span-8 pt-8 lg:pt-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Service Overview
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                            Aliquam Eros Justo, Posuere Loborti Viverra Lao Ullamcorper Posuere Viverra. Aliquam Eros Justo,
                            Posuere Lobortis Non, Viverra Laoreet Augue Mattis Start Fermentum Ullamcor Viverra Laoreet By
                            Admin . Creativity . 28th February 2022 . Leave A Comment
                        </p>

                        <p className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-12">
                            Billboard Advertising Is A Powerful Marketing Tool That Helps Businesses Gain
                            Visibility And Reach Their Target Audience
                        </p>

                        {/* Sub-Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                            {/* Card 1 */}
                            <div className="flex flex-col group">
                                <div className="w-full h-[250px] rounded-[1.5rem] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop"
                                        alt="Outdoor Marketing"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Overlapping White Content Box */}
                                <div className="bg-white rounded-[1.5rem] p-6 shadow-xl mx-4 -mt-12 relative z-10 flex flex-col items-start border border-gray-100">
                                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-6 pr-4">
                                        Unlock The Potential Of Outdoor Marketing
                                    </h4>
                                    <button className="border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
                                        Read More <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col group">
                                <div className="w-full h-[250px] rounded-[1.5rem] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1555598687-3914a4fc937f?q=80&w=800&auto=format&fit=crop"
                                        alt="Power Of Advertising"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Overlapping White Content Box */}
                                <div className="bg-white rounded-[1.5rem] p-6 shadow-xl mx-4 -mt-12 relative z-10 flex flex-col items-start border border-gray-100">
                                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-6 pr-4">
                                        Unleash The Power Of Advertising
                                    </h4>
                                    <button className="border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
                                        Read More <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Text */}
                        <p className="text-gray-400 text-sm leading-relaxed pb-12">
                            Aliquam Eros Justo, Posuere Loborti Viverra Lao Ullamcorper Posuere Viverra. Aliquam A Eros Justo,
                            Posuere Lobortis Non, Viverra Laoreet Augue Mattis
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}