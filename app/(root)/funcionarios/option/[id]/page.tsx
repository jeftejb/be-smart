import Link from "next/link"

export default function Pagamentos({params}:{params:{id:string}}){

    return(
        <section className="relative w-[100%] my-52 items-center text-center flex flex-col " >
<div data-aos='fade-up'>
    <h1 className="font-bold uppercase text-5xl p-6" >Be-Smart</h1>
    <p className="font-bold uppercase ">Ola Seja bem vindo a nossa academia, venha fazer parte desta grande familia</p>
</div>

<div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 w-[90%] gap-4 p-12 my-8 bg-[#00303C]  justify-center rounded-xl">
   
   <Link href={`/funcionarios/cadastro/${params.id}`}>
   <div className="border shadow-xl bg-black  shadow-green-500 border-x-green-500 rounded-xl  hover:scale-110 hover:ease-in duration-300 p-16 m-4">
      <h1 className="mb-[10px] text-xl  font-bold ">Cadastro de Funcionarios</h1>
   </div>
   </Link>

   <Link href={`/pagamentos-funcionarios/${params.id}`}>
 
   <div className="border shadow-xl bg-black  shadow-green-500 border-x-green-500 rounded-xl  hover:scale-110 hover:ease-in duration-300 p-16 m-4">
   <h1 className="mb-[10px] text-xl  font-bold ">Verificar pagamentos de funcionarios</h1>

   </div>
   </Link>

   <Link href={`/funcionarios/informacoes/${params.id}`}>
 
 <div className="border shadow-xl bg-black  shadow-green-500 border-x-green-500 rounded-xl  hover:scale-110 hover:ease-in duration-300 p-16 m-4">
 <h1 className="mb-[10px] text-xl  font-bold ">Verificar Informações dos funcionarios</h1>

 </div>
 </Link>
    
</div>

<div>

</div>

</section>

    )
}




