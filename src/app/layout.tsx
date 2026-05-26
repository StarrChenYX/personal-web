import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteIdentity } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteIdentity.name} | ${siteIdentity.business}`,
    template: `%s | ${siteIdentity.name}`,
  },
  description: siteIdentity.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gallery-white text-gallery-charcoal antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
