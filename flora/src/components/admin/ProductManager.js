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

  return (
    <div className="product-manager-container">
      <div className="crud-header">
        <h2>Gerenciar Produtos</h2>
        <button className="add-button-admin">+ Adicionar Produto</button>
      </div>

      {/* Modal de edição */}
      {modalType === "edit" && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Editar Produto</h2>
            <div className="modal-form">
              <label>Nome <span>*</span></label>
              <input type="text" placeholder={selectedProduct.name} className="input-card-profile-modal" />

              <label>Marca <span>*</span></label>
              <input type="text" placeholder={selectedProduct.brand} className="input-card-profile-modal" />

              <label>Quantidade <span>*</span></label>
              <input type="number" placeholder={selectedProduct.qnt} className="input-card-profile-modal" />

              <label>Preço <span>*</span></label>
              <input type="number" placeholder={selectedProduct.price.toFixed(2)} className="input-card-profile-modal" />

              <label>URL da Imagem <span>*</span></label>
              <input type="text" placeholder={selectedProduct.image || "https://via.placeholder.com/150"} className="input-card-profile-modal" />
            </div>

            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button">Salvar</button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de produtos */}
      <div className="products-scroll">
        {products.map((product, index) => (
          <div key={index} className="product-card-crud">
            <div className="info-product-crud">
              <img
                className="product-image-admin"
                src={product.image || "https://via.placeholder.com/150"}
                alt="Produto"
              />
              <div>
                <p><span className="bold">ID:</span> {product.id}</p>
                <p><span className="bold">Nome:</span> {product.name}</p>
                <p><span className="bold">Marca:</span> {product.brand}</p>
                <p><span className="bold">Quantidade:</span> {product.qnt}</p>
                <p><span className="bold">Preço:</span> R${product.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="product-actions">
              <button className="edit-button" onClick={() => openEditModal(product)}>Editar</button>
              <button className="delete-button">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
