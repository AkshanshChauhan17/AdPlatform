"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/api/axiosInstance';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role_id: '3' // Default to Customer (3). Seller is 2.
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Hit the backend register endpoint
            await api.post('/auth/register', formData);
            setSuccess(true);
            
            // Redirect to login after 2 seconds so they can read the success message
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            
            {/* Background Decorative Element (Optional subtle touch) */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gray-900 rounded-b-[3rem] md:rounded-b-[5rem]"></div>

            <div className="w-full max-w-lg p-8 md:p-12 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative z-10">
                
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                        Create an Account
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                        Join the Media Marketplace today.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-[1rem] text-center">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-6 p-4 text-sm font-medium text-green-700 bg-green-50 border border-green-100 rounded-[1rem] text-center">
                        Account created successfully! Redirecting to login...
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Account Type Selection */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Account Type
                        </label>
                        <select 
                            name="role_id" 
                            value={formData.role_id}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                        >
                            <option value="3">Customer (I want to book ad spaces)</option>
                            <option value="2">Seller (I own ad spaces)</option>
                        </select>
                    </div>

                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors" 
                            placeholder="John Doe"
                            required 
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors" 
                            placeholder="you@example.com"
                            required 
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wide px-1">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border border-gray-300 rounded-[1rem] px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors" 
                            placeholder="••••••••"
                            minLength={6}
                            required 
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={loading || success}
                        className="mt-4 w-full bg-[#F2D65B] hover:bg-[#E5C84F] text-gray-900 text-sm font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating account...' : 'Register'} 
                        {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                </form>

                {/* Login Redirect */}
                <p className="text-center text-sm font-medium text-gray-500 mt-8">
                    Already have an account?{' '}
                    <Link href="/login" className="text-gray-900 font-bold hover:text-[#E5C84F] transition-colors">
                        Sign in here
                    </Link>
                </p>
                
            </div>
        </div>
    );
}