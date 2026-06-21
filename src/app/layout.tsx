import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communities United For Fair Development",
  description:
    "Community advocacy platform for equitable development and accountability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}