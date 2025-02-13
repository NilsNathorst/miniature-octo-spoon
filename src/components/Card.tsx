"use client";

import styled from "styled-components";
import { Typography } from "@/components";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.light};
  padding: 46px 16px 16px;
  border-radius: 16px;
  margin: 16px;
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

interface CardProps {
  name: string;
  startTime: string;
  instructor: string;
  slots: string;
}

export const Card = ({ name, startTime, instructor, slots }: CardProps) => {
  return (
    <CardWrapper>
      <Typography color="accent">{slots} places remaining</Typography>
      <Typography variant="h3">{name}</Typography>
      <InnerWrapper>
        <Typography variant="caption">{startTime}</Typography>
        <Typography variant="caption">{instructor}</Typography>
      </InnerWrapper>
    </CardWrapper>
  );
};
