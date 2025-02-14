import Link from "next/link";

import { GymCard, GymList, Hero, Typography } from "@/components";
import { getAllClubs } from "@/app/utils";
import { MainContainer } from "../../components/main-container";

export default async function Home() {
  const clubs = await getAllClubs();

  return (
    <>
      <Hero disabledBackButton imageUrl="/images/gyms-hero.png">
        <Typography color="light" variant="h1">
          Our gyms
        </Typography>
      </Hero>
      <MainContainer>
        <GymList>
          {clubs.map((club) => (
            <Link key={club.id} href={`/gyms/${club.id}`}>
              <GymCard title={club.name.replace("STC ", "")} />
            </Link>
          ))}
        </GymList>
      </MainContainer>
    </>
  );
}
