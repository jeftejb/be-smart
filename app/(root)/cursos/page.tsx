import Cursos from "@/components/Cursos"
import { currentUser } from "@clerk/nextjs"
const curosos = async ()=>{
    const user  = await currentUser()
    const id = user?.id || ""
    return(
        <section className="relative mt-0 w-full h-full flex flex-col  overflow-hidden left-0">
            <div className="h-full  w-full mt-28 p-9 items-start justify-center  ">
              <h1 className="text-center font-bold text-2xl">Cursos</h1>
            </div>


            <div className="relative grid grid-cols-4 gap-9  w-full h-full px-8 py-9 m-4  left-0 ">
              <Cursos id={id}/>
            </div>
        </section>
       
    )

}

export default curosos