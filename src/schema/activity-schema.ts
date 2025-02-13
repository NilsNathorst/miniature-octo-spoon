import { z } from "zod";

export const activitySchema = z.object({
  name: z.string(),
  id: z.number(),
});
