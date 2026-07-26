"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import PendingListingsTable from "@/components/admin/PendingListingsTable";
import { ShieldCheck, ListChecks, Users } from "lucide-react";
import UserManagementTable from "@/components/admin/UserManagementTable";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("approvals");

    return (
        <ProtectedRoute requiredRole="admin">
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck
                                size={32}
                                className="text-indigo-600"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Admin Dashboard
                                </h1>
                                <p className="text-gray-500">
                                    Manage marketplace approvals and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-6">
                    {/* Navigation Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            onClick={() => setActiveTab("approvals")}
                            className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === "approvals"
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <ListChecks size={18} />
                            <span>Pending Approvals</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("users")}
                            className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === "users"
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <Users size={18} />
                            <span>User Management (Coming Soon)</span>
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "approvals" ? (
                        <PendingListingsTable />
                    ) : <UserManagementTable />}
                </div>
            </div>
        </ProtectedRoute>
    );
}