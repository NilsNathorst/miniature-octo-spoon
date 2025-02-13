import Link from "next/link";

import { Hero } from "@/components";

async function getAllClubs() {
  const url = `${process.env.STC_API_BASE_URL}/businessunits`;
  const data = await fetch(url);
  return data.json();
}

export default async function Home() {
  const clubs = await getAllClubs();

  return (
    <>
      <Hero />
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
