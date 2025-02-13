import { activitiesSchema } from "@/schema";
import { getStartAndEndDate } from "./dateUtil";

export async function getActivities(id: number | string) {
  const { startDate, endDate } = getStartAndEndDate();
  const clubActivitiesUrl = `${process.env.STC_API_BASE_URL}/businessunits/${id}/groupactivities?period.start=${startDate}&period.end=${endDate}`;

  try {
    const response = await fetch(clubActivitiesUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.statusText}`);
    }

    const data = await response.json();
    const result = activitiesSchema.safeParse(data);

    if (!result.success) {
      console.error("Activities validation error:", result.error);
      throw new Error(
        `Invalid activities data format: ${result.error.issues[0].message}`
      );
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
}
