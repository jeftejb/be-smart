import mongoose, { mongo } from "mongoose";
import { number } from "zod";

const atividadesSchama = new mongoose.Schema({

    titulo:{type:String},
    desc:{type:String}, 
    texto:
         {
            titulo:{Type:String}, 
            texto:{type:String}, 

         }
    ,

    quesMul:{ /**questoes de multiplas escolhas */
        titulo:{type:String}, 
        quest:[{
               questao:{type:String}, 
               opcoes:[{type:String}],
               resp:[{type:String}]
    }]
    },

    quesUni:{  /**questoes de escolha unica */
        titulo:{type:String}, 
        quest:[{
               questao:{type:String}, 
               opcoes:[{type:String}],
               resp:{type:String}
    }]
    },

    quesFrasecom:{ /**questoes com frases para completar */
        titulo:{type:String}, 
        quest:[{
               questao:{type:String}, 
               frases:[{type:String}],/**frase vinda do usuario ou aluno */
               resp:[{type:String}]
    }]
    },

    quesRed:{ /**redacao */
        titulo:{type:String}, 
        desc:{type:String}, 
        resp:[{type:String}],
        
    
    },

    notaTotas:{type:Number},
    profesor:{type:mongoose.Schema.ObjectId, ref:"Funcinarios"},
    aula:{type:mongoose.Schema.ObjectId, ref:"Aulas"},
    alunos:[
        {
            type:mongoose.Schema.ObjectId, 
            ref:"Alunos",
            nota:{type:Number}, 
            respostas:[
                {
                    certas:[{
                        numero:{type:Number},
                        respo:[{type:String}]
                }], 
                erradas:[{
                    numero:{type:Number},
                    respo:[{type:String}]
            }]
                }
            ]
        }

            ],
    createdAt: {
        type: Date,
        default: Date.now,
      },
})


const Atividades = mongoose.models.Atividades || mongoose.model("Atividades", atividadesSchama)