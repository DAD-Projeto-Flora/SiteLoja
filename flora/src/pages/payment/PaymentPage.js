import React, { useState, useEffect } from "react";
import "./PaymentPage.css";
import generatePDF from "../../utils/generatePDF"; 
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { cartItems, subtotal, shippingCost, total } = location.state || {};
  const [cardNumber, setCardNumber] = useState("");
  const [cardImage, setCardImage] = useState("/default-card.png");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(response => response.json())
      .then(data => setStates(data.sort((a, b) => a.nome.localeCompare(b.nome))))
      .catch(error => console.error("Erro ao buscar estados:", error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
        .then(response => response.json())
        .then(data => setCities(data.sort((a, b) => a.nome.localeCompare(b.nome))))
        .catch(error => console.error("Erro ao buscar cidades:", error));
    }
  }, [selectedState]);

  const handleCardInputChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    setCardNumber(input);
    updateCardImage(input);
  };

  const updateCardImage = (number) => {
    if (/^4/.test(number)) {
      setCardImage("/visa.svg");
    } else if (/^5[1-5]/.test(number)) {
      setCardImage("/masterCard.svg");
    } else if (/^(5067|4576|4011|5094)/.test(number)) { 
      setCardImage("/elo-1.svg");
    } else {
      setCardImage("/credit.svg");
    }
  };

  const handleSubmit = () => {
    const updatedUserInfo = {
      ...userInfo,
      city: cities.find(city => city.nome === userInfo.city)?.nome || userInfo.city,
      state: states.find(state => state.sigla === selectedState)?.nome || selectedState,
    };

    const updatedOrderSummary = cartItems.map(item => ({
      name: item.name || item.nome,
      price: parseFloat(item.price || item.precoUnid || 0),
    }));

    generatePDF(updatedUserInfo, updatedOrderSummary);
  };

  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className="containerAll">
      <header className="headerPayment">
        <div className="logo">
          <img src="/logoCheckout.svg" alt="Flora" />
        </div>
        <nav className="progress">
          <span>1. Carrinho</span>
          <span className="active">2. Pagamento</span>
        </nav>
      </header>

      <div className="containerInfo">
        <div className="shipping-address">
          <h2 className="title-paymentpage">Endereço</h2>
          <input
            type="text"
            placeholder="Ex. Rua Morada de Teresina"
            className="input-payment-page"
            value={userInfo.address}
            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
          />
          <div className="containerAdress">
            <input
              type="text"
              placeholder="Bairro"
              className="input-payment-page"
              value={userInfo.neighborhood}
              onChange={(e) => setUserInfo({ ...userInfo, neighborhood: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apartamento, casa etc"
              className="input-payment-page"
              value={userInfo.complement}
              onChange={(e) => setUserInfo({ ...userInfo, complement: e.target.value })}
            />
            <input
              type="number"
              placeholder="Número"
              className="input-payment-page"
              value={userInfo.number}
              onChange={(e) => setUserInfo({ ...userInfo, number: e.target.value })}
            />
          </div>
          <div className="city-state-zip">
            <select
              onChange={(e) => {
                setSelectedState(e.target.value);
                setUserInfo({ ...userInfo, state: e.target.value });
              }}
            >
              <option value="">Estado</option>
              {states.map((state) => (
                <option key={state.id} value={state.sigla}>{state.nome}</option>
              ))}
            </select>
            <select
              onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
            >
              <option>Cidade</option>
              {cities.map((city) => (
                <option key={city.id} value={city.nome}>{city.nome}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="CEP"
              className="input-payment-page"
              value={userInfo.zip}
              onChange={(e) => setUserInfo({ ...userInfo, zip: e.target.value })}
            />
          </div>
        </div>

        <div className="order-summary">
          <h2 className="title-paymentpage">Resumo do Pedido</h2>
          <p>Subtotal: <span>R$ {subtotal?.toFixed(2)}</span></p>
          <p>Frete: <span>R$ {shippingCost?.toFixed(2)}</span></p>
          <p className="total">Total: <span>R$ {total?.toFixed(2)}</span></p>
          <button className="place-order" onClick={handleSubmit}>Place Order</button>
        </div>
      </div>

      <div className="payment-method">
        <h2 className="title-paymentpage">Método de pagamento</h2>
        <input type="text" placeholder="First & Last Name" className="input-payment-page" />
        <div className="payCard">
          <input 
            type="text" 
            placeholder="0000 0000 0000 0000" 
            value={cardNumber} 
            onChange={handleCardInputChange}
            className="input-payment-page" 
          />
          <img src={cardImage} alt="Cartão" className="cardImage"/>
        </div>
        <div className="expiry-cvv">
          <select>
            <option>MM</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, "0")}>{String(i + 1).padStart(2, "0")}</option>
            ))}
          </select>
          <select>
              <option>MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>
            <select>
              <option>YYYY</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={currentYear + i} value={currentYear + i}>{currentYear + i}</option>
              ))}
            </select>
            <input type="text" placeholder="CVV" className="input-payment-page"/>
          </div>
        </div>
      </div>
  );
};

export default PaymentPage;