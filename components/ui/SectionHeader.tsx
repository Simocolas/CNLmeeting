import React from "react";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <div>
      <p className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-3">
        {number}
      </p>
      <h2 className="font-sans font-light text-[40px] md:text-[48px] text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-xl text-text-secondary max-w-[640px] leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
