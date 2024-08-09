"use client"

import { updatePedido } from '@/lib/actions/alunos.actions'
import React from 'react'

function BotaoPedido(id:any){

    const handelClick = async (actual:string)=>{
        const item = actual
      alert(item)
              await updatePedido({id:id, dado:item})
     }

  return (
<div className="relative  w-full h-full flex max-sm:flex-col flex-row p-4 justify-between gap-[2rem] ">

                 

<div className="flex flex-col ">
    <h5 className="text-center text-[14px] uppercase font-bold">Confirmar pedido de pagamento</h5>
    <button type="button" onClick={(e)=>handelClick("Confirmado")} className="p-2 rounded-lg bg-green-500 text-[12px] font-semibold uppercase">Confirmar pagamento</button>
    <span className="text-[11px] font-normal text-gray-200">
        Ao aceitar o pedido de pagamento, será enviado um e-mail ao aluno, ou encarregado de educação informando que o seu  pedido foi aceite. 
    </span>
</div>

<div className="flex flex-col ">
    <h5 className="text-center text-[14px] uppercase font-bold">Rejeitar pedido de pagamento</h5>
    <button type="button" onClick={(e)=>handelClick("Negado")} className="p-2 rounded-lg bg-red-500 text-[12px] font-semibold uppercase">Rejeitar pagamento </button>
    <span className="text-[11px] font-normal text-gray-200">
        Ao rejeitar o pedido de pagamento, será enviado um e-mail ao aluno, ou encarregado de educação informando que o seu  pedido foi negado.  
    </span>
</div>


</div>
  )
}

export default BotaoPedido