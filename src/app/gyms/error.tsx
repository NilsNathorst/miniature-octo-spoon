"use client";

import Link from "next/link";
import { Hero, MainContainer, Typography } from "../../components";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <>
      <Hero imageUrl="/images/404_background.jpg">
        <Typography color="light" variant="h1">
          :/
        </Typography>
      </Hero>
      <MainContainer>
        <Typography variant="h2">Woops!</Typography>
        <Typography variant="body1" fontWeight="medium">
          {error.message}
        </Typography>
        <Typography component="span" variant="body2">
          <Link href="/">Take me home</Link>
        </Typography>
      </MainContainer>
    </>
  );
}
