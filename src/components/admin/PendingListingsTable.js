"use client";

import { useEffect, useState } from "react";
import api from "@/api/axiosInstance";
import { CheckCircle, XCircle } from "lucide-react";

export default function PendingListingsTable() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        fetchPendingListings();
    }, []);

    const fetchPendingListings = async () => {
        try {
            const response = await api.get("/admin/listings/pending");
            setListings(response.data.data || []);
        } catch (error) {
            console.error("Failed to fetch pending listings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (listingId, newStatus) => {
        let reason = "";

        if (newStatus === "rejected") {
            reason = window.prompt(
                "Please provide a reason for rejection (this will be sent to the seller):"
            );

            if (reason === null) return;
        }

        setActionLoading(listingId);

        try {
            await api.patch(`/admin/listings/${listingId}/status`, {
                status: newStatus,
                reason,
            });

            setListings((prev) =>
                prev.filter((listing) => listing.id !== listingId)
            );
        } catch (error) {
            alert(
                error.response?.data?.message ||
                    `Failed to ${newStatus} listing.`
            );
        } finally {
            setActionLoading(null);
        }
    };

    if (loading) {
        return (
            <div className="p-8 text-center text-gray-500">
                Loading pending requests...
            </div>
        );
    }

    if (listings.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-8 text-center">
                <CheckCircle
                    size={48}
                    className="mx-auto text-green-500 mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                    All caught up!
                </h2>
                <p className="mt-2 text-gray-500">
                    There are no pending listings awaiting approval.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            ID
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Listing Title
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Seller Name
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Category &amp; Type
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Price
                        </th>

                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {listings.map((listing) => (
                        <tr key={listing.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                #{listing.id}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-900">
                                {listing.title}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                {listing.seller_name}
                            </td>

                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">
                                    {listing.category_name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {listing.media_type}
                                </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                ₹{Number(listing.price).toLocaleString()}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() =>
                                            handleStatusUpdate(
                                                listing.id,
                                                "approved"
                                            )
                                        }
                                        disabled={
                                            actionLoading === listing.id
                                        }
                                        className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded border border-green-200 hover:bg-green-100 transition-colors disabled:opacity-50 font-medium text-sm"
                                    >
                                        <CheckCircle
                                            size={16}
                                            className="mr-1"
                                        />
                                        Approve
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleStatusUpdate(
                                                listing.id,
                                                "rejected"
                                            )
                                        }
                                        disabled={
                                            actionLoading === listing.id
                                        }
                                        className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-700 rounded border border-red-200 hover:bg-red-100 transition-colors disabled:opacity-50 font-medium text-sm"
                                    >
                                        <XCircle
                                            size={16}
                                            className="mr-1"
                                        />
                                        Reject
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}