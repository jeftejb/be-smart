"use client"

const BFuncionario = ({id, nome, valor, mes}:{id:string, nome:string, valor:string, mes:string}) => {

    const  ConfirmPayer = ({id, nome, valor, mes}:{id:string, nome:string, valor:string, mes:string})=>{
        alert(id+" "+nome+" "+valor+" "+mes)
         }
    return ( 

        <button type="button" className="bg-green-600 rounded-lg p-[4px]"
        onClick={(()=>ConfirmPayer({id:id, nome:nome,  valor:valor, mes:mes}))}
        > 
        <span className="text-[10px] font-bold">Confirmar Pagamento</span>
        </button>
     );
}
 
export default BFuncionario;