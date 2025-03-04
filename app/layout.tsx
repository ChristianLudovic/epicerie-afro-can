import type { Metadata } from "next";
import "./globals.css";
import localFont  from "next/font/local";

const montserrat = localFont({
  src: '../public/montserrat-font/Montserrat-VariableFont_wght.ttf',
  variable: '--montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Epicerie Afro-can",
  description: "Site web de l'épicerie Afro-can",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-white text-[#3D4C5E]`}
      >
        {children}
      </body>
    </html>
  );
}
