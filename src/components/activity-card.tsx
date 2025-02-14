"use client";

import styled from "styled-components";
import { Typography } from "@/components";

const ActivityCardContainer = styled.div`
  background-color: ${(props) => props.theme.palette.light};
  padding: ${({ theme }) => theme.spacing(6, 2, 2)};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

interface ActivityCardProps {
  name: string;
  startTime: string;
  instructor: string;
  slots: number;
}

export const ActivityCard = ({
  name,
  startTime,
  instructor,
  slots,
}: ActivityCardProps) => {
  return (
    <ActivityCardContainer>
      <Typography color="accent">{slots} places remaining</Typography>
      <Typography variant="h3">{name}</Typography>
      <InnerWrapper>
        <Typography variant="caption">{startTime}</Typography>
        <Typography variant="caption">{instructor}</Typography>
      </InnerWrapper>
    </ActivityCardContainer>
  );
};
