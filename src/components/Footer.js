"use client";

import Link from 'next/link';
import { Phone, Mail, Calendar } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white pt-8 pb-6 rounded-t-[2.5rem] md:rounded-t-[3rem]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Newsletter Section with U-Shaped Border */}
                <div className="max-w-5xl mx-auto border-x border-b border-gray-800 rounded-b-[3rem] md:rounded-b-[5rem] px-6 pb-16 pt-8 mb-20 text-center">
                    
                    <h2 className="text-4xl md:text-5xl font-light mb-4">
                        <strong className="font-bold">Subscribe</strong> Newsletter
                    </h2>
                    
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                        Business Consulting Services Can Range From Strategy Develo Financial Planning, 
                        Marketing, Human Resources Management
                    </p>

                    <form 
                        onSubmit={(e) => e.preventDefault()} 
                        className="relative max-w-lg mx-auto flex items-center bg-transparent border border-gray-700 rounded-full p-1.5 focus-within:border-gray-500 transition-colors"
                    >
                        <input 
                            type="email" 
                            placeholder="Your E-Mail" 
                            className="flex-1 bg-transparent border-none outline-none pl-6 pr-4 py-3 text-sm text-white placeholder-gray-500 w-full" 
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-[#F2D65B] hover:bg-[#E5C84F] text-black font-semibold text-sm px-8 py-3 rounded-full transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* 2. Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Column 1: Brand & Contact Info */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        
                        {/* Brand Logo */}
                        <div className="flex items-center gap-2 cursor-pointer">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F2D65B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="12" rx="2" />
                                <path d="M6 16v4" />
                                <path d="M18 16v4" />
                                <path d="M2 12h20" />
                                <circle cx="8" cy="8" r="1.5" fill="#F2D65B" />
                                <path d="M13 12l3-3 4 3" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">
                                BillBoard
                            </span>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4 text-[#F2D65B]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Phone Number</p>
                                    <p className="text-sm font-semibold">+91 9876543210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 text-[#F2D65B]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                                    <p className="text-sm font-semibold">abcd@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-8 h-8 rounded-md bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-md bg-[#F2D65B] flex items-center justify-center hover:bg-[#E5C84F] transition-colors">
                                <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-md bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-md bg-[#1A1A1A] flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 4.084 2.545 7.601 6.186 9.497-.083-.769-.158-1.954.033-2.796.173-.76 1.12-4.746 1.12-4.746s-.286-.573-.286-1.422c0-1.332.773-2.327 1.737-2.327.818 0 1.214.614 1.214 1.349 0 .823-.523 2.052-.794 3.195-.226.953.478 1.73 1.41 1.73 1.692 0 2.993-1.786 2.993-4.364 0-2.285-1.642-3.88-3.987-3.88-2.697 0-4.28 2.023-4.28 4.113 0 .822.317 1.706.713 2.185.078.094.089.178.066.27-.074.303-.239.972-.271 1.106-.043.176-.142.215-.325.13-1.213-.564-1.97-2.336-1.97-3.753 0-3.056 2.22-5.865 6.4-5.865 3.355 0 5.962 2.392 5.962 5.586 0 3.336-2.103 6.024-5.023 6.024-1.026 0-1.99-.533-2.32-1.164l-.634 2.414c-.23.874-.854 1.968-1.272 2.636 1.01.31 2.083.477 3.194.477 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: About Links */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h3 className="text-xl font-bold">About</h3>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Leadership</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Diversity</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Partners</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Esg</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Social Responsibility</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Investor Links */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h3 className="text-xl font-bold">Investor</h3>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Stock Info</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Financial</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Governance</Link></li>
                            <li><Link href="#" className="hover:text-[#F2D65B] transition-colors">Newsroom</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Recent News */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h3 className="text-xl font-bold">Recent News</h3>
                        
                        <div className="flex flex-col gap-6">
                            {/* News Item 1 */}
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-2 text-[#F2D65B] mb-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span className="text-xs font-semibold">Nov 10,2025</span>
                                </div>
                                <h4 className="text-sm font-semibold leading-relaxed group-hover:text-[#F2D65B] transition-colors">
                                    Where The Beat Meets Business
                                </h4>
                            </div>

                            {/* News Item 2 */}
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-2 text-[#F2D65B] mb-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span className="text-xs font-semibold">Nov 14,2025</span>
                                </div>
                                <h4 className="text-sm font-semibold leading-relaxed group-hover:text-[#F2D65B] transition-colors">
                                    Innovate Create Inspire Your To Life In
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3. Copyright Bar */}
                <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>© Yoursitename 2025 | All Rights Reserved</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}