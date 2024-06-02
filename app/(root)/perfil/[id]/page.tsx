
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function  getData(){
  try {
    const user = await currentUser();
    const result = {user}
    return result
  } catch (error) {
    
  }
} 

async function  getFuncionario(email:string){
  try {
   const dados =  await fetchFuncionario(email);
    const result = {dados}
    return result
  } catch (error) {
    
  }
} 


export default async function Page({params}:{params:{id:string}}){
  const data:any = await getData() 
    if(!data?.user) return null ;
    const funcionario:any = await getFuncionario(data.user?.emailAddresses[0].emailAddress)

       if(funcionario.dados?.funcoes[0] === "Professor" && funcionario.dados?.admin === false){
        redirect(`/professor/perfil/${funcionario.dados?._id}`)
       }else if( funcionario.dados?.funcoes[0] ==="Administrativo" && funcionario.dados?.admin === true){
        redirect(`/perfil/perfiladmin/${funcionario.dados?._id}`)
       }else{
        redirect(`/perfil/perfil/${params.id}`)
       }
      
    }