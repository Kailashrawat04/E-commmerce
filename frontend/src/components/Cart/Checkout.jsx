import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = {
  Products: [
    {
      name: "Classic Oxford Button-Down Shirt",
      size: "S",
      color: "Red",
      price: 39.99,
      Image: "http://picsum.photos/500/500?random=10",
    },
     {
      name: "Classic Shirt",
      size: "S",
      color: "blue",
      price: 40.99,
      Image: "http://picsum.photos/500/500?random=10",
    },
  ],
  totalPrice: 39.99,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId("1234");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-10 tracking-tight">
      {/* Left side: Shipping form */}
      <div>
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout} className="space-y-4">
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Payment</h3>
                {/* Payment gateway integration goes here */}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right side: Order Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        {/* Products */}
        <div className="space-y-4 border-b pb-4">
          {Cart.Products.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <img
                src={item.Image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  Size: {item.size}, Color: {item.color}
                </p>
              </div>
              <p className="font-semibold">€{item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between mt-4 text-gray-700">
          <span>Subtotal</span>
          <span>€{Cart.totalPrice.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between mt-2 text-gray-700">
          <span>Shipping</span>
          <span className="font-medium text-green-600">FREE</span>
        </div>

        {/* Total */}
        <div className="flex justify-between mt-4 font-bold text-lg border-t pt-4">
          <span>Total</span>
          <span>€{Cart.totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
