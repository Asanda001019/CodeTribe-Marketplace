const admin = require('../config/firebaseConfig');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User registered successfully', userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Implement logic to verify password (using a database or Firebase Authentication)
    const userRecord = await admin.auth().getUserByEmail(email);
    const token = jwt.sign({ uid: userRecord.uid }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
