"use client"
import SendButton from '@/components/Botao/SendButton'
import { RegistroActividadeAcademica } from '@/lib/actions/actividadesAcademicas.actions';
import { RegistroActividadeRecreativa } from '@/lib/actions/actividadesRecreativas.actions';

import { UploadButton } from '@/lib/uploadthing';
import Image from 'next/image';

import React, { ChangeEvent, useState } from 'react'

interface Props{
  id:string, 
  nome:string|undefined|null
}

function FormularioCriacaoActividade({id, nome}:Props) {
  const [academica , setAcademica] = useState(false)

  const [imagens , setImagens] = useState<any>([])
  const [imagensAcademica , setImagensAcademica] = useState<any>([])

 const  registroform = async (formData:FormData)=>{

  try {
   if(imagens.length == 0 || imagens.length < 2 ) return alert("A buplicação deve ter no minimo 3 imagens obrigado.");
   const titulo = formData.get("titulo")
   const descricao = formData.get("descricao")
  const dados = {
    titulo:titulo,
    descricao:descricao,
    autor:id, 
    nome:nome,
    imagens:imagens
  }
        await RegistroActividadeRecreativa({dados})
  
  }catch (error) {
    
  }
 
  }

  const  registroformAcademica = async (formData:FormData)=>{

    try {
     if(imagensAcademica.length == 0 ) return alert("A buplicação deve ter uma  imagem obrigado.");
     const tituloAcademico = formData.get("tituloAcademico")
     const descricaoAcademico = formData.get("descricaoAcademico")
    const dados = {
      titulo:tituloAcademico,
      descricao:descricaoAcademico,
      autor:id, 
      nome:nome,
      imagens:imagensAcademica
    }
          await RegistroActividadeAcademica({dados})
    
    }catch (error) {
      
    }
   
    }
  return (
    <div className='mt-[50px]  w-full h-full p-[.5rem] justify-center'>
                 <div className='w-full flex h-[50px] bg-slate-950 border-b-[1px] border-white items-center justify-center p-[.2rem] gap-[2px]'>
                    <button onClick={()=>setAcademica(true)} className='p-[1rem] hover:scale-[1.01] hover:bg-green-400 w-full h-full bg-green-900 text-[14px] max-md:text-[10px] font-bold'>Actividade Academica</button>
                    <button onClick={()=>setAcademica(false)} className='p-[1rem] hover:scale-[1.01] hover:bg-green-400 w-full h-full bg-green-900 text-[14px] max-md:text-[10px] font-bold'>Actividade Recreativa</button>
                 </div>

                 <div className='w-full mt-[24px] h-full p-[2rem] max-md:p-[.5rem] flex items-center justify-center'>
                  {
                       academica ?  

                       <form action={registroformAcademica} className='flex flex-col w-full gap-4 p-[4rem] md:p-[.2rem] max-sm:p-[.3rem] rounded-2xl border-white border'>
                        <h1 className='text-center text-[18px] font-bold text-orange-500 max-md:text-[14px]'>Actividade academica </h1>
                       <input className='w-full flex rounded-xl text-[14px] p-[.5rem]  text-black' type="text" name="tituloAcademico" placeholder='Titulo' id="tituloPublicao" required />
                        <textarea className='w-full flex text-black text-[12px] rounded-xl p-[.5rem]' name="descricaoAcademico" id="descricao" maxLength={200} minLength={3} rows={7} cols={20} placeholder='Descrição com 3 caracteres(letras) no minimo e 200 caracteres(letras) no maximo' required></textarea>
                    
                    <div className='w-full flex flex-col items-center justify-center'>
                     <h2 className='text-center font-bold text-[14px]'>Imagens</h2>
                     <div className='flex w-[20%] max-md:w-[80%] bg-yellow-400/30 rounded-2xl items-center justify-center'>
                     <span className='text-[12px] font-bold'>
                            Obs:São permitidas apenas 1 imagem
                     </span>
                     </div>
                    <div className='w-full flex flex-row gap-[8px] flex-wrap p-[.5rem]'>
                    <div className="relative flex flex-col w-full items-center justfay-center gap-[4px]">
                        <span className='text-center text-white text-[12px] '>1ª Imagem</span>           
                             <UploadButton
                 endpoint="imageUploader"
                 onClientUploadComplete={(res) => {
                   // Do something with the response
                    setImagensAcademica((prev:any)=>{
                      return[...prev, res[0].url]
                    })
                 }}
                 onUploadError={(error: Error) => {
                   // Do something with the error.
                   alert(`ERROR! ${error.message}`);
                 }}
                 onBeforeUploadBegin={(files) => {
                   // Preprocess files before uploading (e.g. rename them)
                   return files.map(
                     (f) => new File([f], "renamed-" + f.name, { type: f.type }),
                   );
                 }}
                 onUploadBegin={(name) => {
                   // Do something once upload begins
                   console.log("Uploading: ", name);
                 }}
                 
   
                 className='px-[.5rem] py-[.3rem] text-[12px] w-full  bg-green-700/30 rounded-xl'
               />
                     </div>
                            
                    
                           
                   
                     </div>
                     <div className='w-full  flex flex-row gap-[4px] max-md:items-center max-md:justify-center flex-wrap'>
                           {
                             
                         
                             imagensAcademica.map((items:any, key:any)=>(
                               <div key={key} className='relative w-[200px] max-md:w-[100px]  h-[200px] max-md:h-[100px]'>
                                 <Image
                                 src={`${items}`}
                                 alt="imagemSelecionada"
                                 fill 
                                 className='object-cover'
                                 />
                               </div>
                             ))
   
                            
                           }
                     </div>
                    </div>
                           
                     { imagensAcademica.length !== 0 ? <SendButton/>:""}
                     </form>
                       
                       :
                       <form action={registroform} className='flex flex-col w-full gap-4 p-[4rem] max-md:p-[.3rem] rounded-2xl border-white border'>
                        <h1 className='text-center text-[18px] max-md:text-[12px] text-orange-500 font-bold'>Actividade Recreativa</h1>
                       <input className='w-full flex rounded-xl text-[14px] p-[.5rem]  text-black' type="text" name="titulo" placeholder='Titulo' id="tituloPublicao" required />
                        <textarea className='w-full flex text-black text-[12px] rounded-xl p-[.5rem]' name="descricao" id="descricao" maxLength={200} minLength={3} rows={7} cols={20} placeholder='Descrição com 3 caracteres(letras) no minimo e 200 caracteres(letras) no maximo' required></textarea>
                    
                    <div className='w-full flex flex-col items-center justify-center'>
                     <h2 className='text-center font-bold text-[14px]'>Imagens</h2>
                     <div className='flex w-[20%] max-md:w-[80%] bg-yellow-400/30 rounded-2xl items-center justify-center'>
                     <span className='text-[12px] font-bold'>
                            Obs:São permitidas no minimo 3 imagens
                     </span>
                     </div>
                    <div className='w-full flex flex-row gap-[8px] flex-wrap p-[.5rem]'>
                    <div className="flex flex-col items-center justfay-center gap-[4px]">
                        <span className='text-center text-white text-[12px] '>1ª Imagem</span>           
                             <UploadButton
                 endpoint="imageUploader"
                 onClientUploadComplete={(res) => {
                   // Do something with the response
                    setImagens((prev:any)=>{
                      return[...prev, res[0].url]
                    })
                 }}
                 onUploadError={(error: Error) => {
                   // Do something with the error.
                   alert(`ERROR! ${error.message}`);
                 }}
                 onBeforeUploadBegin={(files) => {
                   // Preprocess files before uploading (e.g. rename them)
                   return files.map(
                     (f) => new File([f], "renamed-" + f.name, { type: f.type }),
                   );
                 }}
                 onUploadBegin={(name) => {
                   // Do something once upload begins
                   console.log("Uploading: ", name);
                 }}
                 
   
                   className='px-[.5rem] py-[.3rem] text-[12px] w-full  bg-green-700/30 rounded-xl'
               />
                     </div>
                            
                     <div className="flex flex-col items-center justfay-center gap-[4px]">
                        <span className='text-center text-white text-[12px] '>1ª Imagem</span>           
                             <UploadButton
                 endpoint="imageUploader"
                 onClientUploadComplete={(res) => {
                   // Do something with the response
                   setImagens((prev:any)=>{
                     return[...prev, res[0].url]
                   })
                 }}
                 onUploadError={(error: Error) => {
                   // Do something with the error.
                   alert(`ERROR! ${error.message}`);
                 }}
                 onBeforeUploadBegin={(files) => {
                   // Preprocess files before uploading (e.g. rename them)
                   return files.map(
                     (f) => new File([f], "renamed-" + f.name, { type: f.type }),
                   );
                 }}
                 onUploadBegin={(name) => {
                   // Do something once upload begins
                   console.log("Uploading: ", name);
                 }}
   
                  className='px-[.5rem] py-[.3rem] text-[12px] w-full flex relative  bg-green-700/30 rounded-xl'
               />
                     </div>
                           
                     <div className="flex flex-col items-center justfay-center gap-[4px]">
                        <span className='text-center text-white text-[12px] '>1ª Imagem</span>           
                             <UploadButton
                 endpoint="imageUploader"
                 onClientUploadComplete={(res) => {
                   setImagens((prev:any)=>{
                     return[...prev, res[0].url]
                   })
                 }}
                 onUploadError={(error: Error) => {
                   // Do something with the error.
                   alert(`ERROR! ${error.message}`);
                 }}
                 onBeforeUploadBegin={(files) => {
                   // Preprocess files before uploading (e.g. rename them)
                   return files.map(
                     (f) => new File([f], "renamed-" + f.name, { type: f.type }),
                   );
                 }}
                 onUploadBegin={(name) => {
                   // Do something once upload begins
                   console.log("Uploading: ", name);
                 }}
   
                  className='px-[.5rem] py-[.3rem] text-[12px] w-full  bg-green-700/30 rounded-xl'
               />
                     </div>
                           
                   
                     </div>
                     <div className='w-full  flex flex-row gap-[4px] flex-wrap'>
                           {
                             
                         
                             imagens.map((items:any, key:any)=>(
                               <div key={key} className='relative w-[200px] max-md:w-[100px]  h-[200px] max-md:h-[100px]'>
                                 <Image
                                 src={`${items}`}
                                 alt="imagemSelecionada"
                                 fill 
                                 className='object-cover'
                                 />
                               </div>
                             ))
   
                            
                           }
                     </div>
                    </div>
                           
                     <SendButton/>
                     </form>
                  }
               

                 </div>
            </div>
  )
}

export default FormularioCriacaoActividade