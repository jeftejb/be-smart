
import mongoose from "mongoose";


const encarregadoSchema = new mongoose.Schema({

 nome:{type:String, 
  unique: true,
 },
 email:{type:String, 
  unique: true,
 }, 
 telefone:{type:String},
 alunos:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Alunos",
      unique: true,
    },
  ],
  pedidosPagamento:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"PropinaPedidoPagamento"
  }], 
  
  chave:{
    type:String
  }
 
});

const Encarregado = mongoose.models.Encarregado || mongoose.model("Encarregado", encarregadoSchema);

export default Encarregado;
