import React from "react";
import white1 from '../../assets/white1.jpg';

const ProductGrid = () => {
  const recommendedProducts = [
    {
      id: 2,
      name: "Casual Cotton Shirt",
      price: 29.99,
      image: white1,
    },
    {
      id: 3,
      name: "Slim Fit Formal Shirt",
      price: 39.99,
      image: white1,
    },
    {
      id: 4,
      name: "Classic Blue Denim Shirt",
      price: 44.99,
      image: white1,
    },
    {
      id: 5,
      name: "Linen Summer Shirt",
      price: 32.99,
      image: white1,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-6 text-center">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl p-3 shadow-sm hover:shadow-md transition flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 font-medium text-gray-800 text-sm text-center">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">${product.price}</p>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
