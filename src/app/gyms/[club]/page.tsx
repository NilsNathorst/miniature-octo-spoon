import { getAllClubs, getActivities } from "@/app/utils";
import { ActivityList, Hero, Typography } from "@/components";

async function getClubInfo(clubId: string) {
  const clubs = await getAllClubs();
  const club = clubs.find((c) => c.id === parseInt(clubId));

  if (!club) {
    throw new Error(`Club with id:${clubId} could not be found`);
  }

  return club;
}

export default async function Page({
  params,
}: {
  params: Promise<{ club: string }>;
}) {
  const { club } = await params;
  const activities = await getActivities(club);
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
`${process.env.STC_API_BASE_URL}/businessunits`;

export async function generateStaticParams() {
  const clubs = await getAllClubs();
  return [
    clubs.map((club) => ({
      club: club.id.toString(),
    })),
  ];
}
