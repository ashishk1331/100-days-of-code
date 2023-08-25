import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "100 Days of Code",
  description: "Join us to complete the 100 Days of Code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-200"}>{children}</body>
    </html>
  );
}
