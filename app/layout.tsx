import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crafted Events | Premium Agency",
  description: "World Class Experiences Designed to Stand Out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
