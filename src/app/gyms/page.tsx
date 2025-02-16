import Link from "next/link";

import { GymCard, GymList, Hero, Typography } from "@/components";
import { getAllGyms } from "@/app/utils";
import { MainContainer } from "../../components/main-container";

export default async function Home() {
  const gyms = await getAllGyms();

  return (
    <>
      <Hero disabledBackButton imageUrl="/images/gyms-hero.png">
        <Typography color="light" variant="h1">
          Our gyms
        </Typography>
      </Hero>
      <MainContainer>
        <GymList>
          {gyms.map((gym) => (
            <Link key={gym.id} href={`/gyms/${gym.id}`}>
              <GymCard title={gym.name.replace("STC ", "")} />
            </Link>
          ))}
        </GymList>
      </MainContainer>
    </>
  );
}
