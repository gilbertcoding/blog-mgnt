import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "인형공예 블로그 | 작품 전시 및 홍보",
  description: "인형공예 작가의 작품을 전시하고 홍보하는 현대적인 블로그 플랫폼",
  openGraph: {
    title: "인형공예 블로그",
    description: "인형공예 작품 전시 및 홍보",
    type: "website",
  },
  keywords: ["인형공예", "작품", "갤러리", "블로그", "홍보"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
