"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function PedidosDePagamento({dados}:{dados:string}) {
    const [statosExibir, setStatosExibir] = useState(false)
    const [statosExibirAceites, setStatosExibirAceites] = useState(false)
    let dadosPedido = JSON.parse(dados) 
    const router = useRouter()     
    if(statosExibir){

        if(statosExibirAceites){
            const filterAnalise =  dadosPedido.filter((item:any)=>item.statos == 'Confirmado')
            dadosPedido=filterAnalise
        }else{
            const filterAnalise =  dadosPedido.filter((item:any)=>item.statos == 'Negado'||item.statos=="Cancelado pelo encarregado")
            dadosPedido=filterAnalise
        }
    }else{
      const filterAnalise =  dadosPedido.filter((item:any)=>item.statos == 'Em analise')
      dadosPedido=filterAnalise
    }



  return (
    <div className='flex flex-col items-center justify-center  w-[100%] '>
    <div className="w-[100%] flex flex-col justify-center items-center gap-4 p-2">
    <span className=" font-extralight text-2xl text-gray-300 mt-2">Pedidos de pagamento de propina : {dadosPedido.length}</span>

    <div className='flex items-center justify-center  w-[100%] gap-4 p-[2rem]'>
      <button type='button' onClick={(()=>setStatosExibir(false))} className='px-[2rem] hover:bg-white/70 py-[.5rem] bg-white/30 backdrop-blur-lg text-[12px] font-semibold uppercase rounded-lg' >Recentes</button>
      <button type='button' onClick={(()=>setStatosExibir(true))} className='px-[2rem] hover:bg-white/70 py-[.5rem] bg-white/30 backdrop-blur-lg text-[12px] font-semibold uppercase rounded-lg' >Já processado</button>
    </div>
  </div>

        { 
           statosExibir?     
           <>
           <div className='flex items-center justify-center  w-[100%] gap-4 p-[2rem]'>
      <button type='button' onClick={(()=>setStatosExibirAceites(false))} className='px-[2rem] hover:bg-white/70 py-[.5rem] bg-white/30 backdrop-blur-lg text-[12px] font-semibold uppercase rounded-lg' >Negados</button>
      <button type='button' onClick={(()=>setStatosExibirAceites(true))} className='px-[2rem] hover:bg-white/70 py-[.5rem] bg-white/30 backdrop-blur-lg text-[12px] font-semibold uppercase rounded-lg' >Aceites</button>
    </div>
    <div className='w-[100%] p-4 gap-2 grid grid-rows-2 h-[70vh] md:w-[80%] max-sm:w-[100%] md:h-[100vh]   max-sm:h-[100vh] max-sm:pt-[8rem] overflow-y-scroll bg-slate-100 rounded-lg'>

       {dadosPedido?.map((items:any, key:any)=>(

<div key={key} className="w-auto max-sm:w-[90%] gap-2 h-[300px] flex max-sm:flex-col md:flex-col md:h-[100%] max-sm:h-[100%] bg-black  p-4  pr-0 mr-0 rounded-2xl hover:scale-[1.01] duration-100 ">
             <Link href={`/pedidoDePagamento/${items?._id}`} className="p-4" >
            <div className="relative w-[200px] h-[150px] flex flex-row mr-2">
                <Image
                src={"/assets/img5.jpg"}
                alt="interprete"
                fill
                className="object-cover"
                />
                </div>
                <div className="flex flex-col">
                
                <h1 className=" font-bold text-[14px]">{items?.nomeEncarregado}</h1>
                    <span className="flex ">
                    <p className="font-normal text-[12px] ">{items?.createDate}</p>
                    <div className="relative rounded-full w-[8px] h-[8px] bg-green-500 ml-2 mt-2 "/>
                    </span>
                </div>
                </Link> 

                <div  className="flex flex-row gap-4">
                    <p className="text-[12px] font-normal uppercase" >Valor:<span className="font-bold text-yellow-600">{items?.total}</span></p>
             
                </div>

                <div  className="flex flex-row gap-4">
                <span className={`text-[14px] font-bold ${items.statos == 'Negado'||items.statos=="Cancelado pelo encarregado"? 'text-red-500':'text-green-500'}`}>{items?.statos}</span>
                </div>
            </div>
    ))}
       </div>
       </>
          :
          <div className='w-[100%] p-4 gap-2 grid grid-rows-2 h-[70vh] md:w-[80%] max-sm:w-[100%] md:h-[100vh]   max-sm:h-[100vh] max-sm:pt-[8rem] overflow-y-scroll bg-slate-100 rounded-lg'>
       {dadosPedido?.map((items:any, key:any)=>(

            <div key={key} className="w-auto max-sm:w-[90%] gap-2 h-[300px] flex max-sm:flex-col md:flex-col md:h-[100%] max-sm:h-[100%] bg-black  p-4  pr-0 mr-0 rounded-2xl hover:scale-[1.01] duration-100 ">
            <Link href={`/pedidoDePagamento/${items?._id}`} className="p-4" >
                <div className="relative w-[200px] h-[150px] flex flex-row mr-2">
                <Image
                src={"/assets/img5.jpg"}
                alt="interprete"
                fill
                className="object-cover"
                />
                </div>
                <div className="flex flex-col">
                
                <h1 className=" font-bold text-[14px]">{items?.nomeEncarregado}</h1>
                    <span className="flex ">
                    <p className="font-normal text-[12px] ">{items?.createDate}</p>
                    <div className="relative rounded-full w-[8px] h-[8px] bg-green-500 ml-2 mt-2 "/>
                    </span>
                </div>
                </Link> 

                <div  className="flex flex-row gap-4">
                    <p className="text-[12px] font-normal uppercase" >Valor:<span className="font-bold text-yellow-600">{items?.total}</span></p>
             
                </div>

                <div  className="flex flex-row gap-4">
                <button type="button" className="bg-green-600 rounded-lg p-[4px]"
               onClick={()=>router.push(`/pedidoDePagamento/${items?._id}`)} >

        <span className="text-[10px] font-bold">Confirmar Pagamento</span>
        </button>
                </div>
            </div>
    ))}
       </div>
         
          }


       </div> 

  )
}

export default PedidosDePagamento