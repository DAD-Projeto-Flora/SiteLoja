import React, { useState } from "react";
import './ProductManager.css';

const ProductManager = ({ products }) => {
  const [modalType, setModalType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedProduct(null);
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://apilojaflora.onrender.com/product/deleteProduct/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar produto");
      }

      alert("Produto deletado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto. Tente novamente.");
    }
  };

  return (
    <div className="product-manager-container">
      <div className="crud-header">
        <h2>Gerenciar Produtos</h2>
        <button className="add-button-admin">+ Adicionar Produto</button>
      </div>

      {modalType === "edit" && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Editar Produto</h2>
            <div className="modal-form">
              <label>Nome <span>*</span></label>
              <input type="text" placeholder={selectedProduct.nome} className="input-card-profile-modal" />

              <label>Quantidade <span>*</span></label>
              <input type="number" placeholder={selectedProduct.qnt} className="input-card-profile-modal" />

              <label>Preço <span>*</span></label>
              <input type="number" placeholder={selectedProduct.precoUnid} className="input-card-profile-modal" />

              <label>URL da Imagem <span>*</span></label>
              <input type="text" placeholder={selectedProduct.urlImagem || "https://via.placeholder.com/150"} className="input-card-profile-modal" />
            </div>

            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button">Salvar</button>
            </div>
          </div>
        </div>
      )}

      <div className="products-scroll">
        {products.map((product, index) => (
          <div key={index} className="product-card-crud">
            <div className="info-product-crud">
              <img
                className="product-image-admin"
                src={product.urlImagem || "https://via.placeholder.com/150"}
                alt="Produto"
              />
              <div>
                <p><span className="bold">ID:</span> {product.id}</p>
                <p><span className="bold">Nome:</span> {product.nome}</p>
                <p><span className="bold">Categoria:</span> {product.categoria.nome}</p>
                <p><span className="bold">Nota Avaliação:</span> {product.notaAvaliacao}</p>
                <p><span className="bold">Quantidade:</span> {product.qnt}</p>
                <p><span className="bold">Preço:</span> R${product.precoUnid.toFixed(2)}</p>
              </div>
            </div>
            <div className="product-actions">
              <button className="edit-button" onClick={() => openEditModal(product)}>Editar</button>
              <button className="delete-button" onClick={() => deleteProduct(product.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;