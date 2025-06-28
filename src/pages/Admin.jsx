
import React, { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    image: "",
    rating: 4,
  });

  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.desc || !form.price || !form.category || !form.image) {
      alert("Please fill in all fields");
      return;
    }
    setProducts([...products, form]);
    setForm({ name: "", desc: "", price: "", category: "", image: "", rating: 4 });
  };

  const handleDelete = (index) => {
    const filtered = products.filter((_, i) => i !== index);
    setProducts(filtered);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setForm({ ...form, image: imageURL });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🍔 Add New Product</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <input
            type="text"
            placeholder="Price (e.g. $10.99)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Category (e.g. Burgers, Desserts)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border px-4 py-2 rounded"
          />

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Image URL</label>
            <input
              type="text"
              placeholder="Paste image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full border px-4 py-2 rounded"
            />

            <label className="block text-sm font-semibold">Or Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border px-4 py-1 rounded"
            />
          </div>

          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="w-32 h-32 object-cover rounded border mt-2"
            />
          )}

          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            Add Product
          </button>
        </form>

        {products.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">📦 Product Inventory</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded">
                <thead className="bg-yellow-100 text-left">
                  <tr>
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Category</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Rating</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2 border">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="p-2 border">{item.name}</td>
                      <td className="p-2 border">{item.category}</td>
                      <td className="p-2 border">{item.price}</td>
                      <td className="p-2 border">{item.rating}</td>
                      <td className="p-2 border">
                        <button
                          onClick={() => handleDelete(i)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
