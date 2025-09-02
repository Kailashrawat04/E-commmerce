import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = ({ cartProducts, increaseQty, decreaseQty, removeItem }) => {
  return (
    <div>
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQty(product.productId)}
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  onClick={() => increaseQty(product.productId)}
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">
              ${(product.price * product.quantity).toLocaleString()}
            </p>
            <button onClick={() => removeItem(product.productId)}>
              <RiDeleteBin3Line
                className="text-red-500 hover:text-red-700 mt-2"
                size={20}
              />
            </button>
          </div>
        </div>
      ))}

      {cartProducts.length === 0 && (
        <p className="text-center text-gray-500 py-8">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartContents;
