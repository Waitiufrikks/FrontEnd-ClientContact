import { z } from "zod"

export const schema = z.object({
    name: z.string().nonempty("Nome é obrigatorio"),
    email: z.string().email("Deve ser um e-mail").nonempty("O email é obrigatorio"),
    phone: z.number().refine((val) => String(val).length === 9, {
      message: "O telefone precisa ter 9 digitos.",
    }).nullish(),
    password: z.string().nonempty("Senha é obrigatória")
})

export type RegisterData = z.infer<typeof schema>