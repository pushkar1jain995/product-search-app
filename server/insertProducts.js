// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/productSearch', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const productSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     price: Number,
//     category: String,
//     image: String,
//     rating: Number,
//     popularity: Number
// });

// const Product = mongoose.model('Product', productSchema)

// const sampleProducts = [
//     {
//         name: "Product 1",
//         description: "Description of product 1",
//         price: 29.99,
//         category: "Electronics",
//         image: "https://via.placeholder.com/150",
//         rating: 4.5,
//         popularity: 100
//     },
//     {
//         name: "Product 2",
//         description: "Description of product 2",
//         price: 49.99,
//         category: "Home Appliances",
//         image: "https://via.placeholder.com/150",
//         rating: 3.8,
//         popularity: 80
//     },
//     {
//         name: "Product 3",
//         description: "Description of product 3",
//         price: 19.99,
//         category: "Books",
//         image: "https://via.placeholder.com/150",
//         rating: 4.9,
//         popularity: 120
//     },
//     {
//         name: "Product 4",
//         description: "Description of product 4",
//         price: 99.99,
//         category: "Gaming",
//         image: "https://via.placeholder.com/150",
//         rating: 4.2,
//         popularity: 90
//     },
//     {
//         name: "Product 5",
//         description: "Description of product 5",
//         price: 15.99,
//         category: "Toys",
//         image: "https://via.placeholder.com/150",
//         rating: 4.0,
//         popularity: 70
//     }
// ];

// Product.insertMany(sampleProducts).then(() => {
//     console.log("Sample products inserted");
//     mongoose.connection.close();
// })
// .catch(err => {
//     console.error("Error inserting sample product")
// });

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/productsearch', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   category: String,
//   image: String,
//   rating: Number,
//   popularity: Number
// });

// const Product = mongoose.model('Product', productSchema);

// const products = [
//   {
//     name: 'Product 1',
//     description: 'This is product 1.',
//     price: 100,
//     category: 'Category 1',
//     image: 'image1.jpg',
//     rating: 4,
//     popularity: 10
//   },
//   {
//     name: 'Product 2',
//     description: 'This is product 2.',
//     price: 200,
//     category: 'Category 2',
//     image: 'image2.jpg',
//     rating: 5,
//     popularity: 20
//   },
//   {
//     name: 'Product 3',
//     description: 'This is product 3.',
//     price: 300,
//     category: 'Category 3',
//     image: 'image3.jpg',
//     rating: 3,
//     popularity: 15
//   }
// ];

// Product.insertMany(products, (err, docs) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Products inserted successfully.');
//   }
// });

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productsearch', {
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
});

const Product = mongoose.model('Product', productSchema);

const products = [
  {
    name: 'Product 1',
    description: 'This is product 1.',
    price: 100,
    category: 'Category 1',
    image: 'image1.jpg',
    rating: 4,
    popularity: 10
  },
  {
    name: 'Product 2',
    description: 'This is product 2.',
    price: 200,
    category: 'Category 2',
    image: 'image2.jpg',
    rating: 5,
    popularity: 20
  },
  {
    name: 'Product 3',
    description: 'This is product 3.',
    price: 300,
    category: 'Category 3',
    image: 'image3.jpg',
    rating: 3,
    popularity: 15
  }
];

Product.insertMany(products)
  .then(() => {
    console.log('Products inserted successfully.');
  })
  .catch((error) => {
    console.error(error);
  });