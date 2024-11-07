import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
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
  title: "Car Rental ",
  description: "Premium cars rental in your town",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
            <div className="flex flex-col justify-center items-center h-screen pb-5">
              <h2 className="font-bold text-center">
                <SignIn routing="hash" />
              </h2>
            </div>
          </SignedOut>
        </body>

      </html>
    </ClerkProvider>
  );
}
