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
  modeloDeAprendisagem:string,
   
  
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
      return await Alunos.findOne({email:nomeUser}).populate({
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

  // busca de todos alunos
  export async function fetchAlunosAllS() {
    const  mysort:any = { nomeCompleto: 1 }
    try {
      await connectToDB();
      return await Alunos.find().sort(mysort).select("_id nomeCompleto")
    } catch (error: any) {
      throw new Error(`Falha ao buscar alunos: ${error.message}`);
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



   

   export async function pesquisaNumero({numeroDeEstudante}:{numeroDeEstudante:number}){
    
     try {
       connectToDB();
     const dados =   await Alunos.findOne(
         {numeroDeEstudante:numeroDeEstudante}
       )
       
       return{
        status:200,
        res:"Estudante encontrado!",
        dados: {
          id:dados?._id,
         nome: dados?.nomeCompleto,
        email:dados?.email
        }
       }
  
     } catch (error: any) {
      return{
        status:400,
        res:"Estudante não encontrado!",
      }
       
     }
   }

   export async function updateAlunoMatriculaEmail({
    userId,
    email
   }: {userId:string, email:string}){
     try {
       connectToDB();
       // const data = new Date(
 
       await Alunos.findOneAndUpdate(
         { _id: userId },
         {
             email:email,
         }
       );
       
       return{
        status:200,
        res:"Confirmação feita com sucesso !",
       }
  
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
             vinculed:false,
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

   //pedido de pagamento de propina

   export async function UpdatePropinaPedido(
    {
  
     idPropina,//na verdare é o id do aluno
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

 // buscar todos os pedidos
   export async function SelectAllPedidos(){
    try {
       const dados = await PropinaPedidoPagamento.find().select("valorPago createDate _id statos").populate({
          path:"idAluno", 
          model:Alunos, 
          select:"nomeCompleto imagem _id"
        })

        return dados

    } catch (error:any) {
      throw new Error(error);
      
    }
   }

   //buscar pedido

 
   export async function fetchPedido(id:string){
    try {
       const dados = await PropinaPedidoPagamento.findOne({_id:id}).populate({
          path:"idAluno", 
          model:Alunos, 
          select:"nomeCompleto imagem _id"
        })

        return dados

    } catch (error:any) {
      return{
        statos:500, 
        mensagem:"Algo deu errado porfavor tente novamente mais tarde"
      }
      
    }
   }

   //actualizar statos pedido

   export async function updatePedido({id, dado}:{id:any, dado:string}){
   const idPedido:string = id?.id
    try {
        await PropinaPedidoPagamento.findOneAndUpdate({_id:idPedido },{$set:{statos:dado}})

        return {
          statos:200,
          mensagem:"pedido actualizado com sucesso"

        }

    } catch (error:any) {
      return{
        statos:500, 
        mensagem:"Algo deu errado porfavor tente novamente mais tarde"
      }
      
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





 