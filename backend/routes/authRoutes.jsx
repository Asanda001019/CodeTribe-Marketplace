// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Controller functions (import from controllers if needed)
router.post('/register', (req, res) => {
  // Add registration logic here
  res.send('Register endpoint working');
});

router.post('/login', (req, res) => {
  // Add login logic here
  res.send('Login endpoint working');
});

module.exports = router;
