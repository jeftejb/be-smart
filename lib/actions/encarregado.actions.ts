"use server"

import Alunos from "../models/alunos.model";
import Encarregado from "../models/encarregado.model";
import PropinaPedidoPagamento from "../models/propinaPedidoPagamento.model";
import { connectToDB } from "../mongoose";


interface Params {
    nome:string, 
    email:string, 
    telefone:string,

}



export async function EncarregadoBusca(id: string){

    try {
      connectToDB();
     const dados =   await Encarregado.findOne({_id:id}).populate({
        path:"alunos",
        model:Alunos,
        select:"nomeCompleto propina faltas _id numeroDeEstudante"
      }).populate({
        path:"pedidosPagamento",
        model:PropinaPedidoPagamento
      });

      return dados
    } catch (error: any) {
      console.log("Erro ao buscar elemento:"+error)
    }
  }

  export async function encarregados(){

    try {
      connectToDB();
      return await Encarregado.find();
    } catch (error: any) {
        console.log("falha ao buscar os dados", error)
    }
  }

  export async function updateAlunoEnc({idEnc, idEst}:{idEnc:string, idEst:any}){
   
    try {
      await Encarregado.updateOne({_id:idEnc}, {$push:{alunos:idEst}})
      await Alunos.updateOne({_id:idEst}, {$push:{encrregado:idEnc}})
      return{
        status:200, 
        mensagem:"Aluno confirmado"
      }
    } catch (error) {
      console.log("falha ao cadatrar aluno ao encarregado", error) 
      return{
        status:500, 
        mensagem:"Erro ao integrar aluno"
      }
    }
  }



export async function updateEncarregado({
    nome,
    email,
    telefone,
 
   }:Params){
     try {
       connectToDB();
       // const data = new Date()
      const createEncarregado =  await Encarregado.create(
         {
          nome,
          email,
          telefone,
         }
       );
    return{
      status:200, 
      mensagem:"Encarregado cadastrado com sucesso", 
      dados:createEncarregado
    }
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }