import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PikriNtr Personal Portofolio Website",
  description: "This is a simple portofolio website that using NextJS as a framework, Typescript as the language, and Tailwind as a styling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full no-scrollbar dark:bg-[#161616] dark:text-white">
      <body className={cn(
        'relative h-full font-sans antialiased dark:bg-[#161616] dark:text-white', inter.className)}>
          <main className="relative flex flex-col min-h-screen dark:bg-[#161616]">
          <Navbar />
          <div className="flex-grow flex-1 dark:bg-[#161616] dark:text-white">{children}</div>
          </main>
      </body>
    </html>
  );
}
