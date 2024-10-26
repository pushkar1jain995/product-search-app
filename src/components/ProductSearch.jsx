import React, { useState } from 'react';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/search?q=${query}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}`);
    const data = await response.json();
    setProducts(data);
  };

  const handleSuggestions = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const response = await fetch(`http://localhost:5000/suggestions?q=${value}`);
      const data = await response.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleSuggestions}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search for products..."
        />
        {suggestions.length > 0 && (
          <ul className="border border-gray-300 mt-2">
            {suggestions.map((suggestion) => (
              <li key={suggestion._id} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setQuery(suggestion.name)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        <div className="flex space-x-2 mt-2">
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/3 p-2 border border-gray-300 rounded"
            placeholder="Category"
          />
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/3 p-2 border border-gray-300 rounded"
            placeholder="Min Price"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/3 p-2 border border-gray-300 rounded"
            placeholder="Max Price"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 border border-gray-300 rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-yellow-500">Rating: {product.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
