import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Mock order details (replace with API call in real app)
    const mockOrderDetails = {
      id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA"
      },
      orderItems: [
        {
          productId: "prod123",
          name: "Classic Oxford Button-Down Shirt",
          price: 39.99,
          quantity: 1,
          image: "http://picsum.photos/500/500?random=10",
        },
        {
          productId: "prod456",
          name: "Slim-Fit Easy-Iron Shirt",
          price: 34.99,
          quantity: 1,
          image: "http://picsum.photos/500/500?random=20",
        },
        {
          productId: "prod789",
          name: "Chino Pants",
          price: 55,
          quantity: 1,
          image: "http://picsum.photos/500/500?random=1",
        },
      ],
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  if (!orderDetails) {
    return <div className="text-center text-gray-600 p-6">Loading order details...</div>;
  }

  const totalAmount = orderDetails.orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        Order Details
      </h1>

      {/* Order Info */}
      <div className="mb-4">
        <p><strong>Order ID:</strong> #{orderDetails.id}</p>
        <p><strong>Date:</strong> {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Status Badges */}
      <div className="flex gap-2 mb-6">
        {orderDetails.isPaid && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
            Approved
          </span>
        )}
        {!orderDetails.isDelivered && (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
            Pending Delivery
          </span>
        )}
      </div>

      {/* Payment & Shipping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="font-semibold mb-2">Payment Info</h2>
          <p><strong>Method:</strong> {orderDetails.paymentMethod}</p>
          <p><strong>Status:</strong> {orderDetails.isPaid ? "Paid" : "Not Paid"}</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Shipping Info</h2>
          <p><strong>Method:</strong> {orderDetails.shippingMethod}</p>
          <p><strong>Address:</strong> {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
        </div>
      </div>

      {/* Items Table */}
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="p-2">Unit Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.orderItems.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="flex items-center gap-3 p-2">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded" />
                <span>{item.name}</span>
              </td>
              <td className="p-2">${item.price.toFixed(2)}</td>
              <td className="p-2 text-center">{item.quantity}</td>
              <td className="p-2 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="border-t mt-4 pt-4 text-lg font-bold">
        Total Amount: <span className="text-emerald-700">${totalAmount.toFixed(2)}</span>
      </div>

      {/* Back Link */}
      <div className="mt-4">
        <Link to="/my-orders" className="text-blue-600 hover:underline">
          Back to My Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
