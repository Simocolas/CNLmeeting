import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const cards = [
  {
    title: "Operational Requirements",
    questions: [
      "Coverage area and specific zones to protect (perimeter, airspace layers, standoff distance)",
      "Target threat classes (small quadrotor, fixed-wing, swarm scenarios)",
      "Operational environment (all-weather profile, seasonal range, RF ambient noise)",
      "Integration with existing Emergency Operations Centre and response protocols",
    ],
  },
  {
    title: "IT & Security Constraints",
    questions: [
      "On-premise data retention policies (duration, storage location, access controls)",
      "Network architecture (air-gapped, segmented, permitted VLANs)",
      "Supply chain audit requirements (BOM disclosure, country-of-origin restrictions)",
      "Cybersecurity certification expectations (ITSG-33, NIST SP 800-53, CSE guidance)",
    ],
  },
  {
    title: "Regulatory & Process",
    questions: [
      "CNSC physical security framework touchpoints",
      "Transport Canada airspace coordination (existing CYR, TFR, or NOTAM arrangements)",
      "Site access and security clearance requirements for our team",
      "Internal decision process for pilot engagement",
    ],
  },
];

export default function QuestionsForCNL() {
  return (
    <SectionContainer id="questions">
      <SectionHeader
        number="04"
        title="What We Need to Understand From You"
        subtitle="To scope a representative deployment, these are the dimensions we need to align on. We don't expect answers to all of these today."
      />

      <div className="mt-14">
        <FadeInOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {cards.map((card, index) => (
              <div
                key={card.title}
                style={{
                  background: "#111829",
                  border: "1px solid rgba(77,212,224,0.15)",
                }}
                className="p-7 h-full flex flex-col"
              >
                <p className="font-mono text-sm text-accent tracking-widest uppercase mb-5">
                  {card.title}
                </p>
                <ul className="flex-grow space-y-3">
                  {card.questions.map((q) => (
                    <li key={q} className="text-lg text-text-secondary leading-loose">
                      <span className="text-accent mr-2 opacity-60">·</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="font-sans text-[15px] text-text-secondary leading-relaxed max-w-[700px]">
            These questions define the shape of a serious scoping engagement. Some you may answer in
            the meeting. Some will require input from colleagues not in the room. Both are expected.
          </p>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}
