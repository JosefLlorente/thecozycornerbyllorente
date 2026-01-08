import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootLayoutContent } from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return <RootLayoutContent geistSans={geistSans} geistMono={geistMono}>{children}</RootLayoutContent>;
}

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
};
