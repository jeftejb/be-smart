import AdminItem from "@/components/AdminItem"
import PerfilItem from "@/components/ui/PerfilItem";
import { fetchFuncionario, fetchFuncionarioID } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { BookOpenCheckIcon, ClipboardCheckIcon, CreditCardIcon, Divide, NewspaperIcon, UserIcon } from 'lucide-react'

const getUserData = async  (id:string)=>{
try {
    const userLog =  await currentUser();
    const user = await fetchFuncionarioID(id)
    return{currentUser:userLog, user:user}
} catch (error) {
    
}
}

export default async function Page({params}:{params:{id:string}}){
    const id = params.id
   const user:any = await getUserData(id)

  
    if (!user?.currentUser) return null;



    return( 
        <div className="w-full top-0 left-0">
           <div className="w-full mt-[180px] flex flex-col items-center">
            <div className="relative w-[100%] h-[50vh]">
            <PerfilItem/>
            </div>
                <AdminItem id={params.id}/>
           </div>
        </div>
         
        
    )
    
}