import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ngọc Tây IO",
  description:
    "Khám phá hệ sinh thái công cụ AI cho doanh nghiệp và cá nhân Việt Nam.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>
        <div className="app-shell">
          <SiteHeader />
          <div className="main-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
