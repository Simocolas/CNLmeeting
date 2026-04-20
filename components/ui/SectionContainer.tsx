import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionContainer({ id, children, className = "", dark = false }: Props) {
  return (
    <section
      id={id}
      className={`w-full ${dark ? "bg-bg-secondary" : "bg-bg-primary"} ${className}`}
    >
      <div className="mx-auto px-6 md:px-12 py-[120px]" style={{ maxWidth: "1280px" }}>
        {children}
      </div>
    </section>
  );
}
