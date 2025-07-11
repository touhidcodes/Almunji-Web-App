import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";

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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
