import React, { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: "67540ced337612b361a0ed0", customer: "Admin User", total: 199.96, status: "Delivered" },
    { id: "67540d3ac67b4a70e434e092", customer: "Admin User", total: 40, status: "Processing" },
    { id: "675bf2c6aa77bd83aefd7a18", customer: "Admin User", total: 39.99, status: "Processing" },
    { id: "675c24b09b88827304bd5cc1", customer: "Admin User", total: 39.99, status: "Processing" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const markAsDelivered = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Delivered" } : order
      )
    );
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow max-w-5xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 font-medium">ORDER ID</th>
              <th className="px-4 py-2 font-medium">CUSTOMER</th>
              <th className="px-4 py-2 font-medium">TOTAL PRICE</th>
              <th className="px-4 py-2 font-medium">STATUS</th>
              <th className="px-4 py-2 font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">#{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="border rounded-md px-2 py-1"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => markAsDelivered(order.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Mark as Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
