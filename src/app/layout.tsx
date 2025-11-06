import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ngọc Tây IO Cloud",
  description:
    "Hạ tầng realtime, workflow automation và bộ công cụ AI-first lấy cảm hứng từ Supabase, tối ưu cho đội ngũ Việt Nam.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="app-body">
        <div className="app-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
