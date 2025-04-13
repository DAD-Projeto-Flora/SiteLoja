import "./WalletCard.css"; // Importa o arquivo de estilos
import React, { useEffect, useState } from "react";
import { useUser } from "../login/UserContext";
import { getCardByClientId } from "../../autenticação/getCardByClientId";

const WalletCard = () => {
  const [card, setCard] = useState(null);
  const { userId } = useUser();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getCardByClientId(userId);
        console.log(data);
        setCard(data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      }
    };

    if (userId) fetchClient();
  }, [userId]);

  if (!card) {
    return <p>Carregando cartão...</p>;
  }

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>

      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img className="avatar" src={"/perfil.svg"} alt="Foto de Perfil" />
            <div>
              <h2 className="text"></h2>
              <p className="text"></p>
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>

        <div className="form-grid">
          <div className="card-grid">
            <div>
              <div>
                <label className="text">Número do cartão</label>
                <input
                  type="text"
                  placeholder={card.numero}
                  className="input-wallet-card"
                />
              </div>
              <div>
                <label className="text">Data de Validade (MMAA)</label>
                <input
                  type="text"
                  placeholder={
                    card.validade
                      ? new Date(card.validade).toLocaleDateString("pt-BR", {
                          month: "2-digit",
                          year: "2-digit",
                        })
                      : ""
                  }
                  className="input-wallet-card"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-grid">
          <div className="name-grid">
            <div>
              <div>
                <label className="text">Nome do cartão</label>
                <input
                  type="text"
                  placeholder={card.nomeCartao}
                  className="input-wallet-card"
                />
              </div>
              <div>
                <label className="text">CVV</label>
                <input
                  type="text"
                  placeholder={card.cvv}
                  className="input-wallet-card"
                />
              </div>
            </div>
            <div className="info-card">
              <div>
                <div className="card-info">
                  <label className="text">Cartão cadastrado</label>
                  <div className="card-box">
                    <span>
                      <img
                        className="icon"
                        src="/logoCartao.svg"
                        alt="Endereço"
                      />
                    </span>
                    <p className="text">{card.nomeCartao}</p>
                  </div>
                  <button className="add-button">Atualizar cartão</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
