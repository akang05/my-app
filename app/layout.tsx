import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import SessionProvider from "@/components/SessionProvider"; // Import the provider you made in Step 12

export const metadata: Metadata = {
  title: "Alvin's Profile Project",
  description: "Next.js Lab Submission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Wrap everything in the SessionProvider */}
        <SessionProvider>
          <NavBar />
          <main>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}