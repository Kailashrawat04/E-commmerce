import React from 'react';
import { Link } from 'react-router-dom';

// Reusable StatCard Component
const StatCard = ({ title, value, link, linkText }) => (
  <div className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
    {link && (
      <Link to={link} className="text-blue-500 text-sm mt-2 hover:underline">
        {linkText}
      </Link>
    )}
  </div>
);

const AdminHomePage = () => {
  const stats = {
    revenue: 319.94,
    totalOrders: 4,
    totalProducts: 40,
  };

  const recentOrders = [
    { id: '67540ced3376121b361a0ed0', user: 'Admin User', price: 199.96, status: 'Delivered' },
    { id: '67540d3ca67b4a70e434e092', user: 'Admin User', price: 40, status: 'Processing' },
    { id: '675bf2c6a77bd83eefd7a18', user: 'Admin User', price: 39.99, status: 'Processing' },
    { id: '675c24b09b8827304bd5cc1', user: 'Admin User', price: 39.99, status: 'Processing' },
  ];

  const statusColors = {
    Delivered: 'text-green-600',
    Processing: 'text-yellow-500',
    Cancelled: 'text-red-500',
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Revenue" value={`$${stats.revenue}`} />
        <StatCard title="Total Orders" value={stats.totalOrders} link="/admin/orders" linkText="Manage Orders" />
        <StatCard title="Total Products" value={stats.totalProducts} link="/admin/products" linkText="Manage Products" />
      </div>

      {/* Recent Orders */}
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">ORDER ID</th>
              <th className="px-4 py-2">USER</th>
              <th className="px-4 py-2">TOTAL PRICE</th>
              <th className="px-4 py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.user}</td>
                <td className="px-4 py-2">${order.price}</td>
                <td className={`px-4 py-2 font-semibold ${statusColors[order.status] || 'text-gray-700'}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomePage;
