import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("API error", err));
  }, [id]);

  if (!product) {
    return <div className="text-center text-lg font-medium mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-2xl w-full transition transform hover:shadow-2xl hover:scale-[1.01] duration-500 ease-in-out">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-75 object-contain bg-gray-50 p-4"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
