import { getAllClubs, getActivities } from "@/app/utils";
import { ActivityList, Hero, Typography } from "@/components";
import { GymTitle, PageSubtitle, GymInfoContainer } from "./styled";
import { MainContainer } from "../../../components/main-container";

async function getClubInfo(gymId: string) {
  const gyms = await getAllClubs();
  const gym = gyms.find(({ id }) => id === parseInt(gymId));

  if (!gym) {
    throw new Error(`Club with id:${gymId} could not be found`);
  }

  return gym;
}

export default async function Page({
  params,
}: {
  params: Promise<{ gym: string }>;
}) {
  const { gym } = await params;
  const activities = await getActivities(gym);
  const { name, address } = await getClubInfo(gym);

  return (
    <>
      <Hero imageUrl="/images/gym-hero.png">
        <GymInfoContainer>
          <GymTitle color="light" variant="h1">
            {name.replace("STC ", "")}
          </GymTitle>
          <span>
            <Typography color="light" variant="body2" fontWeight="medium">
              {address.street}
            </Typography>
            <Typography color="light" variant="body2" fontWeight="medium">
              {address.postalCode} {address.city}
            </Typography>
          </span>
        </GymInfoContainer>
      </Hero>
      <MainContainer>
        {activities?.length === 0 ? (
          <Typography variant="body2" fontWeight="medium">
            Unfortunately there are no instructor-led classes the coming week.
          </Typography>
        ) : (
          <>
            <PageSubtitle>Upcoming sessions</PageSubtitle>
            <ActivityList activities={activities} />
          </>
        )}
      </MainContainer>
    </>
  );
}

export async function generateStaticParams() {
  const gym = await getAllClubs();
  return [
    gym.map((gym) => ({
      gym: gym.id.toString(),
    })),
  ];
}
