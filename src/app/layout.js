import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "La grande histoire du Mac",
  description: "Exposition virtuelle sur les 40 ans du Mac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-just`}
      >
        {/* <SmoothScroll>{children}</SmoothScroll> */}
        {children}
      </body>
    </html>
  );
}
