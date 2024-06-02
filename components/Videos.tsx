'use client'
import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
export default  function Videos(){

    return(
    
            
             <div className='relative w-full h-[400px] hover:scale-110 duration-150 mb-10 '>
            <ReactPlayer 
             width='100%'
             height='100%'
            url="https://www.youtube.com/watch?v=2QzIoESik8U "
            controls={true} 
            playing={false}
            />
            <div className=' relative w-full h-5 bg-gray-900 '>
            <div className='absolute w-full h-full p-4 bottom-0'>
                <div className='flex w-full h-full justify-between'>
                    <div>
                        <h3>Atividade: <span>1</span></h3>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                        <Link href={"#"} >Ver</Link>
                        <Link href={"#"} >Adicionar</Link>
                    </div>
                </div>
            </div>
            </div>
             </div>
           
        
    )   

}