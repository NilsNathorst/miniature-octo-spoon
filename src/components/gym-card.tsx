"use client";
import Image from "next/image";
import ArrowLeft from "../../public/images/arrow-left.svg";
import styled from "styled-components";
import { Typography } from "./typography";

const GymCardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.dark};
  color: ${({ theme }) => theme.palette.light};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.medium};
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface GymCardProps {
  title: string;
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  img {
    transform: rotate(180deg);
  }
`;

export const GymCard = ({ title }: GymCardProps) => {
  return (
    <GymCardContainer>
      <TitleWrapper>
        <Typography variant="h3" component="span" color="light">
          {title}
        </Typography>
        <Image src={ArrowLeft} alt={title} />
      </TitleWrapper>
    </GymCardContainer>
  );
};
