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

function App() {
  return (
   
    <Router>
      <Navigation />
      <Routes>
      <h1>Hello World</h1>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/rate-us" element={<RateUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
