import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";
import CartList from "../../components/checkout/CartList";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simula autenticação
  const [zipCode, setZipCode] = useState("");
  const [shippingCost, setShippingCost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  const calculateShipping = async () => {
    if (!zipCode) {
      setError("Digite um CEP válido.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Substitua '01000-000' com o CEP de origem (da sua loja ou armazém)
      const response = await fetch(`https://api.correios.com.br/calculo?origem=01000-000&destino=${zipCode}&peso=1.2`);
      
      if (!response.ok) {
        throw new Error("Erro ao calcular frete.");
      }

      const data = await response.json();
      setShippingCost(data.valor); // Ajuste conforme a resposta da API
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          <span>2. Pagamento</span>
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
              <input type="text" className="input-checkout-page"/>
              <button className="calculate-button">Calcular</button>
            </div>
            {error && <p className="error">{error}</p>}
            {shippingCost !== null && (
              <p className="shipping-result">Frete: R$ {shippingCost}</p>
            )}
          </div>
        </section>

        <aside className="summary">
          <div className="summary-box2">
            <h3>Nota fiscal</h3>
          </div>
          <div className="summary-box">
            <p>Subtotal <span className="total">R$ 12,40</span></p>
            <p className="green">Entrega <span className="total">R$ {shippingCost ?? "10,80"}</span></p>
            <p>Total <span className="price">R$ {(12.40 + (shippingCost ?? 10.80)).toFixed(2)}</span></p>
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
