import mongoose from "mongoose";

const propinaPedidoPagamentoSchema = new mongoose.Schema({
  id:{
    type: String,
  },
  
  nome:String,
  idAluno:{
    type:mongoose.Schema.ObjectId,
    ref:"Alunos",
  },

  encarregado:{
    type:mongoose.Schema.ObjectId,
    ref:"Encarregado",
  },
 
  modeloPagamento:{
    type:String
  },
  imagem:String,
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

  statos:{
    type:String, 
    default:"Em analise"
  },
 
  morStudant:[
     {
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
    
     }

  ],

  createDate: {
    type:Date, 
    default: Date.now
  }

  
 
});

const PropinaPedidoPagamento = mongoose.models.PropinaPedidoPagamento || mongoose.model("PropinaPedidoPagamento", propinaPedidoPagamentoSchema);

export default PropinaPedidoPagamento;
