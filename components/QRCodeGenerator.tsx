"use client"

//import { FC, useState } from 'react';
//import QRCode from 'react-qr-code';
import  QRCode  from 'qrcode';
//import QRCode from 'react-qr-code';

const QRCodeGenerator =  ({id}:{id:string}) => {
 const text:string = id ;
 
 /*
 
  const urlAtual = typeof window !== 'undefined' ? window.location.href : '';
 function UrlConvert(url:any){
  const urlObj = new URL(url);

  console.log(text)

  const urlArray = {
    protocol: urlObj.protocol,
    host: urlObj.host,
    pathname: urlObj.pathname,
    search: urlObj.search,
    hash: urlObj.hash,
  };

  // Convertendo para um array de valores
  const arrayDeValores = Object.values(urlArray);

  return arrayDeValores;
 }

 //const arrayDeUrl = UrlConvert(urlAtual);

//console.log(arrayDeUrl[0]+"//"+arrayDeUrl[1]);

 // function gerarNumeroAleatorio(min:number, max:number) {
 //   return Math.floor(Math.random() * (max - min + 1)) + min;
 // }
  
  // Exemplo de uso
  //const numeroAleatorio = gerarNumeroAleatorio(100, 100000000);
 */
  const generateQRCode = async () => {
    console.log(text)
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(text);
      let anchor = document.createElement("a");
    anchor.href = qrCodeDataUrl;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
      //console.log(qrCodeDataUrl); // Aqui você pode enviar ou usar a URL gerada conforme necessário
    } catch (error) {
      console.error('Erro ao gerar o QR Code:', error);
    }
  };

  return (
    <div>
      <div>
       <h2>Gerar codigo QR para o funcionario</h2>
      </div>
      <button className='px-8 py-4 bg-green-600 rounded-xl m-4' onClick={generateQRCode}>Gerar QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;