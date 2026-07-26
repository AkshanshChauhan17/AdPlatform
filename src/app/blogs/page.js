"use client";

import BreadcrumbHero from '@/components/BreadcrumbHero';
import Link from 'next/link';
import { User, Folder, MessageSquare, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
    // Dummy blog data based on your design
    const blogs = [
        {
            slug: "billboard-advertising-powerful-tool",
            title: "Billboard Advertising Is A Powerful Marketing Tool That Helps Businesses",
            excerpt: "Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects",
            author: "By Admin",
            category: "Category",
            comments: "Comments (05)",
            image: "/blog1.png"
        },
        {
            slug: "powerful-marketing-tool-businesses",
            title: "A Powerful Marketing Tool That Helps Businesses Rest With Billboards",
            excerpt: "Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects",
            author: "By Admin",
            category: "Category",
            comments: "Comments (05)",
            image: "/blog2.png"
        },
        {
            slug: "skyrocket-brand-billboard-success",
            title: "Skyrocket Your Brand With Billboard Advertising Drive Success With Eye",
            excerpt: "Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects",
            author: "By Admin",
            category: "Category",
            comments: "Comments (05)",
            image: "/blog3.png"
        },
        {
            slug: "maximize-reach-unlock-potential",
            title: "Maximize Your Reach With Billboard Advertising Unlock The Potential",
            excerpt: "Web Designing In A Powerful Way Of Just N Professions, However, In Passion For A Our Company. We Hatendency To Believe The Idea That Sm Technology Is A Broad Category Encompassing All Aspects",
            author: "By Admin",
            category: "Category",
            comments: "Comments (05)",
            image: "/blog1.png"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F3F4F6] pb-24">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Our Blogs"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blogs' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Blogs List Container */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 flex flex-col gap-8">
                
                {blogs.map((blog, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                    >
                        {/* Image Section */}
                        <Link 
                            href={`/blogs/${blog.slug}`} 
                            className="w-full md:w-[400px] h-[250px] md:h-[300px] shrink-0 block group overflow-hidden rounded-[1rem] md:rounded-[1.5rem]"
                        >
                            <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                        </Link>

                        {/* Content Section */}
                        <div className="w-full flex flex-col items-start py-2 pr-0 md:pr-6">
                            
                            {/* Meta Info Row */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-gray-400 font-medium mb-4">
                                <div className="flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5" />
                                    <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Folder className="w-3.5 h-3.5" />
                                    <span>{blog.category}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    <span>{blog.comments}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <Link href={`/blogs/${blog.slug}`}>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4 hover:text-[#F2D65B] transition-colors line-clamp-2">
                                    {blog.title}
                                </h2>
                            </Link>

                            {/* Excerpt */}
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                                {blog.excerpt}
                            </p>

                            {/* Read More Button */}
                            <Link 
                                href={`/blogs/${blog.slug}`} 
                                className="border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs md:text-sm font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-full flex items-center gap-2 transition-colors mt-auto"
                            >
                                Read More <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 md:gap-4 mt-8 md:mt-12">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-900 hover:border-gray-400 transition-colors">
                        01
                    </button>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors">
                        02
                    </button>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors">
                        03
                    </button>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F2D65B] hover:bg-[#E5C84F] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                    </button>
                </div>

            </div>
        </div>
    );
}