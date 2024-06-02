import mongoose from "mongoose";


const propinaSchema = new mongoose.Schema({

  id:{
    type: String,
  },
  nome:String,
  idAluno:{
    type:mongoose.Schema.ObjectId,
    ref:"Alunos",
  },
 
  modeloPagamento:{
    type:String
  },
   
  valor:{
    type:Number, 
    default:0
  },
  valorPago:Number,
  meses:[], 
  anoConfirmacao:Number,
  totalMesesPagos:[],
 
  mesesDivida:Number,
  totalDivida: Number,


  numeroEstudante:Number, 

  createDate: {
    type:Date, 
    default: Date.now
  }

  
 
});

const Propina = mongoose.models.Propina || mongoose.model("Propina", propinaSchema);

export default Propina;
