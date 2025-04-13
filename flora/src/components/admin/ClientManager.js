import React, { useState } from "react";
import './ProductManager.css';

const ClientManager = ({ clients }) => {
  const [modalType, setModalType] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  const openEditModal = (client) => {
    setSelectedClient(client);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedClient(null);
  };

  const deleteClient = async (id) => {
    try {
      const response = await fetch(`https://apilojaflora.onrender.com/client/deleteClient/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar cliente");
      }

      alert("Cliente deletado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      alert("Erro ao deletar cliente. Tente novamente.");
    }
  };

  return (
    <div className="product-manager-container">
      <div className="crud-header">
        <h2>Gerenciar Clientes</h2>
        <button className="add-button-admin">+ Adicionar Cliente</button>
      </div>

      {modalType === "edit" && selectedClient && (
        <div className="modal-overlay">
          <div className="modal modal-scrollable">
            <h2>Editar Cliente</h2>

            <div className="modal-form-scroll">
              <label>Nome completo <span>*</span></label>
              <input type="text" placeholder={selectedClient.nomeCompleto} className="input-card-profile-modal" />

              <label>Usuário <span>*</span></label>
              <input type="text" placeholder={selectedClient.nomeUsuario} className="input-card-profile-modal" />

              <label>E-mail <span>*</span></label>
              <input type="text" placeholder={selectedClient.email} className="input-card-profile-modal" />

              <label>Telefone <span>*</span></label>
              <input type="text" placeholder={selectedClient.telefone} className="input-card-profile-modal" />

              <label>Gênero <span>*</span></label>
              <input type="text" placeholder={selectedClient.genero || "Não informado"} className="input-card-profile-modal" />

              <label>Imagem (URL) <span>*</span></label>
              <input type="text" placeholder={selectedClient.fotoPerfil || "https://via.placeholder.com/150"} className="input-card-profile-modal" />
            </div>

            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button">Salvar</button>
            </div>
          </div>
        </div>
      )}

      <div className="products-scroll">
        {clients.map((client, index) => (
          <div key={index} className="product-card-crud">
            <div className="info-product-crud">
              <img
                className="product-image"
                src={client.fotoPerfil || "https://via.placeholder.com/150"}
                alt="Cliente"
              />
              <div>
                <p className="text-client"><span className="bold">ID:</span> {client.id}</p>
                <p className="text-client"><span className="bold">Nome:</span> {client.nomeCompleto}</p>
                <p className="text-client"><span className="bold">Usuário:</span> {client.nomeUsuario}</p>
                <p className="text-client"><span className="bold">E-mail:</span> {client.email}</p>
                <p><span className="bold">Telefone:</span> {client.telefone}</p>
              </div>
            </div>
            <div className="product-actions">
              <button className="edit-button" onClick={() => openEditModal(client)}>Editar</button>
              <button className="delete-button" onClick={() => deleteClient(client.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManager;