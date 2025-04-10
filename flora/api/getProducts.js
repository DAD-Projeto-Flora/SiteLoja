export default async function handler(req, res) {
    try {
      const response = await fetch("https://apilojaflora.onrender.com/product/getProducts");
  
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos da API");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Erro no handler da API:", error);
      res.status(500).json({ error: error.message });
    }
  }
  