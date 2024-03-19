import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Lower Thirds",
  description: "Lower Thirds for OBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
