'use client'

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { navItems } from "@/constants";
import { useEffect, useState } from "react";
import {Bars3Icon, XMarkIcon, HomeModernIcon, ArrowLeftEndOnRectangleIcon} from "@heroicons/react/20/solid"
import Link from "next/link";



export default function Nav(){
const {userId} = useAuth()
  const router = useRouter();
  const [navVar, setNav] = useState(false)
const moveMobile = ()=>{
  if(navVar){
    setNav(false)
  }else{
    setNav(true)
  }
}
  const very = ()=>{
const  navBar = document.querySelector(".nav")
window.addEventListener('scroll', ()=>{
    if(scrollY >=100){
        navBar?.classList.add('bg')
    }else{
        navBar?.classList.remove('bg')
    }
})
  }

  useEffect(()=>{

    window.addEventListener('scroll', very)

  },[navVar, setNav])
    return(
      
          navVar ?
     
        <div className="fixed transform transition-all  duration-300 top-0 left-0 right-0 buttom-0 z-[1000000] bg-[#09101a] overflow-hidden">
       <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                   
       <div className="nav-link-mobile" >
       <SignedIn>
          <SignOutButton signOutCallback={()=> router.push("/sign-in")}>
           <div>
             <ArrowLeftEndOnRectangleIcon className="w-[35px]"/>
            <span className="text-[14px]">Sair</span>
            
            </div>
          </SignOutButton>
        </SignedIn>
        </div>

       {navItems.map((items, key)=>(
              items.name ==="Perfil"? 
              <div className="nav-link-mobile" key={key} >
                 {items.icon}
                <a  href={`${items.link}/${userId}`} >
                 {items?.name}
                </a>
               
              </div> 
              
              :  
              <div className="nav-link-mobile" key={key} >
                {items.icon}
                <a href={`${items.link}`} >
                 {items?.name}
                </a>
              </div>
         ))}
      
        

        <div className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#80BF21]">
          <XMarkIcon
           onClick={()=>moveMobile()}
          />
        </div>

       </div>
        </div>
     : 

     <nav  className="nav sticky z-[1000000] bg-black/10 backdrop-blur-md flex overflow-hidden w-full shadow-md ">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <Link href={"/"}>
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-[#03A678] font-bold">
          BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
        </h1>
        </Link>
         {navItems.map((items, key)=>(
              items.name ==="Perfil"? 
              <div className="nav-link " key={key} >
                 
                <a  href={`${items.link}/${userId}`} className="flex flex-col gap-1 items-center justify-center" >
                {items.icon}
                   {items?.name}
                </a>
              </div> 
              :  
              <div className="nav-link  " key={key} >
              
                <a href={`${items.link}`} className="flex flex-col gap-1 items-center justify-center" >
                {items.icon}
               {items?.name}
                </a>
              </div>
         ))}
      
        <div className="nav-link" >
        <SignedIn>
          <SignOutButton signOutCallback={()=> router.push("/sign-in")}>
            <div>
            <ArrowLeftEndOnRectangleIcon className="w-[35px]"/>
            <span className="text-[14px]">Sair</span>
            </div>
          </SignOutButton>
        </SignedIn>
        </div>

        <Bars3Icon 
        className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#80BF21]"
        onClick={()=>moveMobile()}
        />
        </div>
      </nav>
      
    )
}