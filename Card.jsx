import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CarsSection = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get('http://localhost:2271/api/cars');

        // Transform backend data to match the frontend structure
        const transformedCars = response.data.map(car => ({
          id: car._id,
          title: car.model,
          price: `Rp ${car.rentalPrice.toLocaleString('id-ID')} / HARI`, // Format price with locale
          oldPrice: `Rp ${(car.rentalPrice * 1.1).toLocaleString('id-ID')} / HARI`, // 10% higher for old price
          image: car.imageUrl || '/placeholder-car.jpg', // Fallback image if none provided
          description: car.description || 'No description available.', // Fallback description
          isAvailable: car.isAvailable,
          plateNumber: car.plateNumber,
          year: car.year,
        }));

        // Update state with the transformed data
        setCars(transformedCars);
        setLoading(false);
      } catch (err) {
        // Handle errors during data fetching
        setError('Failed to fetch cars. Please try again later.');
        setLoading(false);
        console.error('Error fetching cars:', err);
      }
    };

    fetchCars();
  }, []);

  const Card = ({
    id,
    title,
    price,
    oldPrice,
    image,
    isAvailable,
    description,
    plateNumber,
    year,
  }) => {
    const handleClick = () => {
      navigate('/rent-car', {
        state: {
          carDetails: {
            id,
            title,
            price,
            oldPrice,
            image,
            description,
            plateNumber,
            year,
            isAvailable,
          },
        },
      });
    };

    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
            Promo Terbatas
          </div>
          {!isAvailable && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Tidak Tersedia</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">Tahun: {year}</p>
          <p className="text-gray-600 text-sm">Plat: {plateNumber}</p>
          <p className="text-gray-600 text-sm">Harga Sewa:</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through">{oldPrice}</span>
            <span className="text-green-600 font-semibold">{price}</span>
          </div>
          {description && (
            <p className="text-gray-600 text-sm mt-2">{description}</p>
          )}
          <button
            onClick={handleClick}
            disabled={!isAvailable}
            className={`mt-4 w-full py-2 rounded-lg transition ${isAvailable
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {isAvailable ? 'Pesan Sekarang' : 'Tidak Tersedia'}
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div id="cars-section" className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        HARGA SEWA MOTOR
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {cars.map((car) => (
          <Card
            key={car.id}
            {...car} // Menyebarkan semua properti termasuk stock
          />
        ))}
      </div>
    </div>
  );
};

export default CarsSection;