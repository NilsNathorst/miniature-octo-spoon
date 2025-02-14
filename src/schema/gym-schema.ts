import { z } from "zod";

export const gymSchema = z.object({
  name: z.string(),
  id: z.number(),
  address: z.object({
    city: z.string(),
    postalCode: z.string(),
    street: z.string(),
  }),
});

export const gymsSchema = z.array(gymSchema);

export type Gym = z.infer<typeof gymSchema>;
export type Gyms = z.infer<typeof gymsSchema>;
