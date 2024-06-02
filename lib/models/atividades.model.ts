import mongoose, { mongo } from "mongoose";
import { number, string } from "zod";

const atividadesSchama = new mongoose.Schema({
    imagem:String,
    titulo:{type:String},
    descricaoa:{type:String}, 
    questoes:[
        {
            pergunta_frase:String,
             pergunta_ar:[],
             resposta_frase:String,
            esposta:[],

        }
    ],
    texto:
         {
            titulo:{Type:String}, 
            texto:{type:String}, 

         }
    ,



    notaTotas:{type:Number},
    professor:{type:mongoose.Schema.ObjectId, ref:"Funcinarios"},
    disciplina:{type:mongoose.Schema.ObjectId, ref:"Disciplinas"},
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


const Atividades = mongoose.models.Atividades || mongoose.model("Atividades", atividadesSchama);

export default Atividades;