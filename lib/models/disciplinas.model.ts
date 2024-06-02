import mongoose from "mongoose";

const disciplinasSchama = new mongoose.Schema({

    nome:{type:String},
    imagem:String,
    descricao:{type:String}, 
     status:{
        type:Boolean,
        default:false 
      },
    nivel:[{type:String}],
   

      auldas:[
        {
            type:mongoose.Schema.ObjectId, 
            ref:"Aulas"
        }
    ], 
    atividades:[
      {
          type:mongoose.Schema.ObjectId, 
          ref:"Atividades"
      }
  ],
    cursos:[{
            type:mongoose.Schema.ObjectId, 
            ref:"Cursos"
        }],

    professores:[
      {
          type:mongoose.Schema.ObjectId, 
          ref:"Funcionarios"
      }
  ], 

    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const Disciplinas = mongoose.models.Disciplinas || mongoose.model("Disciplinas", disciplinasSchama)

export default Disciplinas