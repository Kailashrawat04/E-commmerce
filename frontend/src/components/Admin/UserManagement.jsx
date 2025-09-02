import React, { useState } from 'react';
import { toast } from 'sonner';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: 'Admin User', email: 'admin@example.com', role: 'Admin' }
  ]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Customer'
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    const { name, email, password, role } = form;
    if (!name || !email || !password) {
      toast.error('All fields are required!');
      return;
    }

    if (users.some(user => user.email === email)) {
      toast.error('User with this email already exists!');
      return;
    }

    setUsers([...users, { name, email, role }]);
    setForm({ name: '', email: '', password: '', role: 'Customer' });
    toast.success('User added successfully!');
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
    toast.success('User deleted!');
  };

  const changeRole = (index, newRole) => {
    const updated = [...users];
    updated[index].role = newRole;
    setUsers(updated);
    toast.success(`Role updated to ${newRole}`);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Add User Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-3xl">
        <h2 className="font-semibold text-lg mb-4">Add New User</h2>
        <div className="space-y-4">
          <input type="text" name="name" placeholder="Name" className="w-full border rounded-md p-2" value={form.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-md p-2" value={form.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" className="w-full border rounded-md p-2" value={form.password} onChange={handleInputChange} />
          <select name="role" className="w-full border rounded-md p-2" value={form.role} onChange={handleInputChange}>
            <option>Customer</option>
            <option>Admin</option>
          </select>
        </div>
        <button onClick={addUser} className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      {/* Users Table */}
      <h2 className="text-lg font-semibold mb-2">Users</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow max-w-3xl">
        {users.length === 0 ? (
          <p className="p-4 text-gray-500">No users available.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 font-medium">NAME</th>
                <th className="px-4 py-2 font-medium">EMAIL</th>
                <th className="px-4 py-2 font-medium">ROLE</th>
                <th className="px-4 py-2 font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <select value={user.role} onChange={(e) => changeRole(index, e.target.value)} className="border rounded-md p-1">
                      <option>Customer</option>
                      <option>Admin</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button onClick={() => deleteUser(index)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
