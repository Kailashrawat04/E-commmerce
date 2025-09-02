import React from 'react'
import { useState, useEffect } from 'react';

const OrdersDashboard = () => {
  // Mock orders for testing
  const orders = [
    {
      _id: "12345",
      image: "https://via.placeholder.com/80", // sample product image
      createdAt: new Date().toISOString(),
      shippingAddress: { city: "New York", country: "US" },
      items: 2,
      price: 120,
      status: "Paid",
    },
    {
      _id: "67890",
      image: "https://via.placeholder.com/80",
      createdAt: new Date().toISOString(),
      shippingAddress: { city: "Delhi", country: "India" },
      items: 1,
      price: 75,
      status: "Pending",
    },
    {
      _id: "54321",
      image: "https://via.placeholder.com/80",
      createdAt: new Date().toISOString(),
      shippingAddress: { city: "London", country: "UK" },
      items: 3,
      price: 200,
      status: "Cancelled",
    },
  ];

  // Badge color logic
  const getStatusClasses = (status) => {
    switch (status) {
      case "Paid":
        return "text-green-700 bg-green-100 border border-green-200";
      case "Pending":
        return "text-yellow-700 bg-yellow-100 border border-yellow-200";
      case "Cancelled":
        return "text-red-700 bg-red-100 border border-red-200";
      default:
        return "text-gray-700 bg-gray-100 border border-gray-200";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Created</th>
              <th className="px-4 py-2 text-left">Shipping Address</th>
              <th className="px-4 py-2 text-center">Items</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">
                  <img
                    src={order.image}
                    alt="product"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 font-medium">#{order._id}</td>
                <td className="px-4 py-2">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </td>
                <td className="px-4 py-2 text-center">
                  {order.items || 0}
                </td>
                <td className="px-4 py-2 font-semibold">
                  ${order.price || 0}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`${getStatusClasses(
                      order.status
                    )} px-2 py-1 rounded-md inline-block font-medium`}
                  >
                    {order.status || "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersDashboard;