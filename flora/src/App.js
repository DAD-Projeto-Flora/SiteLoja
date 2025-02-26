import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CheckoutPage from "./pages/CheckoutPage";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkoutPage" element={< CheckoutPage />} />
        <Route path="/wallet" element={< Wallet />} />
        <Route path="/settings" element={< Settings />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={ < Register />} />
      </Routes>
    </Router>
  );
};

export default App;
