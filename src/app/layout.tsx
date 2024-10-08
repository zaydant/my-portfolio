import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const poppins = Poppins ({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Zaydan's Portfolio",
  description: "Freshly made with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
