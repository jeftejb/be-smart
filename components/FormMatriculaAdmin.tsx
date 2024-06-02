'use client'
import { CreateAlunoAdmin } from "@/lib/actions/alunos.actions";
import { updateCursos } from '@/lib/actions/cursos.actions';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { CursosValidation } from '@/lib/validations/Cursos';
import React, { ChangeEvent, useState } from 'react'
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { usePathname, useRouter  } from 'next/navigation';
import { updateDisciplinas } from '@/lib/actions/disciplinas.actions';



/*
interface Dados{
    id: string;
    objectId:string;
    username: string;
    nome: string; 
    email:string;
    imagem: string;
    telefone:string;
    isAdmin: string;
    dataNascimento:Date;
    idade:string;
    
    }
*/


interface Props{
    admin:boolean;
    email:string;
    id:string;

    
    
}

export default function FormMatriculaAdmin({admin, email, id}:Props){
    const pathname = usePathname();
    const [dados , setDados] = useState<{}>({});
    const [imagemPerfil, setImagemPerfil] = useState<File[]>([]);
    const [imageURL, setImageURL] = useState("");
    //const [imagemBi2, setImagemBi2] = useState<File[]>([]);
    const { startUpload } = useUploadThing("media");
    const router = useRouter()
   

    const handelChange = (e:any)=>{
      e.preventDefault();
   setDados((prev)=>{
    return{...prev, [e.target.name]:e.target.value}
})
}


const mesesActuais = new Date()
const dataActual = mesesActuais.getFullYear()
const anoInt = Number(mesesActuais.getFullYear())
const mesInt = Number(mesesActuais.getMonth()+1)
const mesarr = [mesInt]
const anoarr = [anoInt]


  

    const form = useForm<z.infer<typeof CursosValidation>>({
        resolver: zodResolver(CursosValidation),
        defaultValues: {
          
        },
      });

      
const handleImagemPerfil = (
    e: ChangeEvent<HTMLInputElement>,

  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImagemPerfil(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        setImageURL(imageDataUrl)
      };

      fileReader.readAsDataURL(file);
    }
  };
/*
  const handleImageBi1 = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImagemBi1(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
*/

/*
  const handleImagemBi2 = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImagemBi2(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
*/
  const onSubmit = async (e:any) => {
    
        const blob = dados?.imagem;

        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
          const imgRes = await startUpload(imagemPerfil);
    
          if (imgRes && imgRes[0].fileUrl) {
            dados.imagem = imgRes[0].fileUrl;
          }
        }
    
        await CreateAlunoAdmin(
            {
                userId: id,
                anoInscricao:dataActual||0,
                anoConfirmacao: anoarr,
                mesDeConfirmacao: mesarr,
                nomeCompleto:dados?.nomeCompleto||"", 
                email:dados?.email||"",
                imagem: imageURL||"",
                telefone:dados?.telefone||0,
                dataNascimento:dados?.dataNascimento||"",
                idade:dados?.idade||0,
                sexo:dados?.sexo||"",
                path: pathname,
                nivel:dados?.nivel
            }
           )

        if (pathname === "/profile/edit") {
          router.back();
        } else {
          router.push(`/matricula/${id}`);
        }

    }

    

   

   

    return(
        <div className="w-[100%] flex pt-[4rem] max-ms:p-[2px] items-center justify-center text-[18px]  font-normal">

            
            <form onSubmit={(e)=>onSubmit(e)}  data-aos='fade-down' className="flex flex-col p-[12px] w-[100%] text-[#6BA614] justify-center items-center ">
              

                <div className="grid w-[80%] max-sm:w-[90%] lg:grid-cols-1 gap-[2px] justify-center items-center max-md:grid-cols-1  max-sm:grid-cols-1 ">  
                
                <div className="flex flex-col w-[100%] h-full rounded-2xl shadow-xl shadow-green-600 p-[10px]" >
               <div className="relative flex h-[1rem] w-[100%] justify-center">
                <h1 className="titulos font-bold text-[18px] uppercase">Matricula</h1>
                </div> 

                <div className="relative lg:mt-[100px] md:mt-[50px] max-sm:mt-[20px] flex w-[100%] p-[4rem] items-center justify-center">
                    <div className='absolute lg:w-[160px] lg:h-[160px] md:w-[110px] md:h-[110px] max-sm:w-[100px] max-sm:h-[100px] sm:w-[100px] z-[10] bottom-0 border-[4px] border-green-800 rounded-full'>
                        <Image
                        src={`${imageURL?imageURL: "/assets/aluno.png"}`}
                        alt='profile'
                        layout='fill'
                        objectFit='contain'
                        className='rounded-full relative z-[10]'
                        />
                   </div>
                 </div>
                 <div className="flex flex-col w-[100%] items-center justify-center py-[10px]">
                    <label htmlFor="perfilImage">Imagem de Perfil</label>
                     <input 
                     type="file" 
                     name="imagem" 
                     id="perilImage"
                      className="px-[2rem] py-[1rem] w-[80%] border border-green-500 rounded-xl"
                      onChange={(e) => handleImagemPerfil(e)}
                      />
                 </div>
                
                <div className="w-full flex  max-md:flex-col max-sm:flex-col max-md:mt-1 max-sm:mt-1 mt-8 gap-9">
                <input  className="p-2 mb-4 max-md:mb-1 max-sm:mb-1 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="text" name="nomeCompleto" onChange={(e)=>handelChange(e)}  placeholder="Nome Completo"/>
                <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="email" name="email" placeholder="Email" id="" onChange={(e)=>handelChange(e)} />
                </div>

                <div className="w-full flex max-md:flex-col max-sm:flex-col  gap-9">
                <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="date" name="dataNascimento" onChange={(e)=>handelChange(e)} placeholder="Data de nascimento"/>
                <select className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " name="sexo" onChange={(e)=>handelChange(e)} id="">
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value=""  >Sexo</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value="Masculino">Masculino</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value="Femenino">Femenino</option>
                </select>
                </div>
                
                <div className="w-full flex max-md:flex-col max-sm:flex-col gap-9">
                <select className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " onChange={(e)=>handelChange(e)} name="nivel" id="">
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " >Nivel</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600  " value="Iniciante">Iniciante</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600   " value="Intermediario">Intermedio</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600  " value="Avancado">Avancado</option>
                </select>
                 
               <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="number" name="telefone"  onChange={(e)=>handelChange(e)} placeholder="Telefone" id="" />
               </div>
               

               <button type="submit" className="px-[2rem] py-[1rem] border border-green-500 mt-[8px] hover:bg-green-300 rounded-xl text-[18px] max-sm:text-[14px] font-bold uppercase">Efectuar matricula</button>
               </div>
             

             { admin && admin==true? 
             <>
             
               {/*
               <section className="w-full h-full flex flex-col px-4 max-sm:px-1 py-4 items-center justify-center ">
               <h1 className="text-center  font-medium my-1">Pagamento</h1>
                
               
                  <div className="flex flex-col w-full h-full max-md:grid-cols-1   gap-2 px-4 max-sm-px-1  ">
                    

                     <div className="flex flex-col w-full h-full max-md:mt-7 shadow-2xl shadow-green-300  px-4 rounded-2xl">

                     <form action="" data-aos='fade-down' className="flex flex-col  text-[#000] py-7 px-20 w-full  justify-center items-center ">
                           
                           <div className=" relative flex flex-col md:flex-row w-full h-48 my-2 mx-8 py-2 px-8 ">
                            <div className=" absolute left-8 top-0 flex flex-col  w-[50%] h-full " >
                            <label htmlFor="recibo" className="  font-bold mb-3 " >Selecione a imagem do comprovativo</label>
                              <input type="file" name="" id="recibo" className=" px-4 py-2 border-2 border-green-300  rounded-2xl mt-4 " />
                            </div>
                            

                              <div className=" absolute w-44 h-44 top-0 right-4 border-2 border-green-500 rounded-xl">

                              </div>
                           </div>
 
                     <select className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500  " name="" id="">
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500  " value={""} >Messes a pagar</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500  " value={1}>  1 - Mês</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={2}> 2 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={3}> 3 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={4}> 4 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={5}> 5 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={6}> 6 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={7}> 7 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={8}> 8 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={9}> 9 - Mêses</option>
                    <option className="p-2 mb-4 rounded-xl  w-[100%]  border-2 border-green-500   " value={10}> 10 - Mêses</option>
               </select>
               <h1 className="text-center ">Meses a pagar </h1>
                    <div className="w-full grid grid-cols-3 max-md:grid-cols-2  p-2 gap-2 ">
                         
                        <div className="border-2 border-green-500">
                         <label htmlFor="janeiro">Janeiro:</label>
                         <input type="checkbox" name="" id="janeiro" className="m-2"/>
                        </div>
                        
                         <div className="border-2 border-green-500">
                         <label htmlFor="fevereiro">Fevereiro:</label>
                         <input type="checkbox" name="" id="fevereiro" className="m-2"/>
                        </div>
                        
                         <div className="border-2 border-green-500">
                            <label htmlFor="marco">Marco:</label>
                         <input type="checkbox" name="" id="marco" className="m-2"/>
                        </div>

                         <div className="border-2 border-green-500">
                        <label htmlFor="abril">Abril:</label>
                        <input type="checkbox" name="" id="abril" className="m-2"/>
                        </div>

                         <div className="border-2 border-green-500">
                        <label htmlFor="maio">Maio:</label>
                        <input type="checkbox" name="" id="maio" className="m-2"/>
                        </div>

                         <div className="border-2 border-green-500">
                           <label htmlFor="junho">Junho:</label>
                         <input type="checkbox" name="" id="junho" className="m-2"/>
                        </div>

                      

                         <div className="border-2 border-green-500">
                        <label htmlFor="setembro">Setembro:</label>
                        <input type="checkbox" name="" id="setembro" className="m-2"/>
                        </div>

                         <div className="border-2 border-green-500">
                         <label htmlFor="outubro">Outubro:</label>
                        <input type="checkbox" name="" id="outubro" className="m-2"/>
                        </div>

                         <div className="border-2 border-green-500">
                         <label htmlFor="novembro">Novembro:</label>
                         <input type="checkbox" name="" id="novembro" className="m-2"/>
                        </div>
                    
                         <div className="border-2 border-green-500">
                         <label htmlFor="dezembro">Dezembro:</label>
                        <input type="checkbox" name="" id="dezembro" className="m-2"/>
                        </div>
                    </div>
              

                <button className="px-5 py-2 border border-green-500   mt-2 hover:bg-green-300 hover:text-black ">Efectuar pagamento</button>

                <div className="relative flex  w-full h-[100px]  ">
                    <div className="relative flex flex-col   w-full h-full items-center justify-center" >
                    <span className=" ">Total a pagar:{12000}Kz</span>
                    <p className=" ">Meses devendo:{2}  <span>valor: {5000}kz</span>Kz</p>
                    </div>

                </div>
            </form>
                     </div>                    

                  </div>
            </section>
             */}
                </>
                : ""
}
                </div>
                 {/* Mostrar o valor de pagamento incluindo o  valor da matricula */}

                
            </form>

        </div>
    )
}