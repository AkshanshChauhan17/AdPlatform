"use client";

import { useState, useRef } from 'react';
import api from '@/api/axiosInstance';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export default function CreateListingForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        category_id: '1', // 1 = Outdoor Billboards
        city_id: '1',     // ADDED THIS - 1 = New York (from our DB seed)
        location_id: '',
        price: '',
        media_type: 'Outdoor Billboards'
    });

    const [files, setFiles] = useState({ images: [] });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFiles({ images: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            // Construct FormData for multipart/form-data upload
            const payload = new FormData();
            Object.keys(formData).forEach(key => payload.append(key, formData[key]));

            // Append up to 5 images as defined in backend Multer config
            for (let i = 0; i < files.images.length; i++) {
                payload.append('images', files.images[i]);
            }

            await api.post('/listings', payload, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setSuccess(true);
            formRef.current.reset();
            setFormData({ ...formData, title: '', slug: '', description: '', price: '' });
            setFiles({ images: [] });
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create listing.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Listing Submitted!</h3>
                <p className="text-gray-500 mt-2">Your ad space is now pending admin approval.</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Submit Another Listing
                </button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            {error && <div className="p-3 text-sm text-red-600 bg-red-100 rounded">{error}</div>}

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Listing Title</label>
                    <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">URL Slug</label>
                    <input type="text" name="slug" required value={formData.slug} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded focus:ring-blue-500" placeholder="e.g. times-square-billboard" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Media Type</label>
                    <select name="media_type" value={formData.media_type} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded focus:ring-blue-500">
                        <option value="Outdoor Billboards">Outdoor Billboards</option>
                        <option value="Newspaper Ads">Newspaper Ads</option>
                        <option value="Radio Ads">Radio Ads</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
                    <input type="number" step="0.01" name="price" required value={formData.price} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded focus:ring-blue-500" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" rows="4" required value={formData.description} onChange={handleInputChange} className="mt-1 w-full p-2 border rounded focus:ring-blue-500"></textarea>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
                <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Upload High-Quality Images (Max 5)</p>
                <input type="file" name="images" multiple accept="image/*" onChange={handleFileChange} className="mt-4 text-sm" required />
            </div>

            <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded shadow hover:bg-gray-800 disabled:opacity-50">
                {loading ? 'Uploading...' : 'Submit Listing for Approval'}
            </button>
        </form>
    );
}