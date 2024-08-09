import mongoose, { mongo } from "mongoose";
import { object } from "zod";

const funcionariosSchema = new mongoose.Schema({

  imagem: String,
  bi1: String,
  bi2:String,
id:{type:String},
  email:{
    type:String
  },

  nomeCompleto: {
    type: String,
   
  },


  turmas:[ 
    {
    type: String,
  }
],

  dataNascimento: {
    type: String,

  },

  telefone: {
    type: Number,
    
  },

  sexo: {
    type: String,
    
  },

 
  onboarded: {
    type: Boolean,
    default: false,
  },

  admin:{
    type:Boolean,
    default:false,
    require:true
  },
  nivel:{
         type:Number, 
         default:0
  },
  salarios: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Salarios",
    },
  ],

  actividade:[{
    type:mongoose.Schema.ObjectId,
    ref:"Atividades"
  }],
  
  diciplinas:[{
    type:mongoose.Schema.ObjectId,
    ref:"Disciplinas"
  }],
  
  cursos:[{
    type:mongoose.Schema.ObjectId,
    ref:"Cursos"
  }],

 funcoes : [{
    type:String
 }],

 linkAula:[
  {
    link:{type:String},
    nivel:{type:String}
  }
],

 horario:[
  {
    periodo:{type:String},
    hora:{type:String}
  }
],

presencas:[
  {
    data:{type:String},
    hora:{type:String}
  }
],

publicacaoRecreativas:[
  {
    type:mongoose.Types.ObjectId, 
    ref:"ActividadeRecreativa"
 }
],
publicacaoAcademicas:[
  {
    type:mongoose.Types.ObjectId, 
    ref:"ActividadeAcademica"
 }
],

  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

const Funcionarios = mongoose.models.Funcionarios || mongoose.model("Funcionarios", funcionariosSchema);

export default Funcionarios;
