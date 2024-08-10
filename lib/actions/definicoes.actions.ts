import mongoose from "mongoose";

const definicoesShema = new mongoose.Schema({
    nome:String, 
    slogan:String,
    subDiretor:[
            {
            nome:String, 
            status:Boolean
        }
             ],
    diretora:[
        {
            nome:String, 
            status:Boolean
        }
    ],  
    propinas:[
        {
            curso:String, 
            categorias:[
                {
                    idade:Number, 
                    valor:Number

                }
            ]
        }
    ],
    salarios:[
        {
            funcao:String, 
            salario:Number
        }
    ],
    dataRegistro:{
        type:Date, 
        default:Date.now
    }
})