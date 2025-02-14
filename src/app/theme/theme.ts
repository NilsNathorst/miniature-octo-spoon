export const theme = {
  palette: {
    accent: "#3CBFAE",
    background: "#E5E5E5",
    light: "#FFFFFF",
    dark: "#171515",
  },
  spacing: (...args: number[]) => {
    let res: string[] = [];
    args.forEach((arg) => res.push(`${8 * arg}px`));
    return res.join(" ");
  },
  radius: {
    medium: "16px",
  },
} as const;

export type Theme = typeof theme;
