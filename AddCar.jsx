import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar'; // Pastikan path ini sesuai dengan lokasi komponen Navbar Anda
import Footer from '@/components/Footer'; // Pastikan path ini sesuai dengan lokasi komponen Footer Anda

const AddCar = () => {
    const [formData, setFormData] = useState({
        model: '',
        year: '',
        plateNumber: '',
        rentalPrice: '',
        isAvailable: true,
        imageUrl: '',
        description: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:2271/api/cars', formData);
          setMessage('Car added successfully!');
          setFormData({
            model: '',
            year: '',
            plateNumber: '',
            rentalPrice: '',
            isAvailable: true,
            imageUrl: '',
            description: '',
          });
        } catch (error) {
          setMessage(`Error: ${error.response ? error.response.data.message : 'Something went wrong'}`);
        }
      };
      

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow">
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Motor</h2>
                    {message && (
                        <div
                            className={`p-3 mb-4 rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Model:</label>
                            <input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Year:</label>
                            <input
                                type="number"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Plate Number:</label>
                            <input
                                type="text"
                                name="plateNumber"
                                value={formData.plateNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Rental Price (per day):</label>
                            <input
                                type="number"
                                name="rentalPrice"
                                value={formData.rentalPrice}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Availability:</label>
                            <select
                                name="isAvailable"
                                value={formData.isAvailable}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                <option value={true}>Available</option>
                                <option value={false}>Not Available</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Image URL:</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                placeholder="Masukkan URL gambar"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            Add Motor
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AddCar;
