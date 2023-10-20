import Image from "next/image";
import Link from "next/link";


export default function PagamentoAluno({params}:{params:{id:string}}){
     const mesesPagos = [
        {anoDePagamento:2022, anoConfirmacao:2023, mesDeConfirmacao:9, meses:[9,10,11]} 
    ]
    const mesesDePagamentos = [9,10,11,12,1,2,3,4,5,6]
    const mesesActuais = new Date()
   const dataActual = mesesActuais.getFullYear()
   const mesActual = mesesActuais.getMonth()+1


   mesesDePagamentos.map((item)=>{
    if(item === mesesPagos[0].mesDeConfirmacao){
        if(dataActual !== mesesPagos[0].anoConfirmacao){

            const  verificar = (mesesDePagamentos:any)=>{
               return mesesDePagamentos === mesesPagos[0].mesDeConfirmacao
            }

           const cm = mesesDePagamentos.filter(verificar)
            const posicao = mesesDePagamentos.indexOf(cm[0])
            const mesesDevendo = mesesDePagamentos.slice(posicao)
            const calculoDosMesesPagos = mesesDevendo.length - mesesPagos[0].meses.length
            console.log(calculoDosMesesPagos)

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
            const totalDivida = (posicaoMesActual-posicaoMespagamento + 1) - mesesPagos[0].meses.length 
         
        

    }
    
    }
    
 
   })
    

    return(
        <section className="relative w-full h-full top-0 left-0">

            <section className="w-full h-full flex flex-col mt-24 px-12 max-sm:px-4 py-28 items-center justify-center ">
                <h1 className="text-center my-10">Pagamento de Propinas</h1>

                <Link href={`/kistotico-de-pagamentos-aluno`} className="px-[20px] py-[2px] bg-rose-400 rounded-2xl mb-[20px]">Historico de pagamentos</Link>
               
                  <div className="grid grid-cols-2 w-full h-full max-md:grid-cols-1   gap-2 py-2   ">
                     <div className="flex flex-col w-full h-full  max-sm:px-3 items-center justify-center px-4 shadow-2xl shadow-rose-400 rounded-2xl ">
                        <div className="relative h-24 w-24 my-3">
                            <Image
                            src={"/assets/img5.jpg"}
                            alt="imagem alunoi"
                            fill
                            className="rounded-full absolute "
                            />

                        </div>

                        <div className="flex flex-col w-full gap-2">
                             <h3>Nome: <span>{"Joao paulo Ferando"}</span></h3>
                             <p>Nivel: {'Intermediario'}</p>
                             <p>Professor: {"Jose Ajusto Fernando"}</p>
                             <p>Telefone-aluno: {"9392738702"}</p>
                             <p>Email: {"jao@gmail.com"}</p>  
                            <span className="" >Stato de pagemnto: <span className="text-green-500" >{'Activo'}</span></span>
                            <span className="" >Stato de matricula: <span className="text-green-500" >{'Activo'}</span></span>
                        </div>

                     </div>

                     <div className="flex flex-col w-full h-full max-md:mt-7 shadow-2xl shadow-rose-400 px-4 rounded-2xl">

                     <form action="" data-aos='fade-down' className="flex flex-col  text-[#000] py-7 w-full  justify-center items-center ">
          
 
                     <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" name="" id="">
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" disabled >Messes a pagar</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value={0}> Pendente </option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value={1}>  1 - Mês</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={2}> 2 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={3}> 3 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={4}> 4 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={5}> 5 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={6}> 6 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={7}> 7 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={8}> 8 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={9}> 9 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={10}> 10 - Mêses</option>
               </select>
               <h1 className="text-center text-white">Meses a pagar </h1>
                    <div className="w-full grid grid-cols-3 max-md:grid-cols-2 text-white p-2 gap-2 ">
                         
                        <div className="border-2 border-rose-400">
                         <label htmlFor="janeiro">Janeiro:</label>
                         <input type="checkbox" name="" id="janeiro" className="m-2"/>
                        </div>
                        
                         <div className="border-2 border-rose-400">
                         <label htmlFor="fevereiro">Fevereiro:</label>
                         <input type="checkbox" name="" id="fevereiro" className="m-2"/>
                        </div>
                        
                         <div className="border-2 border-rose-400">
                            <label htmlFor="marco">Marco:</label>
                         <input type="checkbox" name="" id="marco" className="m-2"/>
                        </div>

                         <div className="border-2 border-rose-400">
                        <label htmlFor="abril">Abril:</label>
                        <input type="checkbox" name="" id="abril" className="m-2"/>
                        </div>

                         <div className="border-2 border-rose-400">
                        <label htmlFor="maio">Maio:</label>
                        <input type="checkbox" name="" id="maio" className="m-2"/>
                        </div>

                         <div className="border-2 border-rose-400">
                           <label htmlFor="junho">Junho:</label>
                         <input type="checkbox" name="" id="junho" className="m-2"/>
                        </div>

                      

                         <div className="border-2 border-rose-400">
                        <label htmlFor="setembro">Setembro:</label>
                        <input type="checkbox" name="" id="setembro" className="m-2"/>
                        </div>

                         <div className="border-2 border-rose-400">
                         <label htmlFor="outubro">Outubro:</label>
                        <input type="checkbox" name="" id="outubro" className="m-2"/>
                        </div>

                         <div className="border-2 border-rose-400">
                         <label htmlFor="novembro">Novembro:</label>
                         <input type="checkbox" name="" id="novembro" className="m-2"/>
                        </div>
                    
                         <div className="border-2 border-rose-400">
                         <label htmlFor="dezembro">Dezembro:</label>
                        <input type="checkbox" name="" id="dezembro" className="m-2"/>
                        </div>
                    </div>
              

                <button className="px-5 py-2 border border-pink-300  text-white mt-2 hover:bg-[#ef4444] ">Efectuar pagamento</button>

                <div className="relative flex  w-full h-[100px]  ">
                    <div className="relative flex flex-col   w-full h-full items-center justify-center" >
                    <span className="text-white ">Total a pagar:{12000}Kz</span>
                    <p className="text-white ">Meses devendo:{2}  <span>valor: {5000}kz</span>Kz</p>
                    </div>

                </div>
            </form>
                     </div>                    

                  </div>
            </section>

        </section>

    )
}