import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://mataa-backend.onrender.com/products/${id}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.success && data.product) {
          setProduct(data.product);
        } else {
          throw new Error("Product not found");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!product) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-[#99edc3] text-center mb-6">{product.name}</h2>

      <div className="bg-black p-6 rounded-lg shadow-lg text-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-contain mb-4 mx-auto"
          onError={(e) => (e.target.src = "/placeholder.jpg")}
        />
        <p className="text-gray-400">Make: {product.make}</p>
        <p className="text-gray-400">Model: {product.model}</p>
        <p className="text-gray-400">Description: {product.description}</p>
        <p className="text-[#99edc3] font-bold">Ksh {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
