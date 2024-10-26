import React, { useState } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/products?keyword=${keyword}`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product._id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
