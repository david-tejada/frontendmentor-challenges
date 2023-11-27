import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";

const livvic = Livvic({ subsets: ["latin"], weight: ["700", "600", "500"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | myteam website challenge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          livvic.className,
          "flex min-h-screen flex-col font-semibold text-white",
        )}
      >
        <Header />
        <main className="flex grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
