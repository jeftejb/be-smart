import mongoose from "mongoose";
import { connectToDB } from "../mongoose";
import Alunos from "../models/alunos.model";
import Encarregado from "../models/encarregado.model";
import Funcionarios from "../models/funcionarios.model";


export const  getIDs = async (email:string)=>{
try {
    connectToDB()

   const aluno = await Alunos.findOne({email:email}) 
   if(aluno){
    return {id:aluno._id}
   }

   const encarregado = await  Encarregado.findOne({email:email})
     if(encarregado){
        return {id:encarregado._id}
   }

   const funcionario = await Funcionarios.findOne({email:email})
   if(funcionario){
    return {id:funcionario._id}
   }

} catch (error) {
    console.log("houve algun erro ao buscar os ids")
}
} 