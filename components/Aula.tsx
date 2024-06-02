"use client"
import { opcoes, tipoDePergunta } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props{
    atividade:any
}


function Aula({atividade}:Props) {
 const [ questoes, setQuestoes] = useState<string[]>([])
 const [pagina, setPagina] = useState('escrita')

   const dados =  JSON.parse(atividade)

   const resposta_certa = "Abacate Laranja Macam Manga" 

   const selecionar = async (e:any)=>{
    e.preventDefault();
    const selectd = questoes.includes(e.target.value)
    if(selectd){ 
       setQuestoes(questoes.filter((quest)=> quest !== e.target.value))
    }  else{
     setQuestoes([...questoes, e.target.value])
    }  
   }

    const retirar = (item:string)=>{

    }

   
   const resposta = (e:any)=>{
    e.preventDefault()
    const questoes_string = questoes.join(" ")
    if(resposta_certa == questoes_string){
    alert("Resposta certa : "+questoes_string )
   }else{
    confirm("Resposta errada : "+questoes_string )
   }
}
   
 const itemPagina = ()=>{
   if(pagina === "Imagem"){
   return (
      <>
             <h1 className="text-center absolute bottom-0  left-[40%] right-[40%]" >Imagem</h1>
       <h1 className="text-center absolute bottom-0  left-[40%] right-[40%]" >1 Pergunta de {dados?.questoes.length + 1}</h1>
     <div className='relative flex flex-col w-full h-full mt-10 p-4 border rounded-xl'>
        <div className='relative flex  w-full h-[30%] p-4 m-2'>
         <div className='relative w-[200px] h-[200px] rounded-full items-center justify-center'>
              <Image
              src={dados?.imagem}
              alt="Teacher image"
              fill
              className='absolute object-contain'
              />
         </div>

         <div className='relative w-full h-full flex flex-col'>
            <div className='relative border w-full h-full p-8 m-4 rounded-xl'>
               <h2>Questao: escreva a seguinte frase: Abacate laranga Macam Manga</h2>
            </div>

            <div className='absolete flex flex-col bottom-0 border w-full h-full p-8 m-4 rounded-xl'>
              <div>
                <h2> Resposta:</h2>
                </div>

                <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
                {questoes && (
                questoes.map((items, key)=>(
                    <button
                     key={key} 
                     className='p-4 border rounded-xl'
                     value={items}
                     onClick={()=>retirar(items)}
                     >
                        {items}
                    </button>
                ))
                )
              }
        
              </div>
                 
            </div>
         </div>
        </div>
     </div>


     <div  className='relative flex flex-col w-full h-full p-8 m-4 items-center justify-center border rounded-xl'>
           <div>
            <h1>Opcoes</h1>
           </div>

           <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
              {
                opcoes.map((items)=>(
                    <button
                     key={items.id} 
                     className='p-4 border rounded-xl'
                     onClick={(e)=>selecionar(e)}
                     value={items.nome}
                     >
                        {items.nome}
                    </button>
                ))
              }
           </div>
     </div>
      </>
   )
}else if(pagina === 'Escrita'){
   return (
      <>
             <h1 className="text-center relative flex flex-col  left-[40%] right-[40%]" >Escrita</h1>
       <h1 className="text-center absolute bottom-0  left-[40%] right-[40%]" >1 Pergunta de {dados?.questoes.length + 1}</h1>
     <div className='relative flex flex-col w-full h-full mt-10 p-4 border rounded-xl'>
        <div className='relative flex  w-full h-[30%] p-4 m-2'>
         <div className='relative w-[200px] h-[200px] rounded-full items-center justify-center'>
              <Image
              src={dados?.imagem}
              alt="Teacher image"
              fill
              className='absolute object-contain'
              />
         </div>

         <div className='relative w-full h-full flex flex-col'>
            <div className='relative border w-full h-full p-8 m-4 rounded-xl'>
               <h2>Questao: escreva a seguinte frase: Abacate laranga Macam Manga</h2>
            </div>

            <div className='absolete flex flex-col bottom-0 border w-full h-full p-8 m-4 rounded-xl'>
              <div>
                <h2> Resposta:</h2>
                </div>

                <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
                {questoes && (
                questoes.map((items, key)=>(
                    <button
                     key={key} 
                     className='p-4 border rounded-xl'
                     value={items}
                     onClick={()=>retirar(items)}
                     >
                        {items}
                    </button>
                ))
                )
              }
        
              </div>
                 
            </div>
         </div>
        </div>
     </div>


     <div  className='relative flex flex-col w-full h-full p-8 m-4 items-center justify-center border rounded-xl'>
           <div>
            <h1>Opcoes</h1>
           </div>

           <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
              {
                opcoes.map((items)=>(
                    <button
                     key={items.id} 
                     className='p-4 border rounded-xl'
                     onClick={(e)=>selecionar(e)}
                     value={items.nome}
                     >
                        {items.nome}
                    </button>
                ))
              }
           </div>
     </div>
      </>
   )
}else{

   return (
      <>
             <h1 className="text-center absolute bottom-0  left-[40%] right-[40%]" >Fala</h1>
       <h1 className="text-center absolute bottom-0  left-[40%] right-[40%]" >1 Pergunta de {dados?.questoes.length + 1}</h1>
     <div className='relative flex flex-col w-full h-full mt-10 p-4 border rounded-xl'>
        <div className='relative flex  w-full h-[30%] p-4 m-2'>
         <div className='relative w-[200px] h-[200px] rounded-full items-center justify-center'>
              <Image
              src={dados?.imagem}
              alt="Teacher image"
              fill
              className='absolute object-contain'
              />
         </div>

         <div className='relative w-full h-full flex flex-col'>
            <div className='relative border w-full h-full p-8 m-4 rounded-xl'>
               <h2>Questao: escreva a seguinte frase: Abacate laranga Macam Manga</h2>
            </div>

            <div className='absolete flex flex-col bottom-0 border w-full h-full p-8 m-4 rounded-xl'>
              <div>
                <h2> Resposta:</h2>
                </div>

                <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
                {questoes && (
                questoes.map((items, key)=>(
                    <button
                     key={key} 
                     className='p-4 border rounded-xl'
                     value={items}
                     onClick={()=>retirar(items)}
                     >
                        {items}
                    </button>
                ))
                )
              }
        
              </div>
                 
            </div>
         </div>
        </div>
     </div>


     <div  className='relative flex flex-col w-full h-full p-8 m-4 items-center justify-center border rounded-xl'>
           <div>
            <h1>Opcoes</h1>
           </div>

           <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
              {
                opcoes.map((items)=>(
                    <button
                     key={items.id} 
                     className='p-4 border rounded-xl'
                     onClick={(e)=>selecionar(e)}
                     value={items.nome}
                     >
                        {items.nome}
                    </button>
                ))
              }
           </div>
     </div>
      </>
   )
}
 }
 
 
  return (
    <div className='relative flex flex-1 flex-col w-full h-full p-8 mt-1'>
    <div className='w-full flex items-center justify-center my-20'>
        <h1 className='text-center font-bold text-lg uppercase'>Aula</h1>
     </div> 

     <div className='relative flex flex-col items-center justify-center w-full h-full p-4 m-2'>
       <div className='w-full items-center flex flex-col'>
        <h1>Tipo de Pergunta</h1>
        <span>Selecione o tipo de pergunta que pretendes construir</span>
        </div>  
        <div className='w-full h-full flex flex-row  items-center justify-center p-4 m-2 gap-4'>
         {tipoDePergunta.map((item , key)=>(
            <Link href={item.link}>
                <div key={key} onClick={(()=>setPagina(item.nome))}  className='border rounded-2xl p-4 m-2'>
                <h3>{item.nome}</h3>
            </div>
            </Link>
         ))}
        </div>
     </div>
     
    {
      itemPagina()
    }
     
     <div className='relative flex p-8 m-4 w-full h-full items-center justify-center'>

        <button
         className='px-36 py-4 bg-green-400 rounded-xl'
         onClick={(e)=>resposta(e)}
         >
            Criar 
        </button>
     </div>
 </div>
         
      )
}

export default Aula
