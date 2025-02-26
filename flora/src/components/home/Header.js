import React, { useState } from "react"; 
import "./Header.css";
import CartSidebar from "./CartSidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const cartItems = [
    { image: "/Neutrox.svg", title: "Neutrox Creme", price: "12.40" },
  ];


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

          <ul className="nav-links">
            <li>
              <a href="/about">Sobre a Flora</a>
            </li>
            <li>
              <a href="/parceiros">Parceiros</a>
            </li>
          </ul>

          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearchSubmit(event);
                }
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

      {/* Sidebar do carrinho */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Header;
