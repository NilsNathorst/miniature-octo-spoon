"use client";

import styled from "styled-components";

const Spinner = styled.div`
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid;
  border-color: #000 #0000;
  animation: l1 1s infinite;

  @keyframes l1 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};
