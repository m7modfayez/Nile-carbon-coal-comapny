import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "شركة النيل لتجارة الفحم",
  description:
    "شركة متخصصة في توريد وتصدير الفحم بجودة عالية وموثوقية تامة. نقدم خدمات متكاملة في استيراد والتصدير الفحم مع حلول مبتكرة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
