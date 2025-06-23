import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almunji",
  description: "Almunji Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
