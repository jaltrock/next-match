import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Next Match",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
