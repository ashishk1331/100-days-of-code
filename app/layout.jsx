import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "100 Days of Code",
  description: "Join us to complete the 100 Days of Code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={twMerge("", inter.className)}>{children}</body>
    </html>
  );
}
