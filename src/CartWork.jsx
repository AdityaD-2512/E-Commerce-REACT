import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Home Page Component
const HomePage = ({ addToCart }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Available Items</h2>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

// Cart Page Component
const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Go Back</Link>
    </div>
  );
};

// Main App Component
const App2 = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App2;
