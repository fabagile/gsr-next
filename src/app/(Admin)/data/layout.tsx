import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";

import "@/lib/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data salle de recette",
  description: "Base de données",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <main className="lg:w-5xl mx-auto my-5">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
