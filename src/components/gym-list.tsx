"use client";

import styled from "styled-components";

export const GymList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  a {
    text-decoration: none;
  }
`;
