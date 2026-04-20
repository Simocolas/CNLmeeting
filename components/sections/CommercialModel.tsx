import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

interface Phase {
  phase: string;
  deliverable: string;
  pricing: string;
  gate: string;
}

const phases: Phase[] = [
  {
    phase: "Phase 1\nScoping & Design",
    deliverable:
      "Site design, node placement plan, integration specification, IT security documentation package, FAT plan",
    pricing: "Fixed-price engagement",
    gate: "CNL sign-off on design package",
  },
  {
    phase: "Phase 2\nBuild & Deployment",
    deliverable:
      "Manufactured nodes, integrated edge appliance, Factory Acceptance Test at Altivion facility, Site Acceptance Test at CNL, initial operator training",
    pricing: "Fixed-price per deployment scope",
    gate: "Successful SAT sign-off",
  },
  {
    phase: "Phase 3\nOperational Acceptance",
    deliverable:
      "30-day operational reliability demonstration, full documentation handover, transition to sustainment",
    pricing: "Final milestone payment",
    gate: "Operational acceptance certificate",
  },
  {
    phase: "Annual O&S",
    deliverable:
      "Preventive maintenance, firmware and RID database updates, calibration, incident response support",
    pricing:
      "Annual fee as % of Phase 2 system value. Tiers: business hours / extended hours / 24/7 on-call",
    gate: "Defined at Phase 1",
  },
];

const columns: Array<{ key: keyof Phase; label: string }> = [
  { key: "phase", label: "PHASE" },
  { key: "deliverable", label: "DELIVERABLE" },
  { key: "pricing", label: "PRICING BASIS" },
  { key: "gate", label: "ACCEPTANCE GATE" },
];

export default function CommercialModel() {
  return (
    <SectionContainer id="commercial">
      <SectionHeader
        number="06"
        title="Commercial Model"
        subtitle="Phased delivery. Clear acceptance gates. Standard defense and nuclear industry structure."
      />

      <div className="mt-14">
        <FadeInOnScroll>
          {/* Desktop table */}
          <div className="hidden md:block">
            <p className="font-mono text-sm text-accent tracking-[0.25em] mb-8 text-center opacity-70">
              // STANDARD DEFENSE AND NUCLEAR INDUSTRY PHASING
            </p>
            {/* Header row */}
            <div
              className="grid grid-cols-4 gap-4 pb-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {columns.map((col) => (
                <span
                  key={col.label}
                  className="font-mono text-sm text-accent tracking-widest uppercase opacity-70"
                >
                  {col.label}
                </span>
              ))}
            </div>

            {/* Data rows */}
            {phases.map((row) => (
              <div
                key={row.phase}
                className="grid grid-cols-4 gap-4 py-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="font-mono text-sm text-text-primary whitespace-pre-line">
                  {row.phase}
                </div>
                <div className="text-lg text-text-secondary leading-[1.75]">
                  {row.deliverable}
                </div>
                <div className="text-lg text-text-secondary leading-[1.75]">
                  {row.pricing}
                </div>
                <div className="text-lg text-text-secondary leading-[1.75]">
                  {row.gate}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {phases.map((row) => (
              <div
                key={row.phase}
                style={{
                  background: "#111829",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                className="p-6"
              >
                <p className="font-mono text-sm text-text-primary whitespace-pre-line mb-4">
                  {row.phase}
                </p>
                {columns.slice(1).map((col) => (
                  <div key={col.label} className="mb-3 last:mb-0">
                    <p className="font-mono text-[10px] text-accent tracking-widest uppercase opacity-70 mb-1">
                      {col.label}
                    </p>
                    <p className="text-lg text-text-secondary leading-[1.75]">
                      {row[col.key]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* IP Ownership block */}
        <FadeInOnScroll delay={0.1} className="mt-10">
          <div
            style={{
              background: "#111829",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            className="p-7"
          >
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
              IP OWNERSHIP
            </p>
            <p className="text-lg text-text-secondary leading-[1.75]">
              Altivion retains all background IP including the RID parsing engine, DJI model
              classifier, multi-node de-duplication algorithm, and the integration software stack.
              CNL-funded customization results in joint foreground IP per the Phase 1 agreement. All
              source code and design documentation are escrowed at a mutually agreed Canadian escrow
              agent as a standard condition of Phase 1.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Closing line */}
        <FadeInOnScroll delay={0.15} className="mt-8">
          <p className="font-mono text-[12px] text-text-secondary italic">
            Indicative cost envelope will be provided after the April 21 discussion, once operational
            scope is clarified. We do not quote without understanding the site.
          </p>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}
