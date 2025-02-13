"use client";

import styled from "styled-components";

interface HeroProps {
  children: React.ReactNode;
}

const Container = styled.div`
  height: 400px;
  padding: ${({ theme }) => theme.spacing(5, 3)};
  box-sizing: border-box;
`;

export const Hero = () => {
  return <Container>HERO</Container>;
};
