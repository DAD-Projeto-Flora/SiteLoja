import React, { useState, useEffect } from "react";
import "./PaymentPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../components/login/UserContext";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, subtotal, shippingCost, total, clearCart } = location.state || {}; 
  const { userId } = useUser();
  const [cardNumber, setCardNumber] = useState("");
  const [cardImage, setCardImage] = useState("/default-card.png");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [userInfo, setUserInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [clientInfo, setClientInfo] = useState(null);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchClientInfo = async () => {
      if (!userId) return;
      try {
        const response = await fetch(`https://apilojaflora.onrender.com/order/getOrderByClientId/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setClientInfo(data.cliente);
          setUserInfo({
            address: data.cliente.address || "",
            city: data.cliente.city || "",
            state: data.cliente.state || "",
            zip: data.cliente.zip || "",
          });
        } else {
          console.error("Erro ao buscar informações do cliente:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar informações do cliente:", error);
      }
    };

    fetchClientInfo();
  }, [userId]);

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

  const handleSubmit = async () => {
    setIsLoading(true); 
    try {
      if (!Array.isArray(cartItems) || cartItems.length === 0) {
        throw new Error("Carrinho vazio ou inválido.");
      }
  
      const updatedUserInfo = {
        ...userInfo,
        city: cities.find(city => city.nome === userInfo.city)?.nome || userInfo.city,
        state: states.find(state => state.sigla === selectedState)?.nome || selectedState,
      };
  
      const updatedOrderSummary = cartItems.map(item => {
        if (!item || typeof item !== "object") {
          throw new Error("Item inválido no carrinho.");
        }
        return {
          produto: {
            id: item.id,
            nome: item.title || item.nome || "Produto desconhecido",
            precoUnid: parseFloat(item.price || item.precoUnid || 0),
            categoria: item.categoria || null,
            urlImagem: item.urlImagem || null,
          },
          qntProduto: item.quantity || 1,
        };
      });
  
      const orderData = {
        cliente: {
          id: clientInfo?.id || userId,
          nomeCompleto: clientInfo?.nomeCompleto || "Cliente",
          email: clientInfo?.email || "email@example.com",
        },
        dataPedido: new Date().toISOString().split("T")[0],
        formaPgto: "Cartão de Crédito",
        dataPgto: new Date().toISOString().split("T")[0],
        precoTotal: total,
        itens: updatedOrderSummary,
      };
  
      const response = await fetch("https://apilojaflora.onrender.com/order/saveOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        setIsOrderConfirmed(true);
        clearCart(); 
        setTimeout(() => {
          setIsLoading(false); 
          navigate("/");
        }, 5000);
      } else {
        navigate("/");
        console.error("Erro ao salvar o pedido:", response.statusText);
        setIsLoading(false);
      }
    } catch (error) {
      navigate("/");
      console.error("Erro ao salvar o pedido:", error.message);
      setIsLoading(false);
    }
  };

  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className="containerAll">
      {isLoading ? ( 
        <div className="loading-screen">
          <img src="/truck-animation.gif" alt="Carregando..." className="loading-truck" />
          <p>Confirmando pedido...</p>
        </div>
      ) : (
        <>
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
                required
              />
              <div className="containerAdress">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="input-payment-page"
                  value={userInfo.neighborhood}
                  onChange={(e) => setUserInfo({ ...userInfo, neighborhood: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Apartamento, casa etc"
                  className="input-payment-page"
                  value={userInfo.complement}
                  onChange={(e) => setUserInfo({ ...userInfo, complement: e.target.value })}
                  required
                />
                <input
                  type="number"
                  placeholder="Número"
                  className="input-payment-page"
                  value={userInfo.number}
                  onChange={(e) => setUserInfo({ ...userInfo, number: e.target.value })}
                  required
                />
              </div>
              <div className="city-state-zip">
                <select
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setUserInfo({ ...userInfo, state: e.target.value });
                  }}
                  required
                >
                  <option value="">Estado</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.sigla}>{state.nome}</option>
                  ))}
                </select>
                <select
                  onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                  required
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
                  required
                />
              </div>
            </div>

            <div className="order-summary">
              <h2 className="title-paymentpage">Resumo do Pedido</h2>
              <p>Subtotal: <span>R$ {subtotal?.toFixed(2)}</span></p>
              <p>Frete: <span>R$ {shippingCost?.toFixed(2)}</span></p>
              <p className="total">Total: <span>R$ {total?.toFixed(2)}</span></p>
              <button className="place-order" onClick={handleSubmit}>Finalizar Compra</button>
              {isOrderConfirmed && <p className="confirmation-message">Pedido confirmado! Redirecionando para a home...</p>}
            </div>
          </div>

          <div className="payment-method">
            <h2 className="title-paymentpage">Método de pagamento</h2>
            <input type="text" placeholder="First & Last Name" className="input-payment-page" required />
            <div className="payCard">
              <input 
                type="text" 
                placeholder="0000 0000 0000 0000" 
                value={cardNumber} 
                onChange={handleCardInputChange}
                className="input-payment-page" 
                required
              />
              <img src={cardImage} alt="Cartão" className="cardImage"/>
            </div>
            <div className="expiry-cvv">
              <select required>
                <option>MM</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, "0")}>{String(i + 1).padStart(2, "0")}</option>
                ))}
              </select>
              <select required>
                <option>YYYY</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={currentYear + i} value={currentYear + i}>{currentYear + i}</option>
                ))}
              </select>
              <input type="text" placeholder="CVV" className="input-payment-page" required />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;