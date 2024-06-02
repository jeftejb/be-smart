"use client"
import { fetchAluno, updateAlunoModeloDeAprendisagem } from "@/lib/actions/alunos.actions"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import Swal from "sweetalert2"

const page = ({params}:{params:{id:string}})=>{
 const id = params?.id
 const user = fetchAluno(id);

 if(user?.modeloDeAprendisagem !== null || user?.modeloDeAprendisagem !=="" ) return redirect("/");

    const  independente = (e:any)=>{
        e.preventDefault()
        Swal.fire({
            title: "Estudos Independetes",
            text: "Pretendes comecar uma jornada 'SMART' independete?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim , anular !"
          }).then( async (result) => {
            if (result.isConfirmed) {
            await  updateAlunoModeloDeAprendisagem({
              userId: id,
              modeloDeAprendisagem:"independente"
      
             })
            }
          });
    }

    const  seguido = (e:any)=>{
        e.preventDefault()
       

        Swal.fire({
            title: "Estudos Seguidos",
            text: "Pretendes comecar uma jornada 'SMART' Seguida?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim , anular !"
          }).then( async (result) => {
            if (result.isConfirmed) {
            await updateAlunoModeloDeAprendisagem({
              userId: id,
              modeloDeAprendisagem:"seguido"
      
             })
            }
          });

           }
       


    return (

        <div>

          <div className="relative flex flex-col w-full h-full p-20 mx-4 mt-20 items-center justify-center">
            <h1>Faca a sua escolha e comece a sua jornada "SMART"</h1>
            <span>Parabens !! estamos na reta final do processo de cadastramento agora precisamos de saber se preferes comecar sua jornda "SMART" com estudos independentes ou preferes ser inserido em uma turma? </span>
          </div>
            <div className="relative w-full h-full flex flex-row items-center justify-center px-20  py-10 ">

            <Link onClick={(e)=>independente(e)}  href={"#"} className=" relative w-[300px] h-[350px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl m-4">
                <div className="absolute w-[300px] h-[350px] rounded-tr-3xl rounded-tl-3xl brightness-[0.2] ">
                    <Image
                    src={"/assets/chi.jpg"}
                    alt="image fundo"
                    fill
                    className="object-cover rounded-tr-3xl rounded-tl-3xl"
                    />

                </div>
                <div className="absolute w-full h-full "/>
        <div className="relative flex flex-col w-full h-full  rounded-3xl  rounded-tr-3xl rounded-tl-3xl " >
      
        <div className="relative flex  rounded-3xl h-[400px] justify-center   m-8 ">
         <Image
         src={""}
         alt="Itens"
         fill
         className="object-cover rounded-3xl"
         />
        </div>
            
            <div className="relative w-full mt-4">
                <div className=" relative flex justify-between mx-4">
                <span>
                  Estudos independente
                  </span>

                 <div className="relative flex px-2 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <span className=" relative overflow-visible font-normal text-sm">Desabilitado</span>
                    <div className="relative rounded-full w-[10px] h-[10px] bg-red-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-2 px-4 mx-2 font-normal text-sm">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque dolor eveniet eius odio nulla illum aut alias dolorum eligendi. 
                 </p>

            </div>
            
          
      </div>
      
            </Link>

            <Link onClick={(e)=>seguido(e)}  href={"#"} className=" relative w-[300px] h-[350px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl m-4">
                <div className="absolute w-[300px] h-[350px] rounded-tr-3xl rounded-tl-3xl brightness-[0.2] ">
                    <Image
                    src={"/assets/imagem1.jpg"}
                    alt="image fundo"
                    fill
                    className="object-cover rounded-tr-3xl rounded-tl-3xl"
                    />

                </div>
                <div className="absolute w-full h-full "/>
        <div className="relative flex flex-col w-full h-full  rounded-3xl  rounded-tr-3xl rounded-tl-3xl " >
      
        <div className="relative flex  rounded-3xl h-[400px] justify-center   m-8 ">
         <Image
         src={""}
         alt="Itens"
         fill
         className="object-cover rounded-3xl"
         />
        </div>
            
            <div className="relative w-full mt-4">
                <div className=" relative flex justify-between mx-4">
                
                  <span>
                  Estudos seguidos
                  </span>
                 <div className="relative flex px-2 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <span className=" relative overflow-visible font-normal text-sm">Desabilitado</span>
                    <div className="relative rounded-full w-[10px] h-[10px] bg-red-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-2 px-4 mx-2 font-normal text-sm">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque dolor eveniet eius odio nulla illum aut alias dolorum eligendi. 
                 </p>

            </div>
            
          
      </div>
      
            </Link>
            </div>

        </div>

    )
}

export default page