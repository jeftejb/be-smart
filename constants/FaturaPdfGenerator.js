// components/FaturaPdfGenerator.js
export default async function generateFaturaPDF(dadosFatura){
    const fonts = {
        Roboto: {
            normal: 'fonts/Roboto-Regular.ttf',
            bold: 'fonts/Roboto-Medium.ttf',
            italics: 'fonts/Roboto-Italic.ttf',
            bolditalics: 'fonts/Roboto-MediumItalic.ttf'
          },
        
    };
  
    const content = [
    { text: `Comprovante de pagamento de Propina: BE-SMART (Academia de linguas)`, fontSize: 14, margin: [0, 0, 0, 10] },
      { text: `Estudante: ${dadosFatura.cliente}`, fontSize: 14, margin: [0, 0, 0, 10] },
      { text: 'Meses Pagos:', fontSize: 12, margin: [0, 0, 0, 10] },
      ...dadosFatura.itens.map(item => ({ text: `${item}`, fontSize: 10, margin: [0, 0, 0, 5] })),
      { text: `Valor Pago: ${dadosFatura.itens.reduce((acc, item) => acc + item.valor, 0)}`, fontSize: 12, margin: [0, 10, 0, 0] },
      { text: `Dividas:`, fontSize: 14, margin: [0, 20, 0, 0] },
      ...dadosFatura.dividas.map(item => ({ text: `${item.descricao}: ${item.valor}`, fontSize: 10, margin: [0, 0, 0, 5] })),
    ];
  
    const pdfMake = require('pdfmake/build/pdfmake');
    pdfMake.vfs = pdfMake.fs = require('pdfmake/build/vfs_fonts').pdfMake.vfs;
  
    const pdf = {
      content,
      defaultStyle: { font: 'Roboto' },
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
        tableHeader: { bold: true, fontSize: 13, color: 'black' },
      },
    };
  
          await  pdfMake.createPdf(pdf).download('fatura.pdf');
  };
  

  