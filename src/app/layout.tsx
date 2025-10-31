import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ngoc Tay IO",
  description: "Nền tảng khám phá và quản lý các công cụ thông minh cho doanh nghiệp và cá nhân.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
