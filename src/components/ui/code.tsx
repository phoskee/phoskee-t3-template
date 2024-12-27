"use client";

import { cn } from "@/lib/utils";

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export function Code({ children, className, ...props }: CodeProps) {
  return (
    <pre
      className={cn(
        "rounded-lg bg-muted px-4 py-2 font-mono text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}
