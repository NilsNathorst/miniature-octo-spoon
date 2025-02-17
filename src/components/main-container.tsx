"use client";

import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing(5, 3, 10)};
`;
