import { getStartAndEndDate } from "@/utils";

import { ActivityList, Hero, Typography } from "@/components";

async function getActivites(id: number | string) {
  const { startDate, endDate } = getStartAndEndDate();
  const clubActivitesUrl = `${process.env.STC_API_BASE_URL}/businessunits/${id}/groupactivities?period.start=${startDate}&period.end=${endDate}`;
  const activities = await fetch(clubActivitesUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch activities");
      }
      return response.json();
    })
    .then((data) => data);

  return activities;
}

async function getClubInfo(clubId: string) {
  const url = `${process.env.STC_API_BASE_URL}/businessunits`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch clubs`);
  }

  const clubs = await response.json();
  const club = clubs.find((c) => c.id === parseInt(clubId));

  if (!club) {
    throw new Error(`Club ${clubId} not found`);
  }

  return club;
}

export default async function Page({
  params,
}: {
  params: Promise<{ club: string }>;
}) {
  const { club } = await params;
  const activities = await getActivites(club);
  const clubInfo = await getClubInfo(club);

  return (
    <>
      <Hero />
      <div>
        <Typography variant="h1">{clubInfo.name}</Typography>
        <Typography>HEJ</Typography>
        <Typography component="span">HEJ HEJ</Typography>
      </div>
      <ActivityList activities={activities} />
    </>
  );
}

export async function generateStaticParams() {
  const clubs = await fetch(
    `${process.env.STC_API_BASE_URL}/businessunits`
  ).then((res) => res.json());

  return [
    clubs.map((club) => ({
      club: club.id.toString(),
    })),
  ];
}
