import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CheckoutPage.css";
import CartList from "../../components/checkout/CartList";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

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
      // Simulação de cálculo de frete
      const simulatedCost = 12.5; // substitua com resposta real da API futuramente
      setShippingCost(simulatedCost);
    } catch (err) {
      setError("Erro ao calcular frete.");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const unitPrice = parseFloat(item.precoUnid || item.price || 0);
    const quantity = item.quantity || 1;
    return acc + unitPrice * quantity;
  }, 0);

  const total = subtotal + (shippingCost ?? 10.8);

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

      <CartList products={cartItems} />

      <div className="final">
        <section className="delivery">
          <div className="delivery-box2">
            <h3>Receber</h3>
          </div>
          <div className="delivery-box">
            <div className="calculate">
              <label>Calcular entrega</label>
              <input
                type="text"
                className="input-checkout-page"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Digite seu CEP"
              />
              <button className="calculate-button" onClick={calculateShipping}>
                {loading ? "Calculando..." : "Calcular"}
              </button>
            </div>
            {error && <p className="error">{error}</p>}
            {shippingCost !== null && (
              <p className="shipping-result">Frete: R$ {shippingCost.toFixed(2)}</p>
            )}
          </div>
        </section>

        <aside className="summary">
          <div className="summary-box2">
            <h3>Nota fiscal</h3>
          </div>
          <div className="summary-box">
            <p>Subtotal <span className="total">R$ {subtotal.toFixed(2)}</span></p>
            <p className="green">Entrega <span className="total">R$ {(shippingCost ?? 10.8).toFixed(2)}</span></p>
            <p>Total <span className="price">R$ {total.toFixed(2)}</span></p>
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
