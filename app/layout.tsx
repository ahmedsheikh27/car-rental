import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn
} from '@clerk/nextjs'

import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
   return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
            <SignedIn>
              <Navbar />
              {children}
            </SignedIn> 
          
            <SignedOut >
              <SignIn routing="hash" />
            </SignedOut>
        </body>

      </html>
    </ClerkProvider>
  );
}
