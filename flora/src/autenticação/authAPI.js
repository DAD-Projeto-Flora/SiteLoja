export async function verificarUsuario(email, senha) {
    try {
      const responseAdmins = await fetch("https://apilojaflora.onrender.com/admin/getAdmins");
      const admins = await responseAdmins.json();
  
      const admin = admins.find(admin => admin.email === email && admin.senha === senha);
      if (admin) {
        return { tipo: "admin", dados: admin };
      }
  
      const responseClientes = await fetch("https://apilojaflora.onrender.com/client/getClients");
      const clientes = await responseClientes.json();
  
      const cliente = clientes.find(cliente => cliente.email === email && cliente.senha === senha);
      if (cliente) {
        return { tipo: "cliente", dados: cliente };
      }
  
      return { tipo: "nao_encontrado" };
  
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      throw error;
    }
  }
  