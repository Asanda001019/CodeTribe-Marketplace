// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Add Navigate here
import { AuthProvider, useAuth } from './AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import AddProductForm from './pages/AddProductForm';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import RateUs from './pages/RateUs';
import NoPage from './pages/NoPage';
import ProductDetails from './pages/ProductDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QC9RyERBDcUQIctabXh1R89U8A6NWsNAiHDCiivEGWqcE6Ys84iOLkKQMZAkUAjLjKHJqVmdLTnlzhENjInvxyV001aG4mo2D');

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Elements stripe={stripePromise}>
          <Router>
            <Navigation />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
                <Route path="/add-product" element={<PrivateRoute><AddProductForm /></PrivateRoute>} />
                <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                <Route path="/rate-us" element={<PrivateRoute><RateUs /></PrivateRoute>} />
                <Route path="*" element={<NoPage />} />
                <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
                {/* <Route path="/home" element={<Home />} /> */}
                
              </Routes>
            </div>
            <Footer />
          </Router>
        </Elements>
      </div>
    </AuthProvider>
  );
}

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />; // This uses Navigate to redirect
};

export default App;
