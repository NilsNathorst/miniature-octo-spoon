import { z } from "zod";

export const activitySchema = z.object({
  name: z.string(),
  slots: z.object({
    leftToBook: z.number(),
  }),
  duration: z.object({
    start: z.coerce.date(),
  }),
  instructors: z.optional(
    z.array(
      z.object({
        name: z.string(),
      })
    )
  ),
  id: z.number(),
});

export const activitiesSchema = z.array(activitySchema);

export type Activity = z.infer<typeof activitySchema>;
export type Activities = z.infer<typeof activitiesSchema>;
