import mongoose, { now } from "mongoose";

const activiadadesRecrativas = new mongoose.Schema({
titulo : String, 
descricao:String, 
imagens:[], 
nome:String,
autor:{
    type:mongoose.Types.ObjectId, 
    ref:"Funcionarios"
},
parentId:{
    type:String
},
comentario:[{
type:mongoose.Types.ObjectId,
ref:"ActividadeRecreativa"
}],

dataRegistro:{
    type:Date,
    default:Date.now 
}
})

const ActividadeRecreativa = mongoose.models.ActividadeRecreativa|| mongoose.model("ActividadeRecreativa", activiadadesRecrativas)

export default ActividadeRecreativa