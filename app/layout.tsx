import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemini-2.0",
  description:
    "Gemini - chat to supercharge your ideas. Sign in. Bard is now Gemini. Get help with writing, planning, learning, and more from Google AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#131314] ${inter.className}`}>{children}</body>
    </html>
  );
}
