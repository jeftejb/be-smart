
import Services from "@/components/services"
import Image from "next/image"


import CarrocelIndex from "@/components/Servicos";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import PerfisDeSaida from "@/components/PerfisDeSaida";
import Funcionarios from "@/components/Funcionarios";




export default function Home() {

 

  return (
   <>
  <HeroSection/>

  <div className="relative">
     <Sobre/>
     <Servicos/>
     <PerfisDeSaida/>
     <Funcionarios/>
   </div>
    
 
   </>
  )
}
