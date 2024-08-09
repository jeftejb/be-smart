'use client'
import UpdatePropina from "@/lib/actions/alunos.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { meses } from "@/constants";
import Swal from 'sweetalert2'
import generateFaturaPDF from "@/constants/FaturaPdfGenerator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CursosValidation } from "@/lib/validations/Cursos";


interface Props{
    id:string, 
    data:string,
    numeroDeEstudante:number,
    totalMesesPagos:string
    anoInscricao:string,    
    anoConfirmacao: string,
    mesDeConfirmacao: string,
    nome:string,
    imagem:string
}

export default function FormularioDePagamento(
    {id, 
    data, 
    nome,
    imagem,
    numeroDeEstudante, 
    totalMesesPagos, 
    anoInscricao,    
    anoConfirmacao,  
    mesDeConfirmacao}:Props){

    const pahname = usePathname();
    const [dados , setDados] = useState({})
  

   const mesesPagosArr = JSON.parse(totalMesesPagos)
   const anoIns = JSON.parse(anoInscricao)
   const anoConfi = JSON.parse(anoConfirmacao)
   const mesConfi = JSON.parse(mesDeConfirmacao)
   //const mesesPagosArrUni = mesesPagosArr.flat()
   const mesesPagosArrUni = mesesPagosArr.length > 0 ? mesesPagosArr.reduce((item:any, id:any)=>{ return item.concat(id) }) : []
   


    const mesesPagos = [
        {anoIncricao:anoIns||"", anoConfirmacao:anoConfi[anoConfi.length-1]||"", mesDeConfirmacao:mesConfi[mesConfi.length-1]||"", meses:mesesPagosArrUni||""} 
           ]



    const mesesDePagamentos = [9,10,11,12,1,2,3,4,5,6]
    const mesesActuais = new Date()
   const dataActual = mesesActuais.getFullYear()
   const mesActual = mesesActuais.getMonth()+1
   let totalDivida = 0
   let totalDividaPass = 0
   const idade = 22
   let valorApagar = 0.00
   const valorApagarPelaIdade = (idade:any)=>{
    if(idade>=8 && idade <=11){
     return valorApagar=  6500.00
    }else if(idade > 11 && idade <=18 ){
       return valorApagar= 7500.00
    }else if(idade > 18 ){
          return valorApagar =  12000.00
    }else{
        return "Idade nao reconhecida"
    }
   } 
   valorApagarPelaIdade(idade)



   mesesDePagamentos.map((item)=>{
    if(item === mesesPagos[0].mesDeConfirmacao){
        if(dataActual !== mesesPagos[0].anoConfirmacao){

            const  verificar = (mesesDePagamentos:any)=>{
               return mesesDePagamentos === mesesPagos[0].mesDeConfirmacao
            }

           const cm = mesesDePagamentos.filter(verificar)
            const posicao = mesesDePagamentos.indexOf(cm[0])
            const mesesDevendo = mesesDePagamentos.slice(posicao)
             totalDividaPass = mesesDevendo.length - mesesPagos[0].meses.length

           
        }else if(dataActual === mesesPagos[0].anoConfirmacao){
            const  verificarMesPagamento = (mesesDePagamentos:any)=>{
                return mesesDePagamentos === mesesPagos[0].mesDeConfirmacao
             }
             const  verificarMesActual = (mesesDePagamentos:any)=>{
                return mesesDePagamentos === mesActual
             }
 
            const ma = mesesDePagamentos.filter(verificarMesActual)
            const mp = mesesDePagamentos.filter(verificarMesPagamento)
            const posicaoMespagamento = mesesDePagamentos.indexOf(mp[0])
            const posicaoMesActual = mesesDePagamentos.indexOf(ma[0])
             totalDivida = (posicaoMesActual-posicaoMespagamento + 1) - mesesPagos[0].meses.length 
             totalDivida< 0 ? totalDivida = 0 : totalDivida = totalDivida
            
    }
    
    }
    
 
   })

   let mesess: string[] = [];
   let mesessFatura: string[] = []; 
   
   const handelChange = (e:any)=>{
    e.preventDefault()
    if(e.target.name == "meses"){
        mesess.push(e.target.value)
        mesessFatura.push(`${e.target.id}:${valorApagar}`)
        //console.log(mesessFatura)
   }else{
    e.preventDefault()
       setDados((prev)=>{
        mesess=mesess
           return{...prev , [e.target.name]: e.target.value}
        })
   }   
}


   



   const handelSubmit = async (e:any)=>{
    e.preventDefault(); 


    
            const res:any = await UpdatePropina({
            idPropina:id,
            nome:nome,
            modeloPagamento:dados?.modeloPagamento||"",
            meses: mesess,
            valor:valorApagar||"",
            anoConfirmacaoFatura:anoConfi[anoConfi.length-1]||0,
            totalMesesPagos:mesesPagosArr||"", //colocar o total dos meses pagos ate agora 
            numeroEstudante:numeroDeEstudante||"",
            path:pahname||"", 
            valorPago:(Number(dados?.modeloPagamento)*valorApagar)||0,
            mesesDivida:totalDivida||0,
            totalDivida:(totalDivida*valorApagar)||0
        })
        

       if(res?.status == 200){
         
            Swal.fire({
                title: "Parabens",
                text: res?.res,
                icon: "success"
              }).then(()=>{
                Swal.fire({
                    title: "Comprovativo",
                    text: "Pretendes gerar uma fatura!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sim!"
                  }).then(async (result) => {
                    if (result.isConfirmed) {

                        
                      
                        const dadosFatura = {
                            cliente: nome,
                            itens:mesessFatura,
                            dividas:[
                                { descricao: 'Meses', valor: 0 },
                                { descricao: 'Total', valor: 0 },
                            ]
                          };
                        
                         generateFaturaPDF(dadosFatura)
                        
                    }
                  });

              })
         

       }else{
        const erro  = ()=>{
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "error"
              });
         }

         erro()
       }
   
   
    }
    

   
    

    return(

        <form  onSubmit={(e)=>handelSubmit(e)} data-aos='fade-down' action=""  className="flex flex-col  text-[#000] py-7 w-full  justify-center items-center ">
          
 
                     <select className="p-2 mb-4 rounded-3xl hover:bg-green-800 w-[100%] bg-transparent border border-green-600 text-white bg-black" name="modeloPagamento" onChange={(e)=>handelChange(e)} id="">
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black" >Selecionar quantidade de messes a se pagar</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black"  value={0}> Pendente </option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black"   value={1}>  1 - Mês</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "   value={2}> 2 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={3}> 3 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={4}> 4 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "   value={5}> 5 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={6}> 6 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={7}> 7 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={8}> 8 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={9}> 9 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-600 text-white bg-black "  value={10}> 10 - Mêses</option>
               </select>
               <h1 className="text-center text-white">Meses a pagar </h1>
               {dados?.modeloPagamento? "" : <span className="text-center text-red-600 text-[18px] font-bold">Porfavor selecione primeiro a quantidade de meses a se pagar ! </span> }
                    <div className={dados?.modeloPagamento?'w-[100%] grid  lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-2  text-white p-[2rem] gap-[2rem]' : 'w-full grid  lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-2  text-white p-[0.5rem] gap-2 disabled: opacity-75 disabled:pointer-events-none' } >
                   
                         {meses.map((item, key)=>(
                           <div key={key} className={`flex lg:text-[12px] md:text-[12px] max-sm:text-[14px] font-bold border-[4px] rounded-2xl items-center hover:scale-110 transition-all duration-300  justify-center p-[0.5rem] mx-[6px]   ${item.sec <= mesesPagos[0].meses.length ? 'border-green-600' : 'border-red-600'} `}>
                           <label  htmlFor={item.mes}>{item.mes}:</label>
                          {item.sec <= mesesPagos[0].meses.length ?  <input type="checkbox" disabled name="meses" value={item.valor} id={item.mes} className="m-2"  onChange={(e)=>handelChange(e)}  /> : <input type="checkbox" name="meses" value={item.valor} id={item.mes} className="m-2" onChange={(e)=>handelChange(e)}  />}
                          </div>
                         ))}
                    </div>
              

                <button type="submit" className="px-5 py-2 border border-green-600  text-white mt-2 hover:bg-green-500  ">Efectuar pagamento</button>

                <div className="flex  w-[100%] h-[100px] lg:text-[14px] md:text-[12px] max-sm:text-[14px] font-bold uppercase items-center justify-center ">
                    <div className="relative flex flex-col   w-[100%]  items-center justify-center text-center" >
                    <span className="text-white ">Valor total a ser pago:{dataActual === mesesPagos[0].anoConfirmacao ?<span className="text-orange-600"> {(totalDivida * valorApagar).toLocaleString('pt-PT', { style: 'currency', currency: 'AKZ' }) }</span> : <span className="text-orange-600">{ (totalDividaPass * valorApagar).toLocaleString('pt-PT', { style: 'currency', currency: 'AKZ' })}</span>}</span>
                    <p className="text-white ">Meses devendo:{dataActual !== mesesPagos[0].anoConfirmacao? <span className="w-full px-[0.5rem] text-orange-600"> {totalDividaPass}</span>  : <span className="w-full px-[0.5rem] text-orange-600 text-[14px]">{totalDivida}</span>}  <span className="text-yellow-200"> Valor unico a ser pago : {valorApagar.toLocaleString('pt-PT', { style: 'currency', currency: 'AKZ' })}</span></p>
                    </div>

                </div>
                     </form>
    )


}


