"use client";

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import CreateListingForm from '@/components/seller/CreateListingForm';
import BookingRequestsTable from '@/components/seller/BookingRequestsTable';
import { LayoutDashboard, PlusCircle, CalendarCheck } from 'lucide-react';

export default function SellerDashboard() {
    const [activeTab, setActiveTab] = useState('bookings');

    return (
        <ProtectedRoute allowedRoles={['Seller', 'Super Admin']}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center space-x-3 mb-8">
                    <LayoutDashboard className="w-8 h-8 text-blue-600" />
                    <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-4 border-b mb-6">
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                            activeTab === 'bookings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <CalendarCheck className="w-4 h-4" />
                        <span>Booking Requests</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('create')}
                        className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                            activeTab === 'create' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <PlusCircle className="w-4 h-4" />
                        <span>Create New Listing</span>
                    </button>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-lg shadow border p-6">
                    {activeTab === 'bookings' ? <BookingRequestsTable /> : <CreateListingForm />}
                </div>
            </div>
        </ProtectedRoute>
    );
}