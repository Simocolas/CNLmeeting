export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      className="bg-bg-primary"
    >
      <div
        className="mx-auto px-6 md:px-12 py-12 flex flex-col items-center gap-2 text-center"
        style={{ maxWidth: "1280px" }}
      >
        <p className="font-mono text-[11px] text-text-secondary">
          Altivion Technologies Inc. · Calgary, Alberta, Canada
        </p>
        <p className="font-mono text-[11px] text-text-secondary opacity-70">
          Prepared for Canadian Nuclear Laboratories · Stephen Cudmore &amp; James Carr
        </p>
        <p className="font-mono text-[11px] text-text-secondary opacity-50">
          April 21, 2026 · 10:00 AM MT · Confidential pre-meeting briefing
        </p>
      </div>
    </footer>
  );
}
