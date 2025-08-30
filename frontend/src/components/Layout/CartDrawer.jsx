import { useState } from "react";

const CartDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleCartDrawer}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        {drawerOpen ? "Close Cart" : "Open Cart"}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-40 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={toggleCartDrawer} className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 flex-grow overflow-y-auto">
          <p>Your cart is currently empty.</p>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t">
          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
