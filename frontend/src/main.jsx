import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './pages/CartContext'; // Adjust path as necessary
import { Provider } from 'react-redux'; // Import the Redux Provider
import store from './app/store'; // Import your Redux store
import './index.css'; 

ReactDOM.render(
  <Provider store={store}> {/* Wrap your app with the Provider */}
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>,
  document.getElementById('root')
);
