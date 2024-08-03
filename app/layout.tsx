import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montaga = Nunito_Sans({ subsets: ["latin"],weight: "700" }); 

export const metadata: Metadata = {
  title: "H²S BNB",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montaga.className}>
        {children}
      </body>
    </html>
  );
}
