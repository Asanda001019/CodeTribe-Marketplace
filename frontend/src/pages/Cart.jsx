import React from 'react';
import { useCart } from '../pages/CartContext'; // Import the cart context
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>${item.price} each</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-lg mt-4">Total Cost: ${totalCost.toFixed(2)}</h3>
          <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
