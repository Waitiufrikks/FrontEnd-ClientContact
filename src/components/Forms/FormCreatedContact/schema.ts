import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um e-mail").nonempty(), 
  full_name: z.string().nonempty(), 
  phone: z
    .string()
    .refine((val) => !val || String(val).length === 9, {
      message: "O telefone precisa ter 9 digitos.",
    })
    .nullish(),
});