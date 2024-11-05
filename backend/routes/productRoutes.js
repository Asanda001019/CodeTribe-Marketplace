const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  toggleProductVisibility
} = require('../controllers/productController');

// Routes
router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id/visibility', toggleProductVisibility);

module.exports = router;
