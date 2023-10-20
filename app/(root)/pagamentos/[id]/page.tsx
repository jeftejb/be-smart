import Link from "next/link"

export default function Pagamentos({params}:{params:{id:string}}){

    return(
        <section className="relative w-[100%] my-52 items-center text-center " >
<div data-aos='fade-up'>
    <h1 className="font-bold uppercase text-5xl p-6" >Be-Smart</h1>
    <p className="font-bold uppercase ">Ola Seja bem vindo a nossa academia, venha fazer parte desta grande familia</p>
</div>

<div className="flex w-[100%] p-12 my-8">
   
   <Link href={`/pagamentos-alunos/${params.id}`}>
   <div className="border shadow-2xl shadow-pink-300 border-x-pink-300 rounded-2xl hover:scale-110 hover:ease-in duration-300 p-16 m-4">
      <h1 className="mb-[10px] text-2xl font-bold ">Verificar pagamentos de alunos</h1>
      <p className="font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et expedita iusto optio.</p>
   </div>
   </Link>

   <Link href={`/pagamentos-funcionarios/${params.id}`}>
 
   <div className="border shadow-2xl shadow-pink-300 border-x-pink-300 rounded-2xl hover:scale-110 hover:ease-in duration-300 p-16 m-4">
   <h1 className="mb-[10px] text-2xl font-bold ">Verificar pagamentos de Funcionarios</h1>
   <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est cum ducimus.</p> 
   </div>
   </Link>
    
</div>

<div>

</div>

</section>

    )
}




