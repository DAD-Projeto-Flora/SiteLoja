import React from "react";
import "./CartSidebar.css";
import { Link } from "react-router-dom";
import { useUser } from "../login/UserContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useUser();

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Carrinho</h2>
        <img id="shopCart" src="/shopCartWhite.svg" alt="Cart Icon" />
        <span>{cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-image">
                <img src={item.urlImagem} alt={item.nome} className="cart-item-img" />
              </div>
              <div className="cart-item-details">
                <h4>{item.nome}</h4>
                <span className="cart-price">R$ {item.precoUnid.toFixed(2)}</span>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>✖</button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        )}
      </div>

      <div className="cart-footer">
        <p className="subtotal">
          Subtotal: <strong>R$ {cartItems.reduce((acc, item) => acc + item.precoUnid, 0).toFixed(2)}</strong>
        </p>
        <Link to="/checkoutPage">
          <button className="checkout-btn">Finalizar compra</button>
        </Link>
        <button className="continue-btn" onClick={onClose}>Continuar compra</button>
      </div>
    </div>
  );
};

export default CartSidebar;
