export const getOrderByClientId = async (id) => {
    try {
      const response = await fetch('https://apilojaflora.onrender.com/order/getOrderByClientId/' + id);
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
  