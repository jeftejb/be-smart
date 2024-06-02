import mongoose, { mongo } from "mongoose";

const aulasSchama = new mongoose.Schema({

    linkAula:{type:String},
    profesor:{type:mongoose.Schema.ObjectId, ref:"Funcinarios"},
    actividades:[
        {
            type:mongoose.Schema.ObjectId, 
            ref:"Atividades"
        }
    ], 
    disciplina:[
        {
            type:mongoose.Schema.ObjectId, 
            ref:"Disciplinas"
        }
    ], 
    nivel:[{type:String}],
    createdAt: {
        type: Date,
        default: Date.now,
      },
})


const Aulas = mongoose.models.Aulas || mongoose.model("Aulas", aulasSchama)

export default Aulas