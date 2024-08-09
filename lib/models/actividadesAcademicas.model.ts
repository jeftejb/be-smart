import mongoose from "mongoose";

const activiadadesAcademicas = new mongoose.Schema({
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
ref:"ActividadeAcademica"
}],

dataRegistro:{
    type:Date,
    default:Date.now 
}
})

const ActividadeAcademica = mongoose.models.ActividadeAcademica|| mongoose.model("ActividadeAcademica", activiadadesAcademicas)

export default ActividadeAcademica