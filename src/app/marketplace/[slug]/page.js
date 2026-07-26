"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import api from '@/api/axiosInstance';
import { MapPin, Tag, User, ArrowLeft, Image as ImageIcon, Heart, ArrowRight } from 'lucide-react';

export default function ListingDetails() {
    const { slug } = useParams();
    const router = useRouter();
    
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchListingDetails = async () => {
            try {
                // Fetch details using the slug from the URL
                const response = await api.get(`/search/${slug}`);
                setListing(response.data.data);
            } catch (err) {
                console.error('Failed to fetch listing details', err);
                setError('Listing not found or is no longer available.');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchListingDetails();
        }
    }, [slug]);

    // Helper to format the image URL from your backend
    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        // Adjust this if your backend serves static files differently
        return `http://localhost:5000/${imagePath}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center">
                <div className="animate-pulse text-xl font-medium text-gray-500 tracking-widest uppercase">
                    Loading Details...
                </div>
            </div>
        );
    }
    
    if (error) return (
        <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-[2rem] p-10 text-center shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{error}</h2>
                <button 
                    onClick={() => router.push('/marketplace')} 
                    className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                    Return to Marketplace
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
                
                {/* Back Button */}
                <button 
                    onClick={() => router.push('/marketplace')}
                    className="group flex items-center text-sm font-semibold tracking-wide text-gray-500 hover:text-gray-900 mb-8 transition-colors uppercase"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Marketplace
                </button>

                {/* Main Content Card */}
                <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        
                        {/* Left Column: Image Gallery */}
                        <div className="relative bg-gray-100 w-full min-h-[350px] md:min-h-[500px] lg:h-full border-b lg:border-b-0 lg:border-r border-gray-100">
                            {listing.images && listing.images.length > 0 ? (
                                <img 
                                    src={getImageUrl(listing.images[0])} 
                                    alt={listing.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                                    <ImageIcon className="w-16 h-16 mb-3 opacity-50" />
                                    <span className="font-medium">No Images Provided</span>
                                </div>
                            )}
                            
                            {/* Floating Category Pill */}
                            <div className="absolute top-6 left-6 bg-[#F2D65B] rounded-full px-5 py-2 shadow-md">
                                <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                                    {listing.category_name}
                                </span>
                            </div>
                        </div>

                        {/* Right Column: Details & Actions */}
                        <div className="p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mb-6">
                                    <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
                                        <Tag className="w-4 h-4 mr-2 text-[#F2D65B]" />
                                        {listing.media_type}
                                    </div>
                                    <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
                                        <MapPin className="w-4 h-4 mr-2 text-[#F2D65B]" />
                                        {listing.city_name}
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {listing.title}
                                </h1>

                                {/* Owner Info */}
                                <div className="flex items-center text-gray-700 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4 shrink-0">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Listed By</p>
                                        <p className="font-bold text-gray-900">{listing.company_name || listing.seller_name}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-10">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">About this space</h3>
                                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                                        {listing.description}
                                    </p>
                                </div>
                            </div>

                            {/* Pricing & Booking Area */}
                            <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-[2rem] border border-gray-200 mt-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Price</p>
                                        <span className="text-4xl font-extrabold text-gray-900">
                                            ${Number(listing.price).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={() => alert('Booking feature coming next!')}
                                        className="flex-1 bg-[#1A1A1A] text-white py-4 px-6 rounded-full font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        Book This Space
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={() => alert('Added to favorites!')}
                                        className="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Heart className="w-5 h-5 text-gray-400" /> Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}