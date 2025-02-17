"use client";

import styled from "styled-components";

import Image from "next/image";
import STCLogo from "../../public/images/logo.svg";
import ArrowLeft from "../../public/images/arrow-left.svg";
import { useRouter } from "next/navigation";

interface HeroProps {
  disabledBackButton?: boolean;
  children: React.ReactNode;
  imageUrl: string;
}

const Container = styled.div<{ $imageUrl: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding: ${({ theme }) => theme.spacing(5, 3)};
  box-sizing: border-box;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-color: ${({ theme }) => theme.palette.dark};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconButton = styled.button`
  height: 24px;
  width: 24px;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  text-align: inherit;
  background: none;
  box-shadow: none;
  padding: 0;
  cursor: pointer;
  border: none;
  color: inherit;
  font: inherit;
  position: absolute;
  left: 0;
`;

const Navbar = ({ disabledBackButton = false }) => {
  const router = useRouter();
  return (
    <StyledNav>
      <>
        {disabledBackButton ? null : (
          <IconButton onClick={() => router.back()} aria-label="Go back">
            <Image src={ArrowLeft} alt="Go Back" />
          </IconButton>
        )}
      </>
      <Image priority src={STCLogo} alt="STC logo" />
    </StyledNav>
  );
};

export const Hero = ({ children, imageUrl, disabledBackButton }: HeroProps) => {
  return (
    <Container $imageUrl={imageUrl}>
      <Navbar disabledBackButton={disabledBackButton} />
      {children}
    </Container>
  );
};
