import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dango Ecommerce",
  description: "Dango Ecommerce Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
