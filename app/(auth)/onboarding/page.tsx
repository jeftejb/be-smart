
import FormMatricula from "@/components/formMatricula";
//import AccountProfile from "@/components/forms/AccountProfile";
import { fetchAlunNumeroEstudante } from "@/lib/actions/alunos.actions";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import {redirect } from "next/navigation";



interface Props{
    admin:boolean
}

async function Page({admin}:Props) {
    const user = await currentUser();
  
    if(!user) return null;

    const funcionario = await fetchFuncionario(user?.emailAddresses[0].emailAddress);

    if(!funcionario){
     
    const alunoInfo = await fetchAlunNumeroEstudante(user?.username);

   
    if(alunoInfo?.onboarded ) return redirect(`/perfil/perfil/${alunoInfo?._id}`);
    const nomeCompleto = alunoInfo?.nomeCompleto || ""
        
        return(
            <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 mt-24" >
                <h1 className="head-text"> Matricula</h1>
                <p className="mt-3 text-base-regular text-light-2" >
                   Ola {user?.username}! Seja bem vindo a familia "SMART" Complete sua matricula para ter total acesso aos nossos sercicos.
                </p>
    
                <section className="mt-4 bg-dark-2 p-3">
                   
                    
                <div>
               <FormMatricula email={user?.emailAddresses[0].emailAddress} id={user?.id} nomeCompleto={nomeCompleto} idade={0} telefone={0} sexo="" nivel="" dataNascimento=""/>
               </div>
                    
    
                </section>
            </main>
        )
        
     
}else{
    redirect(`/perfil/${funcionario?._id}`)
}

   


}



export default Page;