
import FormMatriculaAdmin from "@/components/FormMatriculaAdmin";
import FormMatricula from "@/components/formMatricula";
//import AccountProfile from "@/components/forms/AccountProfile";
import { fetchAluno } from "@/lib/actions/alunos.actions";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface Props{
    admin:boolean
}

async function Page({admin}:Props) {
    const user = await currentUser();
    if(!user) return null;
    const alunoInfo = await fetchAluno(user.id);
    const funcionarios = await fetchFuncionario(user.emailAddresses[0].emailAddress);
if(!funcionarios){
    if(alunoInfo?.onboarded) redirect('/')

   const userData = {
        id: user?.id,
        objectId:alunoInfo?._id,
        username: alunoInfo ? alunoInfo?.username :user?.username,
        nome: alunoInfo?  alunoInfo?.nome : user?.firstName|| "", 
        email: alunoInfo?  alunoInfo?.email : "",
        image: alunoInfo ? alunoInfo?.image : user?.imageUrl,
        telefone:alunoInfo?.telefone,
        isAdmin: alunoInfo?.isAdmin, 
        dataNascimento: alunoInfo?  alunoInfo?.dataNascimento : "", 
        idade: alunoInfo?  alunoInfo?.idade : "",
        
   }
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 mt-24" >
            <h1 className="head-text"> Matricula</h1>
            <p className="mt-3 text-base-regular text-light-2" >
                Complete sua matricula
            </p>

            <section className="mt-4 bg-dark-2 p-3">
               
                
            <div>
           <FormMatriculaAdmin admin={admin} email={user?.emailAddresses[0].emailAddress} id={user?.id}/>
           </div>
                

            </section>
        </main>
    )

}else{
    redirect(`/perfil/${user.id}`)
}
}



export default Page;