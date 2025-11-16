import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anish Bhakta Joshi",
  description:
    "Portfolio of Anish Bhakta Joshi, showcasing projects and skills.",
  keywords: ["Anish Joshi", "Portfolio", "Web Developer", "React", "Next.js"],
  authors: [{ name: "Anish Bhakta Joshi", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Anish Bhakta Joshi",
    description:
      "Portfolio of Anish Bhakta Joshi, showcasing projects and skills.",
    url: "https://abj.com.np",
    siteName: "Anish Bhakta Joshi Portfolio",
    type: "website",

  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Bhakta Joshi",
    description: "Portfolio of Anish Bhakta Joshi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-black p-2 z-50">
          Skip to main content
        </a>

        <header role="banner">
          <Navbar />
        </header>

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        <ParticleBackground aria-hidden="true" />
      </body>
    </html>
  );
}
