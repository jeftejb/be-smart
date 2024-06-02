import * as z from "zod";

export const Atividades = z.object({
  imagem: z.string().url().nonempty(),
  titulo: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(100, { message: "Maximum 30 caracters." }),
   descricao: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(2000, { message: "Maximum 1000 caracters." }),
});
