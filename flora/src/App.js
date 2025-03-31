import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CheckoutPage from "./pages/CheckoutPage";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";
import PaymentPage from "./pages/PaymentPage";
import Catalog from "./pages/Catalog";


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
        <Route path="/history" element={ < History />} />
        <Route path="/payment" element={ < PaymentPage />} />
        <Route path="/catalog" element={ < Catalog />} />
      </Routes>
    </Router>
  );
};

export default App;
