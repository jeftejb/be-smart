import AdminItem from "@/components/AdminItem"
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";


export default async function Page({params}:{params:{id:string}}){
    const user = await currentUser();
    if (!user) return null;

     const funcionario = await fetchFuncionario(user?.emailAddresses[0].emailAddress);

    return( 
        <section className="w-full top-0 left-0">
           <div className="relative w-full mt-[200px] gap-9 p-5">
            <h1 className="text-light-1 text-center text-bold text-3xl">Admin</h1>
                <AdminItem id={params.id}/>
           </div>
        </section>
         
        
    )
    
}