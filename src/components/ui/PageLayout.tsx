import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface PageLayoutProps {
  children: ReactNode;
  mainClassName?: string;
}

export function PageLayout({ children, mainClassName = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Navbar />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}
