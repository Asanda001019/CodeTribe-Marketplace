// Checkout.js
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useCart } from '../pages/CartContext'; // Import the cart context
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment method and confirm the payment
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
    } else {
      // You can send paymentMethod.id to your server to process the payment
      console.log('Payment Method:', paymentMethod);
      // Here you should implement the logic to send the paymentMethod.id to your backend
      // for processing the payment (you can set up an endpoint in your server to handle that)
      
      alert('Payment successful!'); // Notify the user of a successful payment
      navigate('/rate-us'); // Navigate to the Rate Us page
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <h3 className="font-bold text-lg mt-4">Total Cost: R{totalCost.toFixed(2)}</h3>
      <form onSubmit={handleSubmit}>
        <CardElement className="border p-2 mb-4" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;
