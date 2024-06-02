import mongoose, { mongo } from "mongoose";

const cursosSchama = new mongoose.Schema({

    nome:{type:String},
    imagem:String,
    descricao:{type:String}, 
     status:{
        type:Boolean,
        default:false 
      },
      disciplina:[
        {
            type:mongoose.Schema.ObjectId, 
            ref:"Disciplinas"
        }
    ], 
    professores:[{
   type:mongoose.Schema.ObjectId,
   ref:"Funcionarios"
    }],
    
    createdAt: {
        type: Date,
        default: Date.now,
      },
})


const Cursos = mongoose.models.Cursos || mongoose.model("Cursos", cursosSchama)

export default Cursos