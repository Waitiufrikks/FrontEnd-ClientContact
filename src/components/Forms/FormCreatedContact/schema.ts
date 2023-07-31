import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um e-mail").nonempty(),
  full_name: z.string().nonempty(),
  phone: z.number().nullish().optional(),
});
