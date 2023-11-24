'use client'

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Nav(){
const {userId} = useAuth()
  const router = useRouter();
    return(
      
        <nav className="nav flex ">
        <ul className="flex w-full  max-sm:px-[5px] ">
          <li className="max-sm:text-xl max-sm:mx-[2px]" ><a href="/">Home</a></li>
          <li><a href="/cursos" className="text-white " >Cursos</a></li>
          <li><a href="/sobre" className="">Sobre</a></li>
          <li><a href={`/perfil/${userId}`} className="">Perfil</a></li>
          
        </ul>
        <div className="absolute  right-9 h-full justify-center items-center" >
        <SignedIn>
          <SignOutButton signOutCallback={()=> router.push("/sign-in")}>
            <div className='flex relative w-14 h-14 cursor-pointer gap-1 p-2 items-center justify-center mt-6  border-2 rounded-full border-lime-700'>
              <Image
                src='/assets/img5.jpg'
                alt='logout'
                 fill
                className="bg-cover rounded-full"
              />
              <p className='text-light-2 max-lg:hidden'>Sair</p>
            </div>
          </SignOutButton>
        </SignedIn>
        </div>
      </nav>
      
    )
}