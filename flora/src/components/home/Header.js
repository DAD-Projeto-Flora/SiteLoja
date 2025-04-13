import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import CartSidebar from "./CartSidebar";
import { useUser } from "../login/UserContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useUser();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to={"/"}>
            <div className="logo">
              <img src="/floraLogoFolha.svg" alt="Flora Logo Folha" />
              <img src="/floraLogo.svg" alt="Flora Logo" />
            </div>
          </Link>

          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSearchSubmit(event);
              }}
            />
          </form>

          <div className="buttons">
            <button className="cart-button" onClick={() => setIsCartOpen(true)}>
              <img src="/shopCart.svg" alt="Cart Icon" />
            </button>
            <button className="user-button">
              <Link to="/login">
                <img src="/profileIcon.svg" alt="User Icon" />
              </Link>
            </button>
          </div>
        </nav>
      </header>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Header;
