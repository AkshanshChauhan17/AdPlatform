"use client";

import { useEffect, useState } from 'react';
import api from '@/api/axiosInstance';
import { MapPin, Tag, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Marketplace() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await api.get('/search');
                setListings(response.data.data.listings);
            } catch (err) {
                console.error('Failed to fetch listings', err);
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    // Helper to format the image URL or use a fallback
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        return `http://51.20.185.216:3000/${imagePath}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center">
                <div className="animate-pulse text-xl font-medium text-gray-500 tracking-widest uppercase">
                    Loading Spaces...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section matching the landing page typography */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-700 uppercase mb-4">
                        Marketplace
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-[1.2]">
                        Browse Available <br className="hidden md:block" /> Ad Spaces
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {listings.map(listing => (
                        <div 
                            key={listing.id} 
                            className="flex flex-col bg-white border border-gray-200/80 rounded-[1.5rem] overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Card Image Area */}
                            <div className="relative w-full h-[240px] bg-gray-100 overflow-hidden">
                                {listing.images && listing.images.length > 0 ? (
                                    <img 
                                        src={getImageUrl(listing.images[0])} 
                                        alt={listing.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                                        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                                        <span className="text-sm font-medium">No Image</span>
                                    </div>
                                )}
                                
                                {/* Yellow Category Pill */}
                                <div className="absolute top-4 left-4 bg-[#F2D65B] rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-gray-900 z-10">
                                    {listing.category_name}
                                </div>
                            </div>

                            {/* Card Content Area */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4 truncate">
                                    {listing.title}
                               </h3>
                                
                                <div className="flex flex-col gap-3 mb-8">
                                    <div className="flex items-center text-sm text-gray-500 font-medium">
                                        <Tag className="w-4 h-4 mr-3 text-[#F2D65B]" />
                                        {listing.media_type}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 font-medium">
                                        <MapPin className="w-4 h-4 mr-3 text-[#F2D65B]" />
                                        {listing.city_name}
                                    </div>
                                </div>

                                {/* Card Footer (Price & CTA) */}
                                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Price</span>
                                        <span className="text-2xl font-bold text-gray-900">
                                            ${Number(listing.price).toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    <button
                                        onClick={() => router.push(`/marketplace/${listing.slug}`)}
                                        className="bg-gray-900 hover:bg-black text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
                                    >
                                        Details <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State Fallback */}
                {!loading && listings.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-300 mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No listings found</h3>
                        <p className="text-gray-500">Check back later for new advertising spaces.</p>
                    </div>
                )}
                
            </div>
        </div>
    );
}