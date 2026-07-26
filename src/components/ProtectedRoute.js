"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login');
            } else if (allowedRoles && !allowedRoles.includes(user.role_name)) {
                router.push('/marketplace');
            }
        }
    }, [user, loading, router, allowedRoles]);

    if (loading || !user) return <div className="p-10 text-center">Loading protected content...</div>;

    return children;
}