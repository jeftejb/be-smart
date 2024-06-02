"use server";

import { Date, FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Alunos from "../models/alunos.model";
import Propina from "../models/propina.model";
import { connectToDB } from "../mongoose";
import Swal from "sweetalert2";
import mongoose from "mongoose";
import PropinaPedidoPagamento from "../models/propinaPedidoPagamento.model";
import { create } from "domain";


interface Params {
  userId: string,
  nomeCompleto: string,
  email: string,
  telefone:number,
  sexo: string,
  nivel: string,
  idade:number,
  dataNascimento:string, 
  imagem:string,
  path:string,
  status:number,
   
  nome:string
  idPropina:string,
  anoInscricao:number,
  anoConfirmacao:[],
  anoConfirmacaoFatura:number
  mesDeConfirmacao:[],
  modeloPagamento:string,
  meses:[],
  totalMesesPagos:[],
  valor:number,
  numeroEstudante:number, 
  valorPago:number,
  mesesDivida:number,
  totalDivida:number, 
  actived:any,
  modeloDeAprendisagem:string
  
}




export async function fetchAlunoOnb(id: string){

    try {
      connectToDB();
      return await Alunos.findOne({_id:id}).populate({
        path: "propina",
        model: Propina
      });
    } catch (error: any) {
    }
  }

  export  async function fetchAlunoOn(id: string) {
    try {
      await connectToDB();
      return await Alunos.findOne({id:id}).populate({
        path:'propina',
        model:Propina
      });
      mongoose.connection.close();
    } catch (error: any) {
     
    }
  }


  export  async function fetchAlunNumeroEstudante(nomeUser: string) {
    try {
      await connectToDB();
      return await Alunos.findOne({numeroDeEstudante:nomeUser}).populate({
        path:'propina',
        model:Propina
      });
      mongoose.connection.close();
    } catch (error: any) {
     
    }
  }


 export  async function fetchAluno(id: string) {
    try {
      await connectToDB();
      return await Alunos.findOne({_id:id}).populate({
        path:'propina',
        model:Propina
      });
      mongoose.connection.close();
    } catch (error: any) {
     
    }
  }

  
  export async function fetchAlunosAll() {
    try {
      await connectToDB();
      return await Alunos.find({actived:true})
      .populate({
        path:'propina',
        model:Propina, 
        select: 'id',
      });
      
     
    } catch (error: any) {
      throw new Error(`Falha ao buscar alunos: ${error.message}`);
    }
  }


  export async function fetchAlunosAllEnable(perPage:number, page:number) {
    try {
      await connectToDB();
      return await Alunos.find({actived:false})
      .populate({
        path:'propina',
        model:Propina, 
        select: 'id',
      })
      .skip(perPage*(page -1))
      .limit(perPage)
      ;
     
    } catch (error: any) {
      throw new Error(`Falha ao buscar alunos: ${error.message}`);
    }
  }

  export async function fetchAlunosActived(perPage:number, page:number) {
    try {
      await connectToDB();
      return await Alunos.find({actived:true})
      .populate({
        path:'propina',
        model:Propina, 
        select: 'id',
      })
      .skip(perPage * (page - 1))
      .limit(perPage)
      ;
     
    } catch (error: any) {
      throw new Error(`Falha ao buscar alunos: ${error.message}`);
    }
  }


  export async function getFullNumberStudentActived(){
    try {
      await connectToDB()
      return await Alunos.find({actived:true}).countDocuments({})
    } catch (error:any) {
      throw new Error(`Falha ao buscar dados: ${error.message}`)
    }
  }

  export async function getFullNumberStudentEnabled(){
    try {
      await connectToDB()
      return await Alunos.find({actived:false}).countDocuments({})
    } catch (error:any) {
      throw new Error(`Falha ao buscar dados: ${error.message}`)
    }
  }



  export async function CreateAlunoAdmin({
   userId,
   nomeCompleto,
   email,
   telefone,
   sexo,
   nivel,
   idade,
   anoInscricao,
   anoConfirmacao,
   mesDeConfirmacao,
   dataNascimento,
   imagem, 
   path
  }: Params): Promise<void> {
    try {
      connectToDB();
      // const data = new Date()
    
     const alunos =  await Alunos.find();
     const numeroDeEstudante = 2024 + alunos.length

      const createAluno:any =  Alunos.create(
        {
            id:userId,//mudar depis para id da paessoa que cadastrou
            nomeCompleto,
            imagem,
            email,
            telefone,
            sexo,
            nivel,
            idade,
            anoInscricao,
            anoConfirmacao,
            mesDeConfirmacao,
            numeroDeEstudante,
            dataNascimento,
          onboarded: true,
          actived: false,
        },
        { upsert: true }
      );

      await createAluno.save()
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }



  interface DatdosEdite{
    userId:string;
    nomeCompleto:string;
    telefone:number;
    sexo:string;
    nivel:string;
    idade:number;
    dataNascimento:string;  }

  export async function updateAlunoInf({
    userId,
    nomeCompleto,
    telefone,
    sexo,
    nivel,
    idade,
    dataNascimento
   }: DatdosEdite): Promise<void> {
     try {
       connectToDB();
       // const data = new Date()
     
 
       await Alunos.findOneAndUpdate(
         { _id: userId },
         {
             nomeCompleto,
             telefone,
             sexo,
             nivel,
             idade,
             dataNascimento,
         
         }
       );
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }

   export async function updateAlunoMatricula({
    userId,
    actived
   }: Params){
     try {
       connectToDB();
       // const data = new Date(
 
       await Alunos.findOneAndUpdate(
         { _id: userId },
         {
             actived,
         }
       );
       
       return{
        status:200,
        res:"Matricula anulada com sucesso!",
       }
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }


   export async function updateAlunoModeloDeAprendisagem({
    userId,
    modeloDeAprendisagem
    
   }: Params){
     try {
       connectToDB();
       // const data = new Date(
 
       await Alunos.findOneAndUpdate(
         { id: userId },
         {
          modeloDeAprendisagem,
         }
       );
       
       return{
        status:200,
        res:"Modelo selecionado com sucesso!",
       }
  
     } catch (error: any) {
       throw new Error(`Failed to create/update user: ${error.message}`);
     }
   }

   export async function UpdatePropinaPedido(
    {
  
     idPropina,
     imagem,
    modeloPagamento,
    meses,
    anoConfirmacaoFatura,
    totalMesesPagos,
    valor,
    numeroEstudante,
    nome,
    valorPago,
    mesesDivida,
    totalDivida,
    path,
    status
    }: Params){
    try {
      connectToDB();
      // const data = new Date()
    
  
       // await Alunos.findOneAndUpdate({_id:idPropina}, {propina: idPropina});
  
     const createPropina =   await PropinaPedidoPagamento.create(
        {
          
          modeloPagamento,
          idAluno:idPropina,
          imagem,
          meses,
          nome,
          totalMesesPagos,
          anoConfirmacao:anoConfirmacaoFatura,
          valor,
          numeroEstudante, 
          valorPago,
          mesesDivida,
          totalDivida,
        },
      );
  
        
      
          return{
            status:200,
            res:"Fatura criada com sucesso",
            dados:{
              valorUnico:createPropina.valor, 
              mesesP:createPropina.meses, 
              numeroEstudante:createPropina.numeroEstudante, 
              nome:createPropina.nome,
              valorPago:createPropina.valorPago,
              mesesDevendo:createPropina.mesesDivida, 
              dividaTotal:createPropina.totalDivida
            }
          }
       
          
   
     
    } catch (error: any) {
      throw new Error(`Falha ao criar o pagamento: ${error.message}`);
    }
  
  
    
  
   }
  

 export default async function UpdatePropina(
  {

   idPropina,
  modeloPagamento,
  meses,
  anoConfirmacaoFatura,
  totalMesesPagos,
  valor,
  numeroEstudante,
  nome,
  valorPago,
  mesesDivida,
  totalDivida,
  path,
  status
  }: Params){
  try {
    connectToDB();
    // const data = new Date()
  

     // await Alunos.findOneAndUpdate({_id:idPropina}, {propina: idPropina});

   const createPropina =   await Propina.create(
      {
        
        modeloPagamento,
        idAluno:idPropina,
        meses,
        nome,
        totalMesesPagos,
        anoConfirmacao:anoConfirmacaoFatura,
        valor,
        numeroEstudante, 
        valorPago,
        mesesDivida,
        totalDivida,
      },
    );

        await Alunos.findOneAndUpdate({_id:idPropina}, {
          $push : {propina: createPropina._id},
          
        });

        
    
        return{
          status:200,
          res:"Fatura criada com sucesso",
          dados:{
            valorUnico:createPropina.valor, 
            mesesP:createPropina.meses, 
            numeroEstudante:createPropina.numeroEstudante, 
            nome:createPropina.nome,
            valorPago:createPropina.valorPago,
            mesesDevendo:createPropina.mesesDivida, 
            dividaTotal:createPropina.totalDivida
          }
        }
     
        
 
   
  } catch (error: any) {
    throw new Error(`Falha ao criar o pagamento: ${error.message}`);
  }


  

 }





 