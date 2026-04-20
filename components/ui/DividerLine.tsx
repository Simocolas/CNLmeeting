import React from "react";

interface Props {
  className?: string;
}

export default function DividerLine({ className = "" }: Props) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ height: "1px", background: "rgba(77, 212, 224, 0.12)" }}
    />
  );
}
