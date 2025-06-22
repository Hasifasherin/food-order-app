import React, { useState } from 'react';
import products from '../data/products';

const Menu = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filteredItems = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || item.category === category)
  );

  const categories = [...new Set(products.map(item => item.category))];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search food..."
          className="border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-500">{item.description}</p>
            <p className="font-semibold mt-2">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
