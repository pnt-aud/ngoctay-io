import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function Grid({ children, columns = 3 }: GridProps) {
  const columnClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns];

  return <div className={`grid grid-cols-1 gap-6 ${columnClass ?? ""}`}>{children}</div>;
}
