"use client";

import { ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";
import { Theme } from "../app/theme";

type Variant = "body1" | "body2" | "caption" | "h1" | "h2" | "h3" | "h4";
type FontWeight = "medium" | "bold";

export type TypographyProps = {
  children?: ReactNode;
  variant?: Variant;
  component?: React.ElementType;
  color?: keyof Theme["palette"];
  fontWeight?: FontWeight;
};

type TypographyRootProps = {
  variant: Variant;
  color: keyof Theme["palette"];
  fontWeight: FontWeight;
};

const variantMapping: Record<Variant, React.ElementType> = {
  body1: "p",
  body2: "p",
  caption: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const typographyVariantStyles: Record<Variant, RuleSet<object>> = {
  body1: css`
    font-size: 14px;
    line-height: 140%;
  `,
  body2: css`
    font-size: 16px;
    line-height: 110%;
  `,
  caption: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  `,
  h1: css`
    font-size: 56px;
    line-height: 110%;
  `,
  h2: css`
    font-size: 40px;
    line-height: 140%;
  `,
  h3: css`
    font-size: 24px;
    line-height: 140%;
  `,
  h4: css`
    font-size: 16px;
    line-height: 140%;
  `,
};

const fontWeights: Record<FontWeight, number> = {
  medium: 500,
  bold: 700,
};

const TypographyRoot = styled("span")<TypographyRootProps>`
  font-weight: ${({ fontWeight }) => fontWeights[fontWeight]};
  padding: 0;
  margin: 0;
  color: ${({ theme, color }) => theme.palette[color]};
  ${({ variant }) => typographyVariantStyles[variant]};
`;

export const Typography = ({
  children,
  component,
  variant = "body1",
  color = "dark",
  fontWeight = "bold",
  ...rest
}: TypographyProps) => {
  const Component = component || variantMapping[variant] || "span";

  return (
    <TypographyRoot
      fontWeight={fontWeight}
      color={color}
      variant={variant}
      as={Component}
      {...rest}
    >
      {children}
    </TypographyRoot>
  );
};
