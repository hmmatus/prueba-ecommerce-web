import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/wrappers/appWrapper/AppWrapper";

const lato = Lato({subsets: ["latin"], weight: "900"});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "E-Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
