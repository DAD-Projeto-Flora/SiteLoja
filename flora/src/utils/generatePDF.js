import { jsPDF } from "jspdf";


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

  const logoDataURL = await loadLogo('/floraLogo.svg');

  doc.addImage(logoDataURL, 'SVG', 20, 10, 30, 15); 

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Comprovante de Pagamento", 105, 40, { align: "center" });

  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Endereço: ${userInfo.address}`, 20, 65);
  doc.text(`Bairro: ${userInfo.neighborhood || ''}`, 20, 75);
  doc.text(`Complemento: ${userInfo.complement || ''}`, 20, 85);
  doc.text(`Número: ${userInfo.number || ''}`, 20, 95);
  doc.text(`Cidade: ${userInfo.city}`, 20, 105);
  doc.text(`Estado: ${userInfo.state}`, 20, 115);
  doc.text(`CEP: ${userInfo.zip}`, 20, 125);

  doc.line(20, 135, 190, 135);


  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Resumo do Pedido", 20, 145);

  let startY = 155;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  orderSummary.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name}: R$ ${item.price.toFixed(2)}`, 20, startY);
    startY += 10;
  });

  doc.line(20, startY + 5, 190, startY + 5);


  const total = orderSummary.reduce((acc, item) => acc + item.price, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`Total: R$ ${total.toFixed(2)}`, 20, startY + 15);


  doc.save("comprovante_pagamento.pdf");
};

export default generatePDF;