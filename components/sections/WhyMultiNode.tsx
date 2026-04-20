import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import DividerLine from "@/components/ui/DividerLine";

const insights = [
  {
    label: "Deployment reality",
    text: "Operators in high-security environments kept telling us the same thing. No cloud. No foreign supply chain in the detection path. Data must stay on-site, preferably air-gapped. Handheld units solve a different problem than perimeter protection.",
  },
  {
    label: "Fixed nodes outperform handhelds",
    text: "A handheld device is limited by antenna size, shared processing, and battery draw. A fixed node can be larger, better-grounded, continuously powered, and elevated. In our field experience, raising a node — on a mast, a rooftop, or a tower — gives a material signal-to-noise advantage over ground-level handhelds. It hears more. It misses less.",
  },
  {
    label: "24/7 unattended detection",
    text: "Emergency response concepts of operations require continuous coverage. Handhelds need a human in the loop. Fixed multi-node networks do not sleep, do not get distracted, and do not need a trained operator on the perimeter at 03:00.",
  },
  {
    label: "Multi-node geometry",
    text: "A single sensor is a point. A network is a fabric. Multi-node deployments cover larger areas, tolerate single-node failures, and enable cross-sensor verification to reduce false positives. Node data fuses at a local server, not in the cloud.",
  },
  {
    label: "Mobile coverage\nVehicle-mounted",
    text: "Feedback from DND and RCMP operators points in one direction: when coverage has to move, it has to move on a vehicle. Handheld units sound convenient on paper, but in sustained operations they get set down, forgotten, or run out of battery. Vehicle-mounted nodes are a distinct deployment mode we are designing for — not a handheld replacement.",
  },
];

export default function WhyMultiNode() {
  return (
    <SectionContainer id="why-multi-node" dark>
      <SectionHeader
        number="02"
        title="From Handheld to Multi-Node"
        subtitle="What we learned from the 2025 IDEaS CUAS Urban Sandbox, and why we evolved SilentRaven into a multi-node system."
      />

      <div className="mt-16 flex flex-col gap-0">
        {insights.map((block, i) => (
          <div key={block.label}>
            <FadeInOnScroll delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12 py-8">
                <div className="pt-1">
                  {block.label.split("\n").map((line) => (
                    <span key={line} className="font-mono text-sm text-accent tracking-widest uppercase block">
                      {line}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-text-secondary leading-[1.75]">
                  {block.text}
                </p>
              </div>
            </FadeInOnScroll>

            {(i === 1) && (
              <FadeInOnScroll delay={0.25}>
                <DividerLine />
              </FadeInOnScroll>
            )}

            {i < insights.length - 1 && i !== 1 && (
              <DividerLine />
            )}
          </div>
        ))}
      </div>

      <FadeInOnScroll delay={0.4} className="mt-12">
        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="font-sans text-lg font-[400] text-text-primary leading-[1.75]">
            This is why we evolved SilentRaven from handheld to a multi-node, passive, on-premise network. It reflects what sites like yours actually need, not what a handheld datasheet can deliver.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
