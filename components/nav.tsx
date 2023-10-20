'use client'

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Nav(){
const {userId} = useAuth()
  const router = useRouter();
    return(
      
        <nav className="nav flex relative items-center">
        <ul className="flex w'full justify-center items-center max-sm:px-[5px] ">
          <li className="max-sm:text-xl max-sm:mx-[2px]" ><a href="/">Home</a></li>
          <li><a href="/curso" className="text-white " >Cursos</a></li>
          <li><a href="/sobre" className="">Sobre</a></li>
          <li><a href={`/perfil/${userId}`} className="">Perfil</a></li>
          
        </ul>
        <div className="absolute  right-9">
        <SignedIn>
          <SignOutButton signOutCallback={()=> router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4 p-4'>
              <Image
                src='/assets/img5.jpg'
                alt='logout'
                width={24}
                height={24}
              />
              <p className='text-light-2 max-lg:hidden'>Sair</p>
            </div>
          </SignOutButton>
        </SignedIn>
        </div>
      </nav>
      
    )
}