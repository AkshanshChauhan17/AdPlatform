"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, ArrowRight, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation items based on your design
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Register', href: '/register' },
    ];

    return (
        <header className="w-full bg-white relative z-50">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        {/* Custom Billboard SVG matching your design */}
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                            <rect x="2" y="4" width="20" height="12" rx="2" />
                            <path d="M6 16v4" />
                            <path d="M18 16v4" />
                            <path d="M2 12h20" />
                            <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                            <path d="M13 12l3-3 4 3" />
                        </svg>
                        <span className="text-xl font-extrabold text-black tracking-tight">
                            BillBoard
                        </span>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-black transition-colors"
                            >
                                {item.name}
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions (Desktop & Mobile) */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Hamburger icon shown on desktop in design, and acts as mobile menu toggle on small screens */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black hover:text-gray-600 transition-colors p-1"
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>

                        <Link 
                            href="/contact" 
                            className="hidden sm:flex items-center gap-2 bg-[#F2D65B] hover:bg-[#E5C84F] text-black text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50 hover:bg-gray-50"
                            >
                                {item.name}
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </Link>
                        ))}
                        
                        {/* Mobile Contact Button (Shows only on very small screens where the top button hides) */}
                        <div className="pt-6 pb-2 px-3 sm:hidden">
                            <Link 
                                href="/contact" 
                                className="flex w-full items-center justify-center gap-2 bg-[#F2D65B] text-black text-base font-semibold px-6 py-3 rounded-full"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}