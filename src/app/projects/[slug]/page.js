"use client";

import BreadcrumbHero from '@/components/BreadcrumbHero';
import { ChevronsRight, Star } from 'lucide-react';

export default function ProjectDetails() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] pb-24">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Project Details"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Project Details' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Content Container */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.2] mb-8 max-w-2xl">
                    Skyrocket Your Brand With Billboard Advertising
                </h1>

                {/* Large Project Image */}
                <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm relative">
                    <img 
                        src="https://images.unsplash.com/photo-1555598687-3914a4fc937f?q=80&w=2070&auto=format&fit=crop" 
                        alt="Billboard Advertisement Project" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Grid Layout for Content & Overlapping Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-8 pt-8 md:pt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-8 pr-4">
                            Elevate Your Business Above The Rest With The Most Billboards
                        </h2>

                        {/* Bulleted List */}
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-500">
                                <ChevronsRight className="w-4 h-4 text-gray-400" />
                                <span className="text-sm md:text-base">Skyrocket Your Brand With Billboard Advertising</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <ChevronsRight className="w-4 h-4 text-gray-400" />
                                <span className="text-sm md:text-base">Elevate Your Business Above The Rest With Billboards</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <ChevronsRight className="w-4 h-4 text-gray-400" />
                                <span className="text-sm md:text-base">Maximize Your Reach With Billboard Advertising</span>
                            </div>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="flex flex-col gap-6 text-gray-500 text-sm md:text-base leading-relaxed">
                            <p>
                                Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our The A Company. 
                                We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Nab Encompassing All Aspects 
                                Design Bby The Man Can Done That Dwen
                            </p>
                            <p>
                                Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our The A Company. 
                                We Hatendency To Believe The Idea That Sm Technology
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Project Information Card (Overlaps the image on desktop) */}
                    <div className="lg:col-span-4 lg:-mt-32 relative z-10">
                        <div className="bg-white rounded-[1.5rem] p-8 shadow-xl shadow-gray-200/60 border border-gray-100 flex flex-col">
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                            
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                Aliquam Eros Justo, Posuere Loborti Vive Rra Laoreet Matti Ulla
                            </p>

                            {/* Info Rows */}
                            <div className="flex flex-col gap-3">
                                
                                <div className="border border-gray-200 rounded-lg p-3.5 flex items-center gap-2 text-sm">
                                    <span className="font-bold text-gray-900">Category:</span>
                                    <span className="text-gray-500">Business Consulting</span>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg p-3.5 flex items-center gap-2 text-sm">
                                    <span className="font-bold text-gray-900">Customer:</span>
                                    <span className="text-gray-500">Business Consulting</span>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg p-3.5 flex items-center gap-2 text-sm">
                                    <span className="font-bold text-gray-900">Start Date:</span>
                                    <span className="text-gray-500">28 September 2025</span>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg p-3.5 flex items-center gap-2 text-sm">
                                    <span className="font-bold text-gray-900">End Date:</span>
                                    <span className="text-gray-500">28 September 2025</span>
                                </div>
                                
                                <div className="border border-gray-200 rounded-lg p-3.5 flex items-center gap-2 text-sm">
                                    <span className="font-bold text-gray-900">Rating:</span>
                                    <div className="flex items-center gap-1 ml-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 text-[#F2D65B] fill-[#F2D65B]" />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}