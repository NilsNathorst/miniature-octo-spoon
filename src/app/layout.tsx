import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import { ThemeWrapper } from "./theme";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STC",
  description: "Discover your next workout obsession",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
