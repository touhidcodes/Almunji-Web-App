import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Almunji — Read, Listen & Reflect on the Quran",
  description: "A calm, thoughtful space to read, listen to, and understand the Holy Quran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
