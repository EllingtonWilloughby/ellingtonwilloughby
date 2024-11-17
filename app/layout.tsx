import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/color-scheme-dark.css";

const karla = localFont({
  src: "./fonts/Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Ellington Willoughby & the Mythical Squid",
  description: "Portland, OR, US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-image"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
