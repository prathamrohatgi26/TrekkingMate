import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Trekking Mate",
  description:
    "Trekking Mate is a platform for trekkers to find and share trekking routes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
