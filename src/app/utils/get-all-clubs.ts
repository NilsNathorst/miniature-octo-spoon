import { Clubs, clubsSchema } from "@/schema";

export async function getAllClubs(): Promise<Clubs> {
  try {
    const url = `${process.env.STC_API_BASE_URL}/businessunits`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch gyms: ${response.statusText}`);
    }

    const data = await response.json();
    const result = clubsSchema.safeParse(data);

    if (!result.success) {
      throw new Error(
        `Invalid club data format: ${result.error.issues[0].message}`
      );
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching clubs:", error);
    throw error;
  }
}
