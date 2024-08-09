"use server"

import { revalidatePath } from "next/cache"
import ActividadeRecreativa from "../models/actividadesRecreativas.models"
import Funcionarios from "../models/funcionarios.model"
import { connectToDB } from "../mongoose"



export const RegistroActividadeRecreativa  = async ({dados}:any)=>{
  try {
    connectToDB()
    const createActividade = await ActividadeRecreativa.create(dados)
    await Funcionarios.findOneAndUpdate({_id:dados.autor}, {$push:{publicacaoRecreativas:createActividade._id}})
     
    return {
        status:200,
        response:"actividade criada com sucesso"
    }
  } catch (error) {
    console.log(error)
  }

}


export const GetAllActividadesRecreativas = async ()=>{
  try {
    connectToDB()
       return await ActividadeRecreativa.find({ parentId: { $in: [null, undefined] } })
  } catch (error) {
    console.log("algo deu errado ao buscar as publicações recreativas", error)
  }
}

export const GetOneActividadeRecreativa = async ({dados}:any)=>{
  try {
    connectToDB()
       return await ActividadeRecreativa.findOne({_id:dados.id}).populate({
        path:"autor", 
        model:Funcionarios, 
        select:"_id nomeCompleto"
       }).populate({
        path:"comentario",
        populate:[
          {
                path:"comentario", 
                model:ActividadeRecreativa, 
               
          }, 
          
        ]
       }).exec();
  } catch (error) {
    console.log("algo deu errado ao buscar as publicações recreativas", error)
  }
}


export const AddComentario = async (
  text:string, 
  idPublicacao:string, 
  idUser:string, 
  nome:string
)=>{
  
  try {
   
    
    connectToDB()

    const publicaoOriginal = await ActividadeRecreativa.findById(idPublicacao)

    if(!publicaoOriginal){
      return console.log("Publicação não encontrada")
    }
    

    const comentarioPubli = new ActividadeRecreativa({
      descricao:text, 
      autor:idUser, 
      nome:nome,
      parentId:idPublicacao

    })

    const salvarComentario = await comentarioPubli.save()
    publicaoOriginal.comentario.push(salvarComentario._id)

    await publicaoOriginal.save()
revalidatePath(`/actividades/actividadesRecreativas/actividade/${idPublicacao}`)
     
  } catch (error) {
    console.log(error)
  }

}

export async function deleteComentarioBd(idComentario:string, idUser:string){
  try {
    connectToDB()
      const comentario = await ActividadeRecreativa.findOne({_id:idComentario})

      if(!comentario){
        console.log("comentario nao encontrado")
        return {
          status:405, 
          response:"comentario nao encontrado"
        }
      }
         
      await ActividadeRecreativa.deleteOne({_id:idComentario})
      await ActividadeRecreativa.deleteMany({parentId:idComentario})
      revalidatePath(`/actividades/actividadesRecreativas/actividade/${idComentario}`)
  } catch (error) {
    console.log("Algo deu errado", error)
  }

}


export  async function  GetComentarios (parentId:string): Promise<any>{
  try {
    const comentarios:any = await ActividadeRecreativa.find({parentId:parentId})
    const filhosComentarios = []
    for(const comentario of comentarios){
       const filhos = await GetComentarios(comentarios._id)
       filhosComentarios.push(comentario, ...filhos)
    }
    return filhosComentarios
    
  } catch (error) {
    console.log("erro", error)
  }

}

