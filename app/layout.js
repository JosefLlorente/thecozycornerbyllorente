"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function RootLayoutContent({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 flex flex-col min-h-screen`}
      >
        <header className="border-b bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
          <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4 md:p-4">
            <Link href="/" className="text-xl font-semibold hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-500 ease-in-out">The Cozy Corner</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors duration-500 ease-in-out"
              title="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-6xl w-full p-0 md:px-6 md:py-2">{children}</main>

        <footer className="text-center text-sm text-zinc-500 dark:text-zinc-400 py-1 md:py-3 mt-auto">
          © 2026 The Cozy Corner
        </footer>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
};
