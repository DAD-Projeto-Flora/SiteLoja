import { jsPDF } from "jspdf";

// Função para carregar a imagem da logo e convertê-la para base64
const loadLogo = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    img.onerror = reject;
    img.src = url;
  });
};

const generatePDF = async (userInfo, orderSummary) => {
  const doc = new jsPDF();

  // Carregar a logo
  const logoDataURL = await loadLogo('/floraLogo.svg');

  // Adicionar a logo ao PDF
  doc.addImage(logoDataURL, 'SVG', 20, 10, 30, 15); 

  // Definindo estilos
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Comprovante de Pagamento", 105, 40, { align: "center" });

  // Linha divisória
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);

  // Informações do usuário
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Nome: ${userInfo.name}`, 20, 55);
  doc.text(`Endereço: ${userInfo.address}`, 20, 65);
  doc.text(`Cidade: ${userInfo.city}`, 20, 75);
  doc.text(`Estado: ${userInfo.state}`, 20, 85);
  doc.text(`CEP: ${userInfo.zip}`, 20, 95);

  // Linha divisória
  doc.line(20, 105, 190, 105);

  // Resumo do pedido
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Resumo do Pedido", 20, 115);

  let startY = 125;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  orderSummary.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name}: $${item.price.toFixed(2)}`, 20, startY);
    startY += 10;
  });

  // Linha divisória antes do total
  doc.line(20, startY + 5, 190, startY + 5);

  // Total
  const total = orderSummary.reduce((acc, item) => acc + item.price, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`Total: $${total.toFixed(2)}`, 20, startY + 15);

  // Salvando o PDF
  doc.save("comprovante_pagamento.pdf");
};

export default generatePDF;