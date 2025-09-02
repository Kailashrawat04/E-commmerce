import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  // ✅ Cart state here
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      name: "T-shirt",
      size: "L",
      color: "Red",
      price: 100,
      quantity: 1,
      image: "http://picsum.photos/500/500?random=2",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "Blue",
      price: 200,
      quantity: 2,
      image:
        "https://imgs.search.brave.com/KINm7zAaPfQG5UbK70NZTODRB2WOjsjnl0H0o_oCL38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQxNTIyNDE2L3Iv/aWwvOGFmZDRkLzY1/ODYwMTI1NDEvaWxf/MzAweDMwMC42NTg2/MDEyNTQxX29qaGsu/anBn",
    },
  ]);

  // ✅ Quantity update
  const increaseQty = (id) => {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.productId === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.productId === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  // ✅ Delete product
  const removeItem = (id) => {
    setCartProducts((prev) => prev.filter((p) => p.productId !== id));
  };

  // ✅ Cart total
  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handelCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout", { state: { cartProducts, total } });
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition" />
        </button>
      </div>

      {/* Cart content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <CartContents
          cartProducts={cartProducts}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      </div>

      {/* Checkout */}
      <div className="p-4 bg-white border-t sticky bottom-0">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-lg font-semibold">${total.toLocaleString()}</span>
        </div>
        <button
          onClick={handelCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          disabled={cartProducts.length === 0}
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-600 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
