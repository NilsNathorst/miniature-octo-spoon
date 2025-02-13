import Link from "next/link";

import { Hero, Typography } from "@/components";
import { getAllClubs } from "@/app/utils";

export default async function Home() {
  const clubs = await getAllClubs();

  return (
    <>
      <Hero disabledBackButton imageUrl="/images/gyms-hero.png">
        <Typography color="light" variant="h1">
          Our gyms
        </Typography>
      </Hero>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {clubs.map((club) => (
          <Link key={club.id} href={`/gyms/${club.id}`}>
            {club.name} →
          </Link>
        ))}
      </div>
    </>
  );
}
