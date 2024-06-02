import * as z from "zod";

export const DiciplinasValidation = z.object({
  imagem: z.string().url(),
  idCurso:z.string(),
  nome: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(50, { message: "Maximum 30 caracters." }),
   descricao: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(2000, { message: "Maximum 1000 caracters." }),
    professores: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Precisas Selecionar pelomenos um professor",
    }),

});
