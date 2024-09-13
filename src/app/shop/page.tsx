/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Update the products state with fetched data
      } catch (err:any) {
        setError(err.message); // Capture the error
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    }

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <div className="p-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <h1 className="text-6xl font-bold text-white text-center mb-8">Our Products</h1>

      {loading && <p className="text-white text-center text-2xl">Loading products...</p>}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product : any) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">
                {product.description.substring(0, 100)}...
              </p>
              <p className="font-bold text-lg text-green-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="text-center">No products found</p>
      )}
    </div>
  );
}
