// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    
    <div className="flex flex-col min-h-screen">
      <Elements stripe={stripePromise}>
      <Router>
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/rate-us" element={<RateUs />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </Elements>
    </div>
  );
}

export default App;
