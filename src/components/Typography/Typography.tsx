"use client";

import { ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";

type Variant = "body1" | "body2" | "h1" | "h2" | "h3";

export type TypographyProps = {
  children: ReactNode;
  variant?: Variant;
  component?: React.ElementType;
};

type TypographyRootProps = {
  variant: Variant;
};

const variantMapping: Record<Variant, React.ElementType> = {
  body1: "p",
  body2: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

const typographyVariantStyles: Record<Variant, RuleSet<object>> = {
  body1: css`
    color: gold;
  `,
  body2: css`
    color: springgreen;
  `,
  h1: css`
    color: rebeccapurple;
  `,
  h2: css`
    color: dodgerblue;
  `,
  h3: css`
    color: tomato;
  `,
};

const TypographyRoot = styled("span")<TypographyRootProps>`
  padding: 0;
  margin: 0;
  ${({ variant }) => typographyVariantStyles[variant]}
`;

export const Typography = ({
  children,
  component,
  variant = "body1",
  ...rest
}: TypographyProps) => {
  const Component = component || variantMapping[variant] || "span";

  return (
    <TypographyRoot variant={variant} as={Component} {...rest}>
      {children}
    </TypographyRoot>
  );
};
