import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products && products.map((product, index) => (
        <Link key={index} to={`/product/${product.id}`} className="block">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between h-full">
            
            {/* Product Image */}
            <div className="w-full h-80 mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image || product.images?.[0]?.url}
                alt={product.name || product.images?.[0]?.alttext || 'Product Image'}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-grow items-center text-center">
              <h3 className="font-medium text-gray-800 text-base line-clamp-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm my-2">
                ${product.price?.toFixed(2) || 'N/A'}
              </p>

              <button
                aria-label={`View details for ${product.name}`}
                className="w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition mt-auto"
              >
                View Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
