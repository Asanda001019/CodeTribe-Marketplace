const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // To handle CORS issues
app.use(express.json()); // To parse JSON request bodies

// Import routes
const authRoutes = require('./routes/authRoutes.jsx'); 
const productRoutes = require('./routes/productRoutes.jsx');


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


// Test route to ensure server is running
app.get('/', (req, res) => {
  res.send('Server is woking fine');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
