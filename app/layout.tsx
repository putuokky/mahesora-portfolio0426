import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Hi, I'm Mahesora",
  description: "Building scalable web apps & modern UI experiences.",
  metadataBase: new URL("https://mahesora.id"),
  openGraph: {
    title: "Okky Maheswara",
    description: "Fullstack Developer Portfolio",
    url: "https://mahesora.id",
    siteName: "Okky Portfolio",
    images: [
      {
        url: "/og.png", // taruh di public/
        width: 1200,
        height: 630,
        alt: "Mahesora Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Okky Maheswara",
    description: "Fullstack Developer Portfolio",
    images: ["/og.png"],
  },
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "React",
    "UI Developer",
    "Portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}