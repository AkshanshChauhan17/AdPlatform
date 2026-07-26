"use client";

import { Calendar, User, MessageSquare, ArrowRight } from 'lucide-react';

export default function BlogSection() {
    const blogs = [
        {
            id: 1,
            title: "Innovate Create Inspire Your Brand To Life In",
            author: "Mesbah",
            comments: "05",
            date: "May 19, 2023",
            // Subway/underground space placeholder
            image: "/blog1.png"
        },
        {
            id: 2,
            title: "Services Does Your Billboard Company Offer",
            author: "Mesbah",
            comments: "05",
            date: "May 19, 2023",
            // Billboard poster placeholder
            image: "/blog2.png"
        },
        {
            id: 3,
            title: "Types Of Billboards Do You Have Available",
            author: "Mesbah",
            comments: "05",
            date: "May 19, 2023",
            // Digital display placeholder
            image: "/blog3.png"
        }
    ];

    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-700 uppercase mb-4">
                        Latest Blog
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-[1.2]">
                        Where The Beat Meets <br className="hidden md:block" /> Business Billboard
                    </h2>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="flex bg-white flex-col border border-gray-200/80 rounded-[1.5rem] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Container with Absolute Date Pill */}
                            <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Yellow Date Pill */}
                                <div className="absolute top-4 left-4 bg-[#F2D65B] rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                                    <Calendar className="w-3.5 h-3.5 text-gray-900" />
                                    <span className="text-xs font-semibold text-gray-900">{blog.date}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                
                                {/* Meta Info (Author & Comments) */}
                                <div className="flex items-center gap-6 mb-4 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm font-medium">{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        <span className="text-sm font-medium">Comments ({blog.comments})</span>
                                    </div>
                                </div>

                                {/* Blog Title */}
                                <h4 className="text-xl font-bold text-gray-900 leading-snug mb-6 flex-grow">
                                    {blog.title}
                                </h4>

                                {/* Read More Button */}
                                <div>
                                    <button className="bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
                                        Read More <ArrowRight className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}