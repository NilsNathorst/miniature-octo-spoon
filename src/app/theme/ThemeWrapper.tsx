"use client";

import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import StyledComponentsRegistry from "../lib/registry";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
