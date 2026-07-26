"use client";

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            const user = await login(email, password);
            if (user.role_name === 'Super Admin') router.push('/admin');
            else if (user.role_name === 'Seller') router.push('/seller');
            else router.push('/marketplace');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gray-900 rounded-b-[3rem] md:rounded-b-[5rem]"></div>

            <div className="w-full max-w-lg p-8 md:p-12 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                        Welcome Back
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                        Sign in to your account to continue.
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-[1rem] text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    
                    {/* Password Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="mt-4 w-full bg-[#F2D65B] hover:bg-[#E5C84F] text-gray-900 text-sm font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Signing in...' : 'Sign In'} 
                        {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                </form>

                {/* Register Redirect */}
                <p className="text-center text-sm font-medium text-gray-500 mt-8">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-gray-900 font-bold hover:text-[#E5C84F] transition-colors">
                        Create one now
                    </Link>
                </p>
                
            </div>
        </div>
    );
}