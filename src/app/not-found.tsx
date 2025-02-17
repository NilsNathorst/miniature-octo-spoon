import Link from "next/link";
import { Hero, MainContainer, Typography } from "@/components";
import styled from "styled-components";

export default function NotFound() {
  return (
    <>
      <Hero imageUrl="/images/404_background.jpg">
        <Typography color="light" variant="h1">
          :(
        </Typography>
      </Hero>
      <MainContainer>
        <Typography variant="h2">Not Found</Typography>
        <Typography variant="body1" fontWeight="medium">
          Could not find requested resource
        </Typography>
        <Typography variant="body2">
          <Link href="/">Take me back</Link>
        </Typography>
      </MainContainer>
    </>
  );
}
