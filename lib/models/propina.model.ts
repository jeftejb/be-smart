import mongoose from "mongoose";


const propinaSchema = new mongoose.Schema({

  idAluno: {
    type:mongoose.Schema.ObjectId,
    ref:"Alunos",
    required: true,
  },
  anoInscricao:{
    type:Date
  }, 
  anoConfirmacao:{
    type:Date
  }, 
  mesConfirmacao:{
    type:Number
  },
  modeloPagamento:{
    type:String
  },
  mesesPagamento:[]

  
 
});

const Propina = mongoose.models.Propina || mongoose.model("Propina", propinaSchema);

export default Propina;
