import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import { useState, useEffect } from 'react';
// import './App.css';

function App() {

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
        <Route path="/" element={<HomePage addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>} />
      </Routes>
    </Router>
  )
}

export default App
