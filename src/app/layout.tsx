import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ngọc Tây IO",
  description:
    "Khám phá hệ sinh thái công cụ AI cho doanh nghiệp và cá nhân Việt Nam.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-gradient-to-b from-blue-50 to-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
