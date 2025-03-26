import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./Redex/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LUZOZ",
  description: "Where Elegance Meets Clarity. ✨",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
        <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </StoreProvider>
  
  );
}
