import axios from "axios";

const updateSenha = async (id, novaSenha) => {
  const url = `https://apilojaflora.onrender.com/product/getProduct/client/partialUpdateClient/${id}`;
  const updates = { senha: novaSenha };

  try {
    const response = await axios.patch(url, updates, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar a senha:", error);
    throw new Error("Não foi possível atualizar a senha.");
  }
};

export default updateSenha;