import BFuncionario from '@/components/Botao/BFuncionario'
import PedidosDePagamento from '@/components/PedidosDePagamento'
import { SelectAllPedidos } from '@/lib/actions/alunos.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getDados = async ()=>{
    try {
        const buscar  =   await SelectAllPedidos()
        return {buscar:buscar}
    } catch (error) {
        console.log(error)
    }
    
}

async function page() {
    const dadosGet:any  = await getDados();
    const dados:any = dadosGet?.buscar 
    return(
        <section className="flex flex-col w-[100%] justify-center items-center h-[100%]">

            <div className="relative flex flex-col p-20 max-sm:p-8 w-[90%] mt-28 rounded-lg bg-[#00303C] items-center">
               <div className="w-[100%] flex flex-col items-start bg-black rounded-lg p-8">
               <h1 className=" text-[18px] mt-[14px] font-bold uppercase">Pedidos de pagamento de propina: {dados?.length}</h1> 

               <div className="flex flex-row max-sm:flex-col mt-2 gap-8">
                <p className="text-[12px] font-medium uppercase">Valor total a ser processado: <span className="text-yellow-600 font-bold">0.00Kz</span></p>
                <p  className="text-[12px] font-medium uppercase">Ano lectivo de pagamento : <span className="text-green-600 font-bold">2023/2024</span></p>
                <p  className="text-[12px] font-medium uppercase ">Valor total já processado: <span className="text-yellow-300 font-bold">0.00Kz</span> </p>
               </div>
                </div> 

            <div className="relative w-[90%] max-sm:w-[100%] h-full flex flex-col p-4 mt-2 bg-[#09090b] rounded-2xl  ">
                    
          <PedidosDePagamento 
          dados={JSON.stringify(dados)}
          />
             
           </div>

            </div>
       
        </section>
    )
}

export default page