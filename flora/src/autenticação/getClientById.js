// src/api/clientApi.js

export const getClientById = async (id) => {
    try {
      const response = await fetch('https://apilojaflora.onrender.com/client/getClient/' + id);
      if (!response.ok) {
        throw new Error("Erro ao buscar cliente");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na API:", error);
      throw error;
    }
  };
  