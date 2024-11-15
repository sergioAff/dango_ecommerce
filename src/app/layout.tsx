import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dango Ecommerce",
  description: "Dango Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
