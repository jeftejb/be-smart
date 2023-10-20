"use server";

import { Date, FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Alunos from "../models/alunos.model";
import Propina from "../models/propina.model";
import { connectToDB } from "../mongoose";




export async function fetchAluno(id: string){

    try {
      connectToDB();
      return await Alunos.findOne({ id: id }).populate({
        path: "propina",
        model: Propina,
      });
    } catch (error: any) {
     // throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

interface Params {
    userId: string;
    nomeCompleto: string;
    email: string;
    telefone:number;
    sexo: string;
    nivel: string;
    idade:number;
    dataNascimento:string; 
    imagem:string;
    path:string;
  }
  
  export async function updateAluno({
   userId,
   nomeCompleto,
   email,
   telefone,
   sexo,
   nivel,
   idade,
   dataNascimento,
   imagem, 
   path
  }: Params): Promise<void> {
    try {
      connectToDB();
       const data = new Date()
     const alunos =  await Alunos.find();
     const numeroDeEstudante = 2024 + alunos.length

      await Alunos.findOneAndUpdate(
        { id: userId },
        {
            nomeCompleto,
            imagem,
            email,
            telefone,
            sexo,
            nivel,
            idade,
            numeroDeEstudante,
            dataNascimento,
          onboarded: true,
          isAdmin: false,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }