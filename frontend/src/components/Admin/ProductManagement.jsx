import React, { useState } from 'react';
import { toast } from 'sonner';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Classic Shirt', price: 39.99, sku: 'CLS-001' },
    { id: 2, name: 'Denim Jeans', price: 49.99, sku: 'DNM-002' },
  ]);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    sku: '',
    sizes: '',
    colors: '',
    image: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false); // NEW state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      description: '',
      price: '',
      stock: '',
      sku: '',
      sizes: '',
      colors: '',
      image: null,
    });
    setEditingId(null);
    setShowForm(false); // back to list
  };

  const addOrUpdateProduct = () => {
    const { name, price, sku } = form;
    if (!name || !price || !sku) {
      toast.error('Please fill required fields!');
      return;
    }

    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...p, ...form, price: parseFloat(form.price) } : p
        )
      );
      toast.success('Product updated!');
    } else {
      setProducts([
        ...products,
        { id: Date.now(), ...form, price: parseFloat(form.price) },
      ]);
      toast.success('Product added!');
    }

    resetForm();
  };

  const editProduct = (product) => {
    setForm({
      ...product,
      sizes: product.sizes ? product.sizes.join(', ') : '',
      colors: product.colors ? product.colors.join(', ') : '',
      image: product.image || null,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success('Product deleted!');
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {/* FORM VIEW */}
      {showForm ? (
        <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-3xl">
          <h2 className="font-semibold text-lg mb-4">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full border rounded-md p-2"
              value={form.name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full border rounded-md p-2"
              value={form.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="sku"
              placeholder="SKU"
              className="w-full border rounded-md p-2"
              value={form.sku}
              onChange={handleInputChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-md p-2"
            />
            {form.image && (
              <img
                src={form.image instanceof File ? URL.createObjectURL(form.image) : form.image}
                alt="Preview"
                className="w-24 h-24 object-cover rounded mt-2"
              />
            )}
          </div>
          <div className="mt-4 space-x-2">
            <button
              onClick={addOrUpdateProduct}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              {editingId ? 'Update Product' : 'Save Product'}
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        /* LIST VIEW */
        <div>
          <div className="mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Add Product
            </button>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg shadow max-w-5xl">
            {products.length === 0 ? (
              <p className="p-4 text-gray-500">No products available.</p>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-2 font-medium">NAME</th>
                    <th className="px-4 py-2 font-medium">PRICE</th>
                    <th className="px-4 py-2 font-medium">SKU</th>
                    <th className="px-4 py-2 font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                      <td className="px-4 py-2">{product.sku}</td>
                      <td className="px-4 py-2 space-x-2">
                        <button
                          onClick={() => editProduct(product)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
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
      )}
    </div>
  );
};

export default ProductManagement;
