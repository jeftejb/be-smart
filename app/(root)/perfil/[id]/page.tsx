

import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Page({params}:{params:{id:string}}){
    const user = await currentUser();
    if (!user) return null;

     const funcionario = await fetchFuncionario(user?.emailAddresses[0].emailAddress);

       if(funcionario?.funcoes[0] ==="Professor" && funcionario.isAdmin === false){
        redirect(`/perfil/perfilprofessor/${funcionario?._id}`)
       }else if( funcionario?.funcoes[0] ==="Administrativo" && funcionario?.admin === true){
        redirect(`/perfil/perfiladmin/${funcionario?._id}`)
       }else{
        redirect(`/perfil/perfil/${params.id}`)
       }
    
}