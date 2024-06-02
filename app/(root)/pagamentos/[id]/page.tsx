import { CurrencyDollarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function Pagamentos({params}:{params:{id:string}}){

    return(
        <section className="flex flex-col relative w-[100%] items-center">
          <div className="relative flex flex-col w-[80%] h-[75vh] rounded-xl mt-[200px]   bg-[#00303C] items-center">
            <div data-aos='w-[100%] mb-[10px] mt-[14px]'>
                <h1 className="titulos" >Be-Smart</h1>
                <p className="text-[12px] font-normal uppercase text-center px-[2rem]">Ola Seja bem vindo a nossa academia, venha fazer parte desta grande familia</p>
            </div>

            <div className="relative w-[100%] h-[80%] max-md:h-[100%] mt-[0.2rem] lg:gap-[4rem] md:gap-[2rem] max-sm:gap-[0.4rem] lg:p-[48px] md:p-[20px] max-sm:p-[18px] grid lg:grid-cols-2   md:grid-cols-1 sm:grid-cols-1 items-center ">
                   
                   
            <Link href={`/pagamentos-alunos/${params.id}`}>
            <div className="relative border flex flex-col lg:h-[270px] md:h-[200px] max-sm:h-[180px] rounded-2xl bg-[#03A678] justify-center items-center hover:scale-110 hover:ease-in duration-300 ">
                <CurrencyDollarIcon className="w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[40px]"/>
                <h1 className="mb-[10px] text-[18px] max-sm:text-[16px] font-bold text-center ">Verificar pagamentos de alunos</h1>
                <p className="text-[14px] max-sm:text-[12px] font-semibold text-center p-[0.5rem]">Editar, emilinar e criar dados de pagamento de alunos .</p>
            </div>
            </Link>

            <Link href={`/pagamentos-funcionarios/${params.id}`}>
            <div className="relative border flex flex-col lg:h-[270px] md:h-[200px] max-sm:h-[180px] rounded-2xl bg-[#03A678] justify-center items-center hover:scale-110 hover:ease-in duration-300 ">
                <CurrencyDollarIcon className="w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[40px]"/>
                <h1 className="mb-[10px] text-[18px] max-sm:text-[16px] font-bold text-center ">Verificar pagamentos de alunos</h1>
                <p className="text-[14px] mas-sm:text-[12px] font-semibold text-center p-[0.5rem]">Editar, eliminar e criar dados de pagamento de salarios de funcionarios.</p>
            </div>
            </Link>

            </div>
       </div>
    <div>
</div>


</section>

    )
}



