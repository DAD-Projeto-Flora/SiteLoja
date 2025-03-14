import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";
import CartList from "../components/checkoutPage/CartList";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula autenticação

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate("/identificacao");
    } else {
      navigate("/pagamento");
    }
  };

  return (
    <div className="container">
      <header className="headerCheckout">
        <div className="logo">
          <img src="/logoCheckout.svg" alt="Flora" />
        </div>
        <nav className="progress">
          <span className="active">1. Carrinho</span>
          <span>2. Identificação</span>
          <span>3. Pagamento</span>
        </nav>
      </header>

      <CartList products={[ /* Produtos */ ]} />

      <div className="final">
        <section className="delivery">
          <div className="delivery-box2">
            <h3>Receber</h3>
          </div>
          <div className="delivery-box">
            <div className="calculate">
              <label>Calcular entrega</label>
              <input type="text" />
              <button className="calculate-button">Calcular</button>
            </div>
          </div>
        </section>

        <aside className="summary">
          <div className="summary-box2">
            <h3>Nota fiscal</h3>
          </div>
          <div className="summary-box">
            <p>Subtotal <span className="total">R$ 12,40</span></p>
            <p className="green">Entrega <span className="total">R$ 10,80</span></p>
            <p>Total <span className="price">R$ 23,20</span></p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
