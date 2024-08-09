import Image from "next/image";
import Link from "next/link";
import  { fetchAluno } from "@/lib/actions/alunos.actions";
import FormularioDePagamento from "@/components/FormPagamentos";
import { AcademicCapIcon, CheckCircleIcon, CreditCardIcon, EnvelopeIcon, PhoneIcon, TrophyIcon, UserIcon } from "@heroicons/react/20/solid";


export default async function PagamentoAluno({params}:{params:{id:string}}){
    const id = params?.id
     const aluno = await fetchAluno(id)

    const mesesPagos: any[]=[]
    if(aluno?.propina){
        aluno.propina.map((item:any)=>{
            if(item.anoConfirmacao === aluno.anoConfirmacao[aluno.anoConfirmacao.length-1]){
            mesesPagos.push(item.meses)
            }
            
         })
    }
    const varipass = JSON.stringify(mesesPagos)
    
      


    return(
     
            <div className="relative w-[100%]  bg:h-[100vh] md:h-[100%] max-sm:h-[100%]  bg-[#00303C] flex flex-col mt-[100px] lg:px-[12px] md:px-[12px]  max-sm:px-[4px] py-[28px] items-center justify-center ">
                <h1 className="text-center mt-[50px] mb-[30px]">Pagamento de Propinas</h1>

                <Link href={`/kistotico-de-pagamentos-aluno`} className="px-[20px] py-[2px] bg-green-500 rounded-2xl mb-[20px]">Historico de pagamentos</Link>
               
                  <div className="grid lg:grid-cols-2  w-[100%] h-[100%] md:grid-cols-1 max-sm:grid-cols-1 gap-[2rem]  lg:p-[3rem] md:p-[2rem] max-sm:p-[0.5rem]">
                     <div className="bg-[#038C73] flex flex-col w-[100%] h-[100%]  max-sm:px-3 items-center shadow-2xl shadow-black rounded-2xl ">
                        <div className="relative flex h-[50%] w-[100%] bg-black rounded-tl-2xl rounded-tr-2xl mb-[15px]">
                        <Image src="/assets/img5.jpg" alt= "item aluno" layout="fill" fill className=" object-cover rounded-tl-2xl rounded-tr-2xl  w-[5px] h-[5px] absolute"/>

                        </div>

                        <div className="flex flex-col w-[100%] gap-2 text-[#00303C] font-bold">
                            <span className="flex w-[100%] px-[1rem] uppercase"><UserIcon className="w-[24px] h-[24px] mr-[0.4rem]"/> {aluno?.nomeCompleto}</span>
                            <span className="flex w-full px-[1rem] flex-row uppercase"><TrophyIcon className="w-[24px] h-[24px] mr-[0.4rem]"/> {aluno?.nivel}</span>
                            <span className="flex w-full px-[1rem] flex-row uppercase"><AcademicCapIcon className="w-[24px] h-[24px] mr-[0.4rem]" /> {"Jose Ajusto Fernando"}</span>
                            <span className="flex w-full px-[1rem] flex-row uppercase"><PhoneIcon className="w-[24px] h-[24px] mr-[0.4rem]" /> {aluno?.telefone}</span>
                            <span className="flex w-full px-[1rem] flex-row uppercase"><EnvelopeIcon className="w-[24px] h-[24px] mr-[0.4rem]" /> {aluno?.email}</span>
                             <span className="flex w-full px-[1rem] flex-row uppercase"> <CheckCircleIcon className="w-[24px] h-[24px] mr-[0.4rem]" /> <span className="text-green-800" >{'Activo'}</span></span>
                        <span className="flex w-full px-[1rem] flex-row uppercase"><CreditCardIcon className="w-[24px] h-[24px] mr-[0.4rem]"  /> <span className="text-green-800" >{'Regular'}</span></span>
                        </div>

                     </div>

                     <div className="bg-[#181818] flex flex-col w-[100%] h-[100%] shadow-2xl shadow-black px-4 rounded-2xl">

                     <FormularioDePagamento
                      id={aluno?._id} 
                      data={aluno?.dataNascimento} 
                      numeroDeEstudante={aluno?.numeroDeEstudante} 
                      totalMesesPagos={varipass}
                      imagem={""} 
                      anoInscricao     = {JSON.stringify(aluno?.anoInscricao)}
                      anoConfirmacao   = { JSON.stringify(aluno?.anoConfirmacao)}
                      mesDeConfirmacao = {JSON.stringify(aluno?.mesDeConfirmacao)}
                      nome={aluno?.nomeCompleto}
                      />
                     </div> 

                  </div>
            </div>
        
    )
}