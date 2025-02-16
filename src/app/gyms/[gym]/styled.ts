"use client";

import styled from "styled-components";
import { Typography } from "@/components";

export const GymInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const GymTitle = styled(Typography)`
  overflow-wrap: anywhere;
  @media screen and (max-width: 360px) {
    font-size: 40px;
  }
`;
