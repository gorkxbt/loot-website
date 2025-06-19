import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/layout/MainNavigation";
import MainFooter from "@/components/layout/MainFooter";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "LootAI — Smarter Shopping. Real Rewards.",
  description: "Discover emerging brands, review products, and earn rewards — powered by AI and the Solana blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased bg-dark text-light font-quicksand`}>
        <MainNavigation />
        <main className="min-h-screen bg-dark">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  );
} 