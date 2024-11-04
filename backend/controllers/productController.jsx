const admin = require('../config/firebaseConfig.jsx');
const db = admin.firestore();

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { title, description, price, imageURL, availability } = req.body;
    const productData = {
      title,
      description,
      price,
      imageURL,
      availability,
      hidden: false, // Default value for visibility
    };

    const newProductRef = db.collection('products').doc();
    await newProductRef.set(productData);

    res.status(201).json({ message: 'Product created successfully', productId: newProductRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const productsSnapshot = await db.collection('products').get();
    const products = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDoc = await db.collection('products').doc(productId).get();

    if (!productDoc.exists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ id: productDoc.id, ...productDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product details
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;

    await db.collection('products').doc(productId).update(updateData);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await db.collection('products').doc(productId).delete();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hide/Show a product
const toggleProductVisibility = async (req, res) => {
  try {
    const productId = req.params.id;
    const { hidden } = req.body;

    await db.collection('products').doc(productId).update({ hidden });
    res.status(200).json({ message: `Product visibility updated to ${hidden}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  toggleProductVisibility
};
