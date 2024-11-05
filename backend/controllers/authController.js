// controllers/authController.js
const admin = require('../config/firebaseConfig.js');

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
    // To validate login, handle this on the client side with Firebase Client SDK, 
    // then send the ID token to this endpoint if necessary.
    const userRecord = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(userRecord.uid);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
