"use client";

import Link from 'next/link';

export default function ProjectGallery() {
    return (
        <div className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 4-Column Grid for Custom Proportions */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    
                    {/* Top Row */}
                    
                    {/* Top Left - Wider Image (Spans 2 cols) */}
                    <Link href="/projects/exposure-express" className="md:col-span-2 w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] block cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop" 
                            alt="Project Image 1" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </Link>
                    
                    {/* Top Middle - Square Image (Spans 1 col) */}
                    <Link href="/projects/prime-billboard" className="md:col-span-1 w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] block cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1555598687-3914a4fc937f?q=80&w=600&auto=format&fit=crop" 
                            alt="Project Image 2" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </Link>
                    
                    {/* Top Right - Square Image (Spans 1 col) */}
                    <Link href="/projects/billboard-advantage" className="md:col-span-1 w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] block cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1616858908819-21b96d98c6d3?q=80&w=600&auto=format&fit=crop" 
                            alt="Project Image 3" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </Link>

                    {/* Bottom Row */}
                    
                    {/* Bottom Left - Very Wide Image (Spans 3 cols) */}
                    <Link href="/projects/transform-billboard" className="md:col-span-3 relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] group block cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1559253664-ca2cfb9c2b41?q=80&w=1400&auto=format&fit=crop" 
                            alt="Transform Billboard" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        
                        {/* Yellow Overlay Card */}
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-[#F2D65B] rounded-[1.2rem] p-6 md:px-8 md:py-6 shadow-lg border border-black/5 transition-transform group-hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-semibold text-gray-900">Transform Billboard</span>
                                <span className="w-12 h-[1px] bg-gray-900"></span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900">
                                Outdoor The Most Advertising
                            </h4>
                        </div>
                    </Link>
                    
                    {/* Bottom Right - Vertical Image (Spans 1 col) */}
                    <Link href="/projects/high-impact-ads" className="md:col-span-1 w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] block cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=600&auto=format&fit=crop" 
                            alt="Project Image 5" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </Link>

                </div>
            </div>
        </div>
    );
}