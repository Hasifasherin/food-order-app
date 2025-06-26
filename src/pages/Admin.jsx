import React, { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    image: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Product added (fake action for now): " + JSON.stringify(form));
    setForm({ name: "", desc: "", price: "", category: "", image: "", rating: 5 });
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-xl space-y-4">
        <input type="text" placeholder="Product Name" required
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input type="text" placeholder="Description"
          value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input type="text" placeholder="Price (e.g., $5.99)"
          value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input type="text" placeholder="Category (e.g., Burgers)"
          value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input type="text" placeholder="Image Path (e.g., /src/assets/...jpg)"
          value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
