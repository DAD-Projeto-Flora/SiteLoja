import React, { useEffect, useState } from "react";
import axios from "axios"; // Adicionado axios para chamadas HTTP
import "./CardProfile.css";
import { getClientById } from "../../autenticação/getClientById";
import LoadingSpinner from "../catalog/LoadingSpinner";
import { useUser } from "../login/UserContext"; // ajuste o caminho conforme estrutura do projeto

const ProfileCard = () => {
  const [client, setClient] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useUser();

  const API_BASE_URL = "https://apilojaflora.onrender.com/client"; // URL base da API

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getClientById(userId);
        console.log(data);
        setClient(data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchClient();
  }, [userId]);

  // Função para atualizar cliente
  const updateClient = async (updatedClient) => {
    try {
      await axios.put(`${API_BASE_URL}/updateClient/${userId}`, updatedClient);
      alert("Dados atualizados com sucesso!");
      setClient(updatedClient); // Atualiza o estado local com os novos dados
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      alert("Erro ao atualizar os dados.");
    }
  };

  // Função para salvar alterações dos inputs fora dos modais
  const handleSave = () => {
    const updatedClient = {
      ...client,
      nomeCompleto: document.querySelector('input[placeholder="' + client.nomeCompleto + '"]').value || client.nomeCompleto,
      nomeUsuario: document.querySelector('input[placeholder="' + client.nomeUsuario + '"]').value || client.nomeUsuario,
      telefone: document.querySelector('input[placeholder="' + client.telefone + '"]').value || client.telefone,
    };

    updateClient(updatedClient);
  };

  // Função para salvar o novo e-mail
  const handleSaveEmail = () => {
    const newEmail = document.querySelector('input[placeholder="novo.email@gmail.com"]').value;
    if (newEmail) {
      const updatedClient = { ...client, email: newEmail };
      updateClient(updatedClient);
      setModalType(null); // Fecha o modal
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  // Função para salvar o novo endereço
  const handleSaveEndereco = () => {
    const newEndereco = {
      cep: document.querySelector('input[placeholder="00028-922"]').value,
      estadoCidade: document.querySelector('input[placeholder="São Paulo - Osasco"]').value,
      bairro: document.querySelector('input[placeholder="Km 18"]').value,
      rua: document.querySelector('input[placeholder="Rua dos bobos"]').value,
      numero: document.querySelector('input[placeholder="Número"]').value,
      complemento: document.querySelector('input[placeholder="Descrição do Prédio / Bloco / Referências próximas"]').value,
    };

    if (newEndereco.cep && newEndereco.rua && newEndereco.numero) {
      const updatedClient = { ...client, endereco: newEndereco };
      updateClient(updatedClient);
      setModalType(null); // Fecha o modal
    } else {
      alert("Por favor, preencha todos os campos obrigatórios do endereço.");
    }
  };

  const openModalEndereco = () => setModalType("endereco");
  const openModalEmail = () => setModalType("email");
  const closeModal = () => setModalType(null);

  if (loading || !client) return <LoadingSpinner />;

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>

      {modalType === "email" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar E-mail</h2>
            <div className="modal-form">
              <label>Novo e-mail <span>*</span></label>
              <input type="text" placeholder="novo.email@gmail.com" className="input-card-profile-modal" />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button" onClick={handleSaveEmail}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      {modalType === "endereco" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar Endereço</h2>
            <div className="modal-form">
              <label>CEP <span>*</span></label>
              <input type="text" placeholder="00028-922" className="input-card-profile-modal" />
              <label>Estado - Cidade <span>*</span></label>
              <input type="text" placeholder="São Paulo - Osasco" className="input-card-profile-modal" />
              <label>Bairro <span>*</span></label>
              <input type="text" placeholder="Km 18" className="input-card-profile-modal" />
              <div className="street-number">
                <div className="rua">
                  <label className="text title-numrua">Rua <span>*</span></label>
                  <input type="text" placeholder="Rua dos bobos" className="input-card-profile-modal" />
                </div>
                <div className="num">
                  <label className="text title-numrua">Número <span>*</span></label>
                  <input type="text" placeholder="Número" className="input-card-profile-modal" />
                </div>
              </div>
              <label>Complemento <span>*</span></label>
              <input type="text" placeholder="Descrição do Prédio / Bloco / Referências próximas" className="input-card-profile-modal" />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button" onClick={handleSaveEndereco}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img className="avatar" src={client.fotoPerfil} alt="Foto de Perfil" />
            <div>
              <h2 className="text">{client.nomeCompleto}</h2>
              <p className="text">{client.email}</p>
            </div>
          </div>
          <button className="save-button" onClick={handleSave}>Salvar</button>
        </div>

        <div className="form-grid">
          <div className="name-grid">
            <div>
              <div className="input-name-profile">
                <label className="text">Nome completo</label>
                <input type="text" placeholder={client.nomeCompleto} className="input-card-profile" />
              </div>
              <div className="input-name-profile">
                <label className="text">Nome de usuário</label>
                <input type="text" placeholder={client.nomeUsuario} className="input-card-profile" />
              </div>
            </div>
          </div>

          <div className="more-info">
            <div>
              <div>
                <label className="text">Gênero</label>
                <div className="gender-options">
                  <label className="text">
                    <input type="radio" name="gender" value="Feminino" defaultChecked={client.genero === "Feminino"} /> Feminino
                  </label>
                  <label className="text">
                    <input type="radio" name="gender" value="Masculino" defaultChecked={client.genero === "Masculino"} /> Masculino
                  </label>
              </div>
              </div>

              <div>
                <label className="text">Número de telefone</label>
                <div className="phone-input">
                  <div id="input-card-profile-ddd">
                    <img className="icon-brasil" src="/brasil.svg" alt="Endereço" />
                    <span className="text">+55</span>
                  </div>
                  <input
                    type="text"
                    placeholder={client.telefone}
                    className="input-card-profile"
                    id="tel-input"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="info-contact">
            <div>
              <div className="card-info text">
                <label>E-mail cadastrado</label>
                <div className="contact-box">
                  <span>
                    <img className="icon" src="/IconEmail.svg" alt="Icon Email" />
                  </span>
                  <p className="text">{client.email}</p>
                </div>
                <button className="add-button" onClick={openModalEmail}>+ Atualizar e-mail</button>
              </div>

              <div className="card-info">
                <label className="text">Endereço cadastrado</label>
                <div className="contact-box">
                  <span>
                    <img className="icon" src="/Loc.svg" alt="Endereço" />
                  </span>
                  <p className="text">{client.endereco ? `${client.endereco.rua}, ${client.endereco.numero}` : "Endereço não informado"}</p>
                </div>
                <button className="add-button" onClick={openModalEndereco}>+ Atualizar endereço</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;