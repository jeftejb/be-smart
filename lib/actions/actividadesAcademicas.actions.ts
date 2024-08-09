"use server"

import { revalidatePath } from "next/cache"
import ActividadeAcademica from "../models/actividadesAcademicas.model"
import Funcionarios from "../models/funcionarios.model"
import { connectToDB } from "../mongoose"



export const RegistroActividadeAcademica  = async ({dados}:any)=>{

  try {
    connectToDB()
    const createActividade = await ActividadeAcademica.create(dados)
    await Funcionarios.findOneAndUpdate({_id:dados.autor}, {$push:{publicacaoAcademicas:createActividade._id}})
     
    return {
        status:200,
        response:"actividade criada com sucesso"
    }
  } catch (error) {
    console.log(error)
  }

}


export const GetAllActividadesAcademicas = async ()=>{
  try {
    connectToDB()
       return await ActividadeAcademica.find({ parentId: { $in: [null, undefined] } })
  } catch (error) {
    console.log("algo deu errado ao buscar as publicações recreativas", error)
  }
}

export const GetOneActividadeAcademica = async ({dados}:any)=>{
  try {
    connectToDB()
       return await ActividadeAcademica.findOne({_id:dados.id}).populate({
        path:"autor", 
        model:Funcionarios, 
        select:"_id nomeCompleto"
       }).populate({
        path:"comentario",
        populate:[
          {
                path:"comentario", 
                model:ActividadeAcademica, 
               
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

    const publicaoOriginal = await ActividadeAcademica.findById(idPublicacao)

    if(!publicaoOriginal){
      return console.log("Publicação não encontrada")
    }
    

    const comentarioPubli = new ActividadeAcademica({
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

export async function deleteActividade(idComentario:string, idUser:string){
  try {
    connectToDB()
      const comentario = await ActividadeAcademica.findOne({_id:idComentario})

      if(!comentario){
        console.log("comentario nao encontrado")
        return {
          status:405, 
          response:"comentario nao encontrado"
        }
      }
         
      await ActividadeAcademica.deleteOne({_id:idComentario})
    
      revalidatePath(`/actividades/actividadesAcademicas/activiadde/${idComentario}`)
  } catch (error) {
    console.log("Algo deu errado", error)
  }

}


export  async function  GetComentarios (parentId:string): Promise<any>{
  try {
    const comentarios:any = await ActividadeAcademica.find({parentId:parentId})
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

