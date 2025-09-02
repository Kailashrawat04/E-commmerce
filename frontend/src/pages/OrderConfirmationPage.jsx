import React from 'react';
import { Link } from 'react-router-dom';

const checkout = {
  _id: "12233",
  createdAt: new Date(),
  CheckoutItems: [
    {
      name: "Classic Oxford Button-Down Shirt",
      size: "S",
      color: "Red",
      price: 39.99,
      quantity: 1,
      Image: "http://picsum.photos/500/500?random=10",
    },
    {
      name: "Denim Jeans",
      size: "L",
      color: "Blue",
      price: 59.99,
      quantity: 2,
      Image: "http://picsum.photos/500/500?random=11",
    },
  ],
  ShippingAddress: {
    address: "123445 ddd",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    postalCode: "411001"
  },
};

// Utility to calculate expected delivery date (5 days from order date)
const getExpectedDeliveryDate = (date, days = 5) => {
  const deliveryDate = new Date(date);
  deliveryDate.setDate(deliveryDate.getDate() + days);
  return deliveryDate.toLocaleDateString();
};

const OrderConfirmationPage = () => {
  const totalAmount = checkout.CheckoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const expectedDelivery = getExpectedDeliveryDate(checkout.createdAt);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border space-y-6">
          {/* Order Info */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: <span className="font-normal">{checkout._id}</span>
              </h2>
              <p className="text-gray-600">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
              <p className="text-green-700 font-medium">
                Expected Delivery: {expectedDelivery}
              </p>
            </div>
          </div>

          {/* Items List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Items</h3>
            <div className="space-y-4">
              {checkout.CheckoutItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border p-4 rounded-lg"
                >
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <p className="text-gray-700">
              {checkout.ShippingAddress.address}, {checkout.ShippingAddress.city}, {checkout.ShippingAddress.state}, {checkout.ShippingAddress.postalCode}, {checkout.ShippingAddress.country}
            </p>
          </div>

          {/* Total Amount */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold">
              Total Amount: <span className="text-emerald-700">₹{totalAmount.toFixed(2)}</span>
            </h3>
          </div>

          {/* Continue Shopping Button */}
          <div className="text-center pt-4">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
