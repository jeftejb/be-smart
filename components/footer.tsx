import { DevicePhoneMobileIcon, EnvelopeOpenIcon, MapIcon } from "@heroicons/react/20/solid";


export default function Footer(){
    return(
       <footer className="relative pt-[8rem]  pb-[4rem] bg-[#0205a] bg-[#02050a] ">
        <div className=" grid border-b-[1px] bp-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
           
           <div className="flex items-center space-x-6">
            <div className="md:w-[3.5rem] md:h-[3.5rem] w-[3rem]  h-[3rem] flex items-center justify-center rounded-full bg-[#55aca5]">
             <MapIcon className="md:w-[2rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-black"/>
            </div>
            <div >
                <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white " >Endereco</h1>
                <p className="text-[15px] w-[90%] text-white opacity-60" >Huila, Lubango , Angola, Bairro : Estado Maior </p>
            </div>
           </div>
           
           <div className="flex items-center space-x-6">
            <div className="md:w-[3.5rem] md:h-[3.5rem] w-[3rem]  h-[3rem] flex items-center justify-center rounded-full bg-[#55aca5]">
             <DevicePhoneMobileIcon className="md:w-[2rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-black"/>
            </div>
            <div >
                <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white " >Telefone</h1>
                <p className="text-[15px] w-[90%] text-white opacity-60" >+244 xxx xxx xxx ou +244 xxx xxx xxx xxx</p>
            </div>
           </div>

           <div className="flex items-center space-x-6">
            <div className="md:w-[3.5rem] md:h-[3.5rem] w-[3rem]  h-[3rem] flex items-center justify-center rounded-full bg-[#55aca5]">
             <EnvelopeOpenIcon className="md:w-[2rem] md:h-[2rem] w-[2.5rem] h-[2.5rem] text-black"/>
            </div>
            <div >
                <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white " >Envianos um email</h1>
                <p className="text-[15px] w-[90%] text-white opacity-60">besmartsmart@gmail.com</p>
            </div>
           </div>
        </div>
        <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
           <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
               Be-Smart 2024 | Todos os Direitos Reservados
           </div>
           <div className="flex items-center space-x-10">
               <p className="text-[16px] text-white opacity-20">Termos e Condiceos</p>
               <p className="text-[16px] text-white opacity-20">Politica de Privacidade</p>
               <p className="text-[16px] text-white opacity-20">Sistema</p>
           </div>
        </div>
       </footer>
    )
}