
import FormMatricula from "@/components/formMatricula";
//import AccountProfile from "@/components/forms/AccountProfile";
import { fetchAlunNumeroEstudante } from "@/lib/actions/alunos.actions";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser, Protect } from "@clerk/nextjs";
import {redirect } from "next/navigation";



interface Props{
    admin:boolean

}

const getAlunos = async ()=>{
    try {
        const user= await currentUser();
        return {user:user}
    } catch (error) {
        
    }
}

async function Page({admin}:Props) {
    const dados:any = await getAlunos()
       const user = dados?.user
    if(!user) return null;

    const funcionario = await fetchFuncionario(user?.emailAddresses[0].emailAddress);

    if(!funcionario){
     
    const alunoInfo = await fetchAlunNumeroEstudante(user?.emailAddresses[0].emailAddress);
     
   
    if(alunoInfo?.onboarded && alunoInfo?.email === user?.emailAddresses[0].emailAddress) return redirect(`/perfil/perfil/${alunoInfo?._id}`);
    const nomeCompleto = alunoInfo?.nomeCompleto || ""
        
        return(

            <Protect
        permission="org:team_settings:manage"
        fallback={

            <main className="w-[100%] flex max-w-3xl flex-col justify-start px-4 py-6 mt-12 max-sm:mt-[2rem]" >
            <h1 className="head-text titulos"> Matricula</h1>
            <p className="mt-2 text-gray-300 text-base-regular  text-[14px] font-semibold uppercase" >
               <span className="text-[18px] text-green-600 font-bold">Ola! </span>{user?.username} Seja bem vindo a familia "SMART" Complete sua matricula para ter total acesso aos nossos sercicos.
            </p>

            <section className="mt-4 bg-dark-2">
               
                
            <div className="relative w-full flex flex-col items-center justify-center">
           <FormMatricula email={user?.emailAddresses[0].emailAddress} id={user?.id} nomeCompleto={nomeCompleto} idade={0} telefone={0} sexo="" nivel="" dataNascimento=""/>
           </div>
            </section>
        </main>
        }
      ></Protect>
           
        )
        
     
}else{
    redirect(`/perfil/${funcionario?._id}`)
}

   


}



export default Page;