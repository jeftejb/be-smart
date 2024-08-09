import Image from "next/image"
import Link from "next/link"

 

 const page = ({params}:{params:{id:string}})=>{

    return(
        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[100px] w-full items-center justify-center  ">
            <h1 className="text-[18px] font-bold text-center">Actividades</h1>

          <div className="w-full  p-[8rem] items-center justify-center h-full grid gap-[4rem] grid-cols-2">
               <div className="w-[100%] hover:scale-[1.1] flex flex-col h-[350px] bg-slate-950 rounded-xl border border-white items-center justify-center">
                 <div className="w-full h-full gap-[2rem] items-center justify-center flex flex-col">
                     <h1>Criar actividade</h1>
                     <Link  className="text-[12px] font-normal px-[.7rem] py-[.5rem] bg-[#0b6e4f]" href={`/actividades/criar/${params.id}`}>Criar actividade</Link>
                 </div>
               </div> 
               <div className="w-[100%] hover:scale-[1.1] flex flex-col h-[350px]  bg-slate-950 rounded-xl border border-white items-center justify-center">
                 <div className="w-full h-full gap-[2rem] items-center justify-center flex flex-col">
                     <h1 className="text-[14px] font-bold">Gestor de actividades</h1>
                     <Link className="text-[12px] font-normal px-[.7rem] py-[.5rem] bg-[#0b6e4f]" href={`/actividades/gestorDeActividades/${params.id}`}>Criar actividade</Link>
                 </div>
               </div> 
          </div>
         </div>
        </section>
    )

 }

 export default page