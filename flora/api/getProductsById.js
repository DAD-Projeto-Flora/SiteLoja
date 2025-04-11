export default async function handler(req, res) {
    try {
      const response = await fetch("https://apilojaflora.onrender.com/product/getProducts");
  
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType.includes("application/json")) {
        throw new Error("Resposta inválida da API externa");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Erro no handler da API:", error);
      res.status(500).json({ error: error.message });
    }
  }
  