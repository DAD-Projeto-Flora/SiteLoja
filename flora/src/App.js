import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Wallet from "./pages/wallet/Wallet";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import History from "./pages/history/History";
import PaymentPage from "./pages/payment/PaymentPage";
import Catalog from "./pages/catalog/Catalog";
import Product from "./pages/product/Product";
import Admin from "./pages/admin/Admin";

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
        <Route path="/productpage" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
