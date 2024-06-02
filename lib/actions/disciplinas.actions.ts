"use server"

import Cursos from "../models/cursos.model"
import Aulas from "../models/aulas.model";
import Disciplinas from "../models/disciplinas.model"
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";
import  Atividades from "../models/atividades.model";
import Funcionarios from "../models/funcionarios.model";



interface Params {
    nome:string, 
    descricao:string, 
    idCurso:string,
    imagem:string,
    path:string,
    professores:[]
}



export async function Disciplina(id: string){

    try {
      connectToDB();
      return await Disciplinas.findOne({_id:id})
      .populate({
        path:"cursos",
        model:Cursos,
        select:"_id nome imagem descricao"
      }).populate({
        path:"atividades", 
        model:Atividades
      })
      ;
    } catch (error: any) {
    }
  }


  export async function Disciplinass(){

    try {
      connectToDB();
      return await Disciplinas.find().populate({
        path: "disciplina",
        model: Disciplinas
      });
    } catch (error: any) {
        console.log("falha ao buscar os dados", error)
    }
  }



export async function updateDisciplinas({
    nome,
    descricao,
    idCurso,
    imagem,
    professores
   
   }:Params){
     try {
       connectToDB();
       // const data = new Date()
       //const idCursos  = new mongoose.Types.ObjectId(idCurso)


       

      const createDisciplina =  await Disciplinas.create(
         {
             nome,
             descricao,    
             imagem,
             cursos: idCurso, 
             professores
         }
       );

       await  Cursos.findOneAndUpdate({_id:idCurso}, {
        $push : {disciplina: createDisciplina._id}
       }) 

       createDisciplina?.professores.map(async (item:string)=>{
        await Funcionarios.updateMany({_id:item}, {$push:{diciplinas:createDisciplina._id}})
       })
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }