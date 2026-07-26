"use client";

import BreadcrumbHero from '@/components/BreadcrumbHero';
import { User, Folder, MessageSquare, ChevronsRight } from 'lucide-react';

export default function BlogDetails() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] pb-24">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Blog Details"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blogs', href: '/blogs' },
                    { label: 'Blog Details' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Main Blog Content Container */}
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                
                {/* White Reading Card */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 md:p-12 lg:p-16">
                    
                    {/* Blog Header & Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] mb-6">
                        Billboard Advertising Is A Powerful Marketing Tool That Helps Businesses
                    </h1>

                    {/* Meta Information Row */}
                    <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium mb-10 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-gray-500" />
                            <span>By Admin</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Folder className="w-4 h-4 text-gray-500" />
                            <span>Category</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4 text-gray-500" />
                            <span>Comments (05)</span>
                        </div>
                    </div>

                    {/* Content Section 1: Intro */}
                    <div className="text-gray-500 text-sm md:text-base leading-relaxed flex flex-col gap-6 mb-12">
                        <p>
                            Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                            Web Designing In A Powerful Way Of Just N Professio, Howein Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad
                        </p>
                        <p>
                            Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                            Web Designing In A Powerful =
                        </p>
                    </div>

                    {/* 2-Column Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="w-full h-[250px] md:h-[300px] rounded-[1.5rem] overflow-hidden">
                            <img 
                                src="/in_blog1.png" 
                                alt="Billboard Example 1" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-[250px] md:h-[300px] rounded-[1.5rem] overflow-hidden">
                            <img 
                                src="/in_blog2.png" 
                                alt="Billboard Example 2" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section 2: What Is Billboard Advertising */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        What Is Billboard Advertising?
                    </h2>
                    <div className="text-gray-500 text-sm md:text-base leading-relaxed flex flex-col gap-6 mb-12">
                        <p>
                            Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                            Web Designing In A Powerful Way Of Just N Professio, Howein Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad
                        </p>
                        <p>
                            Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                            We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                            Web Designing In A Powerful =
                        </p>
                    </div>

                    {/* Content Section 3: Pricing */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        How Much Does A Billboard Cost?
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
                        Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                        We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                        Web Designing In A Powerful =
                    </p>

                    {/* Large Full-Width Image */}
                    <div className="w-full h-[300px] md:h-[450px] rounded-[1.5rem] overflow-hidden mb-12">
                        <img 
                            src="/in_blog3.png" 
                            alt="Large Indoor Billboard" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section 4: Measurement & Features List */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        How Can I Measure A Billboards Performance?
                    </h2>
                    
                    {/* 2-Column Bulleted List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Skyrocket Your Brand With Billboard Advertising</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Unlock The Potential Of Outdoor Marketing With Billboards</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Elevate Your Business Above The Rest With Billboards</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Illuminate Your Business With Billboard Brilliance</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Maximize Your Reach With Billboard Advertising</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ChevronsRight className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                            <span className="text-sm md:text-base text-gray-500">Supercharge Your Business With Billboards</span>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12">
                        Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                        We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                        Web Designing In A Powerful =
                    </p>

                    {/* Content Section 5: Conclusion */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Supercharge Your Business With Billboards
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. 
                        We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects 
                        Web Designing In A Powerful =
                    </p>

                </div>
            </div>
        </div>
    );
}