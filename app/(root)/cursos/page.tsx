import Cursos from "@/components/Cursos"
import { Cursoss } from "@/lib/actions/cursos.actions"
import { currentUser } from "@clerk/nextjs"

const getCursos = async ()=>{
  try {
    const cursos = await Cursoss()
    const user  = await currentUser()
    return {cursos:cursos, user:user}
  } catch (error) {
    
  }
}

const curosos = async ()=>{
 const dados:any = await getCursos()
    const id = dados.user?.id || ""
    
    return(
       <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            
              <h1 className="titulos max-sm:mt-[6rem] max-sm:text-[28px] uppercase ">Cursos</h1>
            


            <div className='relative bg-[#038C73]  rounded-xl lg:p-[3rem] md:p-[2rem]  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto  lg:gap-[3rem] md:gap-[1.5rem] max-sm:gap-[1rem] mt-[4rem] text-white max-sm:p-[1.5rem]'>
            {dados.cursos?.map((items:any, index:any)=>(
              <Cursos items={JSON.stringify(items)} nivel={"iniciante"} id={id} key={index} />
            )) }
            </div>
        </div>
       
    )

}

export default curosos