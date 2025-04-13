// src/api/clientApi.js

export const getCardByClientId = async (id) => {
    try {
      const response = await fetch('https://apilojaflora.onrender.com/card/getOrderByClientId/' + id);
      if (!response.ok) {
        throw new Error("Erro ao buscar cartao");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na API:", error);
      throw error;
    }
  };
  