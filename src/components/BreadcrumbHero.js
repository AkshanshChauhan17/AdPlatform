"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbHero({ 
    heading = "Page Title", 
    breadcrumbs = [], 
    bgImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
}) {
    return (
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="w-full mx-auto">
                
                {/* Banner Container */}
                <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[250px] md:min-h-[300px] flex items-center bg-gray-900 shadow-md">
                    
                    {/* Background Image */}
                    <img 
                        src={bgImage} 
                        alt={heading} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Gradient Overlay (Heavier on the left for text readability) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 flex flex-col items-start">
                        
                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
                            {heading}
                        </h1>
                        
                        {/* Breadcrumbs Navigation */}
                        <nav className="flex items-center text-sm md:text-base font-medium">
                            {breadcrumbs.map((crumb, index) => (
                                <div key={index} className="flex items-center">
                                    
                                    {/* Breadcrumb Link or Static Text */}
                                    {crumb.href ? (
                                        <Link 
                                            href={crumb.href} 
                                            className="text-white hover:text-gray-300 transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-white">
                                            {crumb.label}
                                        </span>
                                    )}

                                    {/* Separator Icon (Yellow Chevron) */}
                                    {index < breadcrumbs.length - 1 && (
                                        <ChevronRight className="w-4 h-4 mx-3 text-[#F2D65B]" strokeWidth={3} />
                                    )}
                                </div>
                            ))}
                        </nav>

                    </div>
                </div>

            </div>
        </section>
    );
}