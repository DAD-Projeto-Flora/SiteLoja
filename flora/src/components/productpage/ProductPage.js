import React from "react";

const ProductPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", background: "#fff" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
        <h1 style={{ color: "#004080" }}>flora</h1>
        <nav>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Sobre a Flora</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Parceiros</a>
        </nav>
      </header>
      
      <div style={{ display: "flex", alignItems: "center", gap: "20px", background: "#f8f8f8", padding: "20px", borderRadius: "10px" }}>
        <img src="/path-to-image.jpg" alt="Neutrox Sol Mar E Piscina" style={{ width: "200px", borderRadius: "10px" }} />
        <div>
          <h2>Cond. Creme Para Pentear Neutrox Sol Mar E Piscina</h2>
          <p>
            <span style={{ color: "#FFD700" }}>★★★★☆</span>
          </p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>R$99,99</p>
          <p><strong>Categoria:</strong> Condicionador Creme Neutrox</p>
          <p>
            <strong>Descrição:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button style={{ background: "#004080", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
