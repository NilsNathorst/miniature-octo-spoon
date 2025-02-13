import { z } from "zod";

export const clubSchema = z.object({
  name: z.string(),
  id: z.number(),
  address: z.object({
    city: z.string(),
    postalCode: z.string(),
    street: z.string(),
  }),
});

export const clubsSchema = z.array(clubSchema);

export type Club = z.infer<typeof clubSchema>;
export type Clubs = z.infer<typeof clubsSchema>;
