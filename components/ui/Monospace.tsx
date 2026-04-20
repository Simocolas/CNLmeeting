import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Monospace({ children, className = "" }: Props) {
  return (
    <code className={`font-mono text-accent opacity-80 text-[0.9em] ${className}`}>
      {children}
    </code>
  );
}
