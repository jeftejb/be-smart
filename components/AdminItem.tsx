'use client'
import {adminItens} from '@/constants/index'
import { AcademicCapIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'

interface Props{
    id:string, 
    nivelDeAcessoAdmin:number
}
const AdminItem = ({id, nivelDeAcessoAdmin}:Props)=>{
    return(
        <div className="relative w-[80%] mt-[4rem] h-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 sm:grid-rows-2 px-10 py-20 gap-4 justify-center items-center bg-[#00303C] rounded-xl ">
        {
            adminItens.map((item , index)=>{

               if(nivelDeAcessoAdmin === 1){
                  return(
                    <Link key={index} href={`${item.link}/${id}`} className='w-full h-full'>
                    <div  className='' id='service-card' data-aos='fade-up' >
                    <div id='service-circle' ></div>
                    <div className='w-[5rem] h-[5rem]' dangerouslySetInnerHTML={{ __html:item.icon}} >
                        
                    </div>
                     
                    <h1 className='relative font-bold p-[4px] text-2xl'>{item.title}</h1>
                    <p id='service-desc' >{item.texto}</p>
                   
                    </div>
                    </Link>
                  )
               }else if(nivelDeAcessoAdmin === 2){
                return(
                    item.title === "Matricula" || item.title === "Pagamentos" ?
                    <Link key={index} href={`${item.link}/${id}`} className='w-full h-full'>
                    <div  className='' id='service-card' data-aos='fade-up' >
                    <div id='service-circle' ></div>
                    <div className='w-[5rem] h-[5rem]' dangerouslySetInnerHTML={{ __html:item.icon}} >
                        
                    </div>
                     
                    <h1 className='relative font-bold p-[4px] text-2xl'>{item.title}</h1>
                    <p id='service-desc' >{item.texto}</p>
                   
                    </div>
                    </Link>
                    :""
                )
               }else{
                return(
                    item.title != "Matricula" && item.title != "Pagamentos" && item.title != "Funcionarios" ?
                    <Link key={index} href={`${item.link}/${id}`} className='w-full h-full'>
                    <div  className='' id='service-card' data-aos='fade-up' >
                    <div id='service-circle' ></div>
                    <div className='w-[5rem] h-[5rem]' dangerouslySetInnerHTML={{ __html:item.icon}} >
                        
                    </div>
                     
                    <h1 className='relative font-bold p-[4px] text-2xl'>{item.title}</h1>
                    <p id='service-desc' >{item.texto}</p>
                   
                    </div>
                    </Link>
                    :""
                )
             
               }
               

                })
        }

       
        </div>
    )

}
export default AdminItem