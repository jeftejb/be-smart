"use server"

import Cursos from "../models/cursos.model"
import Disciplinas from "../models/disciplinas.model"
import Funcionarios from "../models/funcionarios.model";
import { connectToDB } from "../mongoose";


interface Params {
    nome:string, 
    descricao:string, 
    imagem:string,
    path:string,
    professores:[]
}

//busca dos professores 

export async function CursoOne(idCurso: string){

  try {
    connectToDB();
    return await Cursos.findOne({_id:idCurso}).select('professores');
  } catch (error: any) {
  }
}


export async function Curso(id: string){

    try {
      connectToDB();
      return await Cursos.findOne({_id:id}).populate({
        path: "disciplina",
        model: Disciplinas
      });
    } catch (error: any) {
    }
  }

  export async function Cursoss(){

    try {
      connectToDB();
      return await Cursos.find().populate({
        path: "disciplina",
        model: Disciplinas
      });
    } catch (error: any) {
        console.log("falha ao buscar os dados", error)
    }
  }



export async function updateCursos({
    nome,
    descricao,
    imagem,
    professores
   
   }:Params){
     try {
       connectToDB();
       // const data = new Date()
     const curso =  await Cursos.create(
         {
             nome,
             descricao,
             imagem,
             professores    
         }
       );

       curso?.professores.map (async (item:string)=>{
        await Funcionarios.updateMany({_id:item}, {$push:{cursos:curso._id}})
       })
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }