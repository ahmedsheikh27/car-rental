import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

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
        <body>
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
          <Footer/>
        </body>

      </html>
    </ClerkProvider>
  );
}
