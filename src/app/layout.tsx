import { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Cart } from "@/components/Cart";
import { StoreProvider } from "@/components/StoreProvider";
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
      <body className="antialiased relative">
        <StoreProvider>
          <Header />
          <Cart />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
