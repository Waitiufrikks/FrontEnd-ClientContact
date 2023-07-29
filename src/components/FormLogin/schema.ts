import { z } from "zod"

export const schema = z.object({
    email: z.string().email("Deve ser um e-mail").nonempty("O email é obrigatorio"),
    password: z.string().nonempty("Senha é obrigatória")
})
