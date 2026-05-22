import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegalOS – Manage Every Part of Your Legal Work",
  description:
    "Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
