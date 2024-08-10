import mongoose from "mongoose";

const propinaPedidoPagamentoSchema = new mongoose.Schema({
  nomeEncarregado:String,
  imagem:String,
  total:Number,
  encarregado:{
    type:mongoose.Schema.ObjectId,
    ref:"Encarregado",
  },
  statos:{
    type:String, 
    default:"Em analise"
  },  
  morStudant:[
     {
      nomeAluno:String,
      idAluno:{
        type:mongoose.Schema.ObjectId,
        ref:"Alunos",
      },
      meses:[],
      mesesValor:[], 
      idade:Number, 
      mensalidade:Number,
      valorTotalPago:Number
     }

  ],

  createDate: {
    type:Date, 
    default: Date.now
  }
});


const PropinaPedidoPagamento = mongoose.models.PropinaPedidoPagamento || mongoose.model("PropinaPedidoPagamento", propinaPedidoPagamentoSchema);

export default PropinaPedidoPagamento;
