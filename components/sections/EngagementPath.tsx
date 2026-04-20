import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const steps = [
  {
    number: "STEP 01",
    timeframe: "TODAY",
    title: "Technical Discussion",
    description:
      "Walk through this briefing together. Mutual scoping. Identify internal stakeholders on both sides.",
    last: false,
  },
  {
    number: "STEP 02",
    timeframe: "WEEK 1–2",
    title: "NDA and Requirements Exchange",
    description:
      "Mutual NDA execution. Virtual technical deep-dive with your SMEs. Requirements document exchanged under NDA.",
    last: false,
  },
  {
    number: "STEP 03",
    timeframe: "WEEK 3–6",
    title: "Joint Scoping Document",
    description:
      "Site geometry review. Threat scenario definition. Integration and IT constraints mapped. Output: a Phase 1 proposal with a defensible cost envelope.",
    last: false,
  },
  {
    number: "STEP 04",
    timeframe: "MONTH 2+",
    title: "Phase 1 Engagement",
    description:
      "Scoping and design contract. Leads to pilot decision at your internal gate.",
    last: true,
  },
];

export default function EngagementPath() {
  return (
    <SectionContainer id="engagement" dark>
      <SectionHeader
        number="05"
        title="Proposed Engagement Path"
        subtitle="A stepwise path that respects internal process."
      />

      <div className="mt-14">
        <FadeInOnScroll>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-4 gap-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${!step.last ? "border-r border-white/5 pr-8" : ""} ${step.last ? "" : "mr-0"}`}
                style={{ paddingLeft: step.number !== "STEP 01" ? "2rem" : undefined }}
              >
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase opacity-70 mb-3">
                  {step.number}
                </p>
                <p className="font-mono text-[10px] text-text-secondary mb-4 uppercase tracking-wider">
                  {step.timeframe}
                </p>
                <p className="font-sans font-[400] text-[17px] text-text-primary mb-2">
                  {step.title}
                </p>
                <p className="font-sans text-lg text-text-secondary leading-[1.75]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`py-8 ${i < steps.length - 1 ? "border-b border-white/5" : ""}`}
              >
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase opacity-70 mb-3">
                  {step.number}
                </p>
                <p className="font-mono text-[10px] text-text-secondary mb-4 uppercase tracking-wider">
                  {step.timeframe}
                </p>
                <p className="font-sans font-[400] text-[17px] text-text-primary mb-2">
                  {step.title}
                </p>
                <p className="font-sans text-lg text-text-secondary leading-[1.75]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2} className="mt-12">
          <div className="border-l-2 pl-6" style={{ borderColor: "rgba(77,212,224,0.3)" }}>
            <p className="font-sans text-lg text-text-secondary leading-[1.75] max-w-[680px]">
              No procurement commitment is required until Phase 1. The first three steps are scoping
              work. Each produces a document you can share internally.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}
