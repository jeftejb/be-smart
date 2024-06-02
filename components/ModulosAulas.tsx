import Image from "next/image";
import {titleModels} from '@/constants/index'
import Link from "next/link";

interface Props{
    id:string
}
export default function ModulosAulas({id}:Props){
    return(

        titleModels.map((item, index)=>{
          
            return(
            <Link href={`/perfil/${item.link}/${id}/${item.nivel}`} className=" relative w-full h-[480px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
                <div className="absolute w-full h-full rounded-tr-3xl rounded-tl-3xl brightness-[0.2] ">
                    <Image
                    src={item.imageFundo}
                    alt="image fundo"
                    fill
                    className="object-cover rounded-tr-3xl rounded-tl-3xl"
                    />

                </div>
                <div className="absolute w-full h-full "/>
        <div className="relative flex flex-col w-full h-[400px]  rounded-3xl  rounded-tr-3xl rounded-tl-3xl " key={index} >
        <div className="relative flex  rounded-3xl h-[400px] justify-center   m-8 ">
         <Image
         src={item.image}
         alt="Itens"
         fill
         className="object-cover rounded-3xl"
         />
        </div>
            
            <div className="relative w-full mt-4">
                <div className=" relative flex justify-between mx-4">
                 <h1 className=" font-semibold text-sm " >Nivel: <span className="text-green-500">{item.nivel}</span></h1>

                 <div className="relative flex px-2 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <span className=" relative overflow-visible font-normal text-sm">Desabilitado</span>
                    <div className="relative rounded-full w-[10px] h-[10px] bg-red-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-2 px-4 mx-2 font-normal text-sm">
                   {item.desc}
                 </p>

            </div>
            
          
      </div>
      <div className="absolute bottom-0">
            <h1>Numero de aulas: <span className="text-green-500 text-xl">2</span></h1>
            </div>
            </Link>
            )
})
    )
}