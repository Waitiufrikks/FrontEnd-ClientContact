import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um e-mail").optional(),
  full_name: z.string().optional(),
  phone: z
    .string()
    .nullish()
    .optional()
    .refine((val) => String(val).length === 9, {
      message: "O telefone precisa ter 9 digitos.",
    }),
});
