"use server";

import { Date, FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Funcionarios from "../models/funcionarios.model";
import Salarios from "../models/salarios.model";
import { connectToDB } from "../mongoose";
import Atividades from "../models/atividades.model";
import Cursos from "../models/cursos.model";




export async function fetchFuncionario(email: string){

    try {
      connectToDB();
      return await Funcionarios.findOne({ email: email }).populate({
        path: "salarios",
        model: Salarios,
      }).populate({
        path: "actividade",
        model: Atividades,
      }).populate({
        path: "cursos",
        model: Cursos,
      });
    } catch (error: any) {
     // throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

  export async function fetchFuncionarioID(id: string){

    try {
      connectToDB();
      return await Funcionarios.findOne({_id:id}).populate({
        path: "salarios",
        model: Salarios,
      });
    } catch (error: any) {
     // throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

  export async function fetchFuncionariosNomes(){

    try {
      connectToDB();
      return await Funcionarios.find({funcoes : "Professor"}).select('_id nomeCompleto');
    } catch (error: any) {
     // throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

  export async function fetchFuncionarios(){

    try {
      connectToDB();
      return await Funcionarios.find().populate({
        path: "salarios",
        model: Salarios,
      });
    } catch (error: any) {
     // throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

interface Params {
   
    nomeCompleto: string;
    email: string;
    telefone:number;
    sexo: string;
    funcoes: string;
    turmas:string;
    dataNascimento:string; 
 
    path:string;
  }
  
  export async function updateFuncionario({
  
   nomeCompleto,
   email,
   telefone,
   sexo,
   funcoes,
   turmas,
   dataNascimento,
  
   path
  }: Params): Promise<void> {
    try {
      connectToDB();
  
      await Funcionarios.findOneAndUpdate(
        { email: email },
        {
            nomeCompleto,
            email,
            telefone,
            sexo,
            funcoes,
            turmas,
            dataNascimento,
          onboarded: true,
          admin: false,
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