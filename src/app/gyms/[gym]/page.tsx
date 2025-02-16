import { getAllGyms, getActivities } from "@/app/utils";
import { Hero, ActivityList, Typography, Loading } from "@/components";
import { GymTitle, GymInfoContainer } from "./styled";
import { MainContainer } from "../../../components/main-container";
import { Suspense } from "react";

async function getGymInfo(gymId: string) {
  const gyms = await getAllGyms();
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
  const activities = getActivities(gym);
  const { name, address } = await getGymInfo(gym);

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
        <Suspense fallback={<Loading />}>
          <ActivityList activities={activities} />
        </Suspense>
      </MainContainer>
    </>
  );
}

export async function generateStaticParams() {
  const gym = await getAllGyms();
  return [
    gym.map((gym) => ({
      gym: gym.id.toString(),
    })),
  ];
}
