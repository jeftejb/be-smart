import Image from "next/image"
import FormAtividade from "@/components/FormAtividade";
export default function Page({params}:{params:{id:string, id_modulo:string}}){
const id_modulo = params?.id_modulo;
    const id_user = params?.id;

    return(

        <section className="relative flex w-full h-full top-0 left-0 ">

           <div className="relative flex flex-col w-full h-full mt-20 p-8 items-center justify-center">
                 <div className="w-full m-4 p-8 items-center justify-center">
                    <h1 className="text-center font-bold text-base">
                         Adicionar Atividade
                    </h1>
                 </div>
           <FormAtividade id_user={id_user} id_modulo={id_modulo} titulo={""} imagem={""} descricao={""}/>
           </div>

        </section>


    )

}