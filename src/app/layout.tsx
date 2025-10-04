import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/providers";
import { Amiri } from "next/font/google";

export const metadata: Metadata = {
  title: "Almunji Web App",
  description: "Almunji Web App",
};

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={amiri.variable}>
      <body>
        <Toaster position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
