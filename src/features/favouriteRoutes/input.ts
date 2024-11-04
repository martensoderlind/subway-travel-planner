import { z } from "zod";

export const deleteSchema = z.object({
  id: z.string().regex(/^[a-öA-Ö0-9\-]{30,36}$/),
});
export const postSchema = z.object({
  from: z.string().regex(/^[a-öA-Ö]{5,15}$/),
  to: z.string().regex(/^[a-öA-Ö]{5,15}$/),
  time: z.number(),
});
