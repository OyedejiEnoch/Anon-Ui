import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans", // You can name this whatever you like
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you plan to use
  display: "swap", // Optional but recommended for better UX
});

export const metadata: Metadata = {
  title: "Anon",
  description: "A figma libary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${plusJakartaSans.variable} font-plus-jakarta-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
