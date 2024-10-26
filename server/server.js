// E:\JS-RUFF2\JS-practice\41-shopping-cart\24-Product-Search\product-search-app\server\server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/productSearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  rating: Number,
  popularity: Number
  // Add other relevant fields as needed
});

const Product = mongoose.model('products', productSchema);

app.get('/', (req, res) => {
  res.send('Welcome to product Page!')
})

app.get('/products', async (req, res) => {
  const { keyword } = req.query;
  const regex = new RegExp(keyword, 'i'); // Case-insensitive search
  const products = await Product.find({
    $or: [{ name: regex }, { description: regex }],
  });
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// app.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//   res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
