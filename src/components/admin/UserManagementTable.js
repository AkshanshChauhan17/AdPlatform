"use client";

import { useEffect, useState } from "react";
import api from "@/api/axiosInstance";
import { User, Filter } from "lucide-react";

export default function UserManagementTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roleFilter, setRoleFilter] = useState("");
    const [error, setError] = useState("");
    const [updatingUser, setUpdatingUser] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        fetchUsers();
    }, [roleFilter]);

    const updateUserRole = async (userId, role) => {
        if (!window.confirm(`Change this user's role to "${role}"?`)) {
            return;
        }

        setUpdatingUser(userId);

        try {
            await api.patch(`/admin/users/${userId}/role`, {
                role,
            });

            setUsers((prev) =>
                prev.map((user) =>
                    user.id === userId
                        ? {
                            ...user,
                            role_name: role,
                        }
                        : user
                )
            );
        } catch (err) {
            console.error(err);
            alert(
                err.response?.data?.message ||
                "Failed to update user role."
            );
        } finally {
            setUpdatingUser(null);
        }
    };

    const fetchUsers = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/users", {
                params: {
                    role: roleFilter || undefined,
                    limit: 50,
                },
            });

            setUsers(response.data.data || []);
        } catch (err) {
            console.error("Failed to fetch users:", err);
            setError("Failed to load user data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                    Registered Users
                </h2>

                <div className="mt-4 md:mt-0 flex items-center gap-2">
                    <Filter size={18} className="text-gray-500" />

                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    >
                        <option value="">All Roles</option>
                        <option value="customer">Customers</option>
                        <option value="seller">Sellers</option>
                        <option value="team">Team Members</option>
                    </select>
                </div>
            </div>

            {error && (
                <div className="p-4 text-red-600 bg-red-50 border-b">
                    {error}
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                ID
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                User Details
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Role
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Joined Date
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    Loading users...
                                </td>
                            </tr>
                        ) : users.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No users found matching this criteria.
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        #{user.id}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100">
                                                <User
                                                    size={18}
                                                    className="text-indigo-600"
                                                />
                                            </div>

                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </div>

                                                <div className="text-sm text-gray-500">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={user.role_name}
                                                disabled={updatingUser === user.id}
                                                onChange={(e) =>
                                                    setUsers((prev) =>
                                                        prev.map((u) =>
                                                            u.id === user.id
                                                                ? {
                                                                    ...u,
                                                                    role_name: e.target.value,
                                                                }
                                                                : u
                                                        )
                                                    )
                                                }
                                                className="border rounded-md px-2 py-1 text-sm"
                                            >
                                                <option value="customer">Customer</option>
                                                <option value="seller">Seller</option>
                                                <option value="team">Team Member</option>
                                                <option value="admin">Admin</option>
                                            </select>

                                            <button
                                                disabled={updatingUser === user.id}
                                                onClick={() =>
                                                    updateUserRole(user.id, user.role_name)
                                                }
                                                className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 disabled:opacity-50"
                                            >
                                                {updatingUser === user.id ? "Saving..." : "Save"}
                                            </button>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(
                                            user.created_at
                                        ).toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}