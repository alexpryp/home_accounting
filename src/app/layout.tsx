import {Providers} from "./providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar/navbar";

import { navbarButtons } from "./ui/navbar/constants/constants";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salus",
  description: "Salus - home accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16"  href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32"  href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
        <link rel="icon" type="image/png" sizes="96x96"  href="/favicons/apple-touch-icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`relative ${roboto.className} antialiased`}
      >
        <Providers>
          <div className={`absolute z-1 size-[100%] bg-gradient-to-r from-indigo-500 
            via-purple-500 to-pink-500 opacity-20`}
          ></div>
          <div className="relative z-2 max-w-[1920px] min-h-[100vh] overflow-auto 
            p-1 flex gap-2
          ">
            <Navbar navbarButtons={navbarButtons}/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
