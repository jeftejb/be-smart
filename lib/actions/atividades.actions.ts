"use server"

import Atividades from "../models/atividades.model";
import Disciplinas from "../models/disciplinas.model"
import { connectToDB } from "../mongoose";


interface Params {
    titulo:string, 
    descricao:string, 
    imagem:string,
    path:string,
    idModulo:string,
    idProfessor:string,
}



export async function Atividade(aula: string){
console.log(aula)
    try {
      connectToDB();
      return await Atividades.findOne({disciplina:aula}).populate({
        path: "disciplina",
        model: Disciplinas
      });
    } catch (error: any) {
      console.log("Erro ao buscar elemento:"+error)
    }
  }

  export async function Atividadess(){

    try {
      connectToDB();
      return await Atividades.find().populate({
        path: "disciplina",
        model: Disciplinas
      });
    } catch (error: any) {
        console.log("falha ao buscar os dados", error)
    }
  }



export async function updateAtividade({
    titulo,
    descricao,
    imagem,
    idModulo,
   idProfessor
   }:Params){
     try {
       connectToDB();
       // const data = new Date()
      const createAtividade =  await Atividades.create(
         {
             titulo,
             descricao,
             imagem,
             disciplina: idModulo,
             professor:idProfessor 
         }
       );

       await Disciplinas.findOneAndUpdate({_id:idModulo}, {$push:{atividades:createAtividade?._id}})
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }