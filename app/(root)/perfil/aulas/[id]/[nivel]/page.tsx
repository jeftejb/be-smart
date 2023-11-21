import Videos from "@/components/Videos"
export default function Page({params}:{params:{id:string, nivel:string}}){
    return(

        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[200px] w-full items-center justify-center ">

            <h1 className="my-10">Aulas de nivel: <span className="text-xl text-green-500" >{params.nivel}</span></h1>

            <div>

            <div className="relative flex px-4 py-2  mb-4 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Adicionar aula</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-red-500 "/>
                    
                 </div>

            </div>

        <div className="grid grid-col gap-4 p-6 w-full ">
            
            <Videos/>

        </div>
         </div>
        </section>
    )

}

 