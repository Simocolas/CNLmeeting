import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import DividerLine from "@/components/ui/DividerLine";

// ─── SVG Architecture Pipeline ───────────────────────────────────────────────

function ArchitectureSVG() {
  // Stage center X positions
  const stages = [100, 340, 580, 820, 1060];
  const cy = 140;
  const boxW = 180;
  const boxH = 160;

  // Derived: left/right edges of each box
  const leftEdge = (cx: number) => cx - boxW / 2;
  const rightEdge = (cx: number) => cx + boxW / 2;

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SilentRaven architecture pipeline diagram"
    >
      {/* ── Stage boxes ── */}
      {stages.map((cx) => (
        <rect
          key={cx}
          x={leftEdge(cx)}
          y={cy - boxH / 2}
          width={boxW}
          height={boxH}
          rx={4}
          fill="rgba(17,24,41,0.9)"
          stroke="rgba(77,212,224,0.2)"
          strokeWidth={1}
        />
      ))}

      {/* ── Connecting arrows ── */}
      {[0, 1, 2, 3].map((i) => {
        const x1 = rightEdge(stages[i]);
        const x2 = leftEdge(stages[i + 1]);
        const arrowX = x2;
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={cy}
              x2={arrowX - 6}
              y2={cy}
              stroke="rgba(77,212,224,0.3)"
              strokeWidth={1}
            />
            <polygon
              points={`${arrowX},${cy - 3} ${arrowX - 8},${cy} ${arrowX},${cy + 3}`}
              fill="rgba(77,212,224,0.4)"
            />
          </g>
        );
      })}

      {/* ══ Stage 1: Signal Capture (cx=100) ══ */}
      {/* Antenna icon */}
      <path d="M 100 115 L 100 95" stroke="#4DD4E0" strokeWidth={1.5} fill="none" />
      <path d="M 92 118 Q 88 106 92 95" stroke="#4DD4E0" strokeWidth={1.5} fill="none" />
      <path d="M 108 118 Q 112 106 108 95" stroke="#4DD4E0" strokeWidth={1.5} fill="none" />
      <path d="M 86 122 Q 80 106 86 90" stroke="#4DD4E0" strokeWidth={1.5} fill="none" />
      <path d="M 114 122 Q 120 106 114 90" stroke="#4DD4E0" strokeWidth={1.5} fill="none" />
      {/* Stage title */}
      <text
        x={100}
        y={165}
        textAnchor="middle"
        fontSize={11}
        fontFamily="var(--font-jetbrains), monospace"
        fill="#E8ECF2"
        fontWeight={500}
      >
        Signal Capture
      </text>
      {/* Sub-labels */}
      <text x={100} y={178} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">SDR: Ettus USRP B210 (US)</text>
      <text x={100} y={190} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Broadband RF intake</text>
      <text x={100} y={202} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">GPS time sync</text>

      {/* ══ Stage 2: Local Processing (cx=340) ══ */}
      {/* Chip icon */}
      {/* Outer rect */}
      <rect x={330} y={95} width={20} height={20} rx={2} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      {/* Inner rect */}
      <rect x={334} y={99} width={12} height={12} rx={1} stroke="#4DD4E0" strokeWidth={1} fill="rgba(77,212,224,0.1)" />
      {/* Pins top */}
      <line x1={334} y1={95} x2={334} y2={92} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={338} y1={95} x2={338} y2={92} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={342} y1={95} x2={342} y2={92} stroke="#4DD4E0" strokeWidth={1} />
      {/* Pins bottom */}
      <line x1={334} y1={115} x2={334} y2={118} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={338} y1={115} x2={338} y2={118} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={342} y1={115} x2={342} y2={118} stroke="#4DD4E0" strokeWidth={1} />
      {/* Pins left */}
      <line x1={330} y1={99} x2={327} y2={99} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={330} y1={103} x2={327} y2={103} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={330} y1={107} x2={327} y2={107} stroke="#4DD4E0" strokeWidth={1} />
      {/* Pins right */}
      <line x1={350} y1={99} x2={353} y2={99} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={350} y1={103} x2={353} y2={103} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={350} y1={107} x2={353} y2={107} stroke="#4DD4E0" strokeWidth={1} />
      {/* Stage title */}
      <text x={340} y={165} textAnchor="middle" fontSize={11} fontFamily="var(--font-jetbrains), monospace" fill="#E8ECF2" fontWeight={500}>Local Processing</text>
      {/* Sub-labels */}
      <text x={340} y={178} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Raspberry Pi 5</text>
      <text x={340} y={190} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Altivion carrier PCB</text>
      <text x={340} y={202} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">RID: ASTM F3411 / MIIT</text>
      <text x={340} y={214} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">DJI model classifier</text>

      {/* ══ Stage 3: Multi-Node Fusion (cx=580) ══ */}
      {/* Node graph icon */}
      <circle cx={580} cy={100} r={4} fill="#4DD4E0" />
      <circle cx={568} cy={112} r={3} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      <circle cx={592} cy={112} r={3} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      <line x1={577} y1={103} x2={570} y2={110} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={583} y1={103} x2={590} y2={110} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={571} y1={112} x2={589} y2={112} stroke="#4DD4E0" strokeWidth={1} strokeDasharray="3,2" />
      {/* Stage title */}
      <text x={580} y={165} textAnchor="middle" fontSize={11} fontFamily="var(--font-jetbrains), monospace" fill="#E8ECF2" fontWeight={500}>Multi-Node Fusion</text>
      {/* Sub-labels */}
      <text x={580} y={178} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Cross-node de-duplication</text>
      <text x={580} y={190} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">TDOA localization</text>
      <text x={580} y={202} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Flight path reconstruction</text>

      {/* ══ Stage 4: On-Premise Server (cx=820) ══ */}
      {/* Server rack icon */}
      <rect x={808} y={93} width={24} height={7} rx={1} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      <rect x={808} y={102} width={24} height={7} rx={1} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      <rect x={808} y={111} width={24} height={7} rx={1} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      {/* LED dots */}
      <circle cx={828} cy={96.5} r={1.5} fill="#4DD4E0" opacity={0.6} />
      <circle cx={828} cy={105.5} r={1.5} fill="#4DD4E0" opacity={0.6} />
      <circle cx={828} cy={114.5} r={1.5} fill="#4DD4E0" opacity={0.6} />
      {/* Stage title */}
      <text x={820} y={165} textAnchor="middle" fontSize={11} fontFamily="var(--font-jetbrains), monospace" fill="#E8ECF2" fontWeight={500}>On-Premise Server</text>
      {/* Sub-labels */}
      <text x={820} y={178} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Air-gap capable</text>
      <text x={820} y={190} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Hash-signed flight logs</text>
      <text x={820} y={202} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">No cloud dependency</text>

      {/* ══ Stage 5: Operator Output (cx=1060) ══ */}
      {/* Monitor icon */}
      <rect x={1046} y={93} width={28} height={20} rx={2} stroke="#4DD4E0" strokeWidth={1} fill="none" />
      <line x1={1060} y1={113} x2={1060} y2={118} stroke="#4DD4E0" strokeWidth={1} />
      <line x1={1053} y1={118} x2={1067} y2={118} stroke="#4DD4E0" strokeWidth={1} />
      {/* Inner screen */}
      <rect x={1049} y={96} width={22} height={14} rx={1} fill="rgba(77,212,224,0.05)" />
      {/* Stage title */}
      <text x={1060} y={165} textAnchor="middle" fontSize={11} fontFamily="var(--font-jetbrains), monospace" fill="#E8ECF2" fontWeight={500}>Operator Output</text>
      {/* Sub-labels */}
      <text x={1060} y={178} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">Web dashboard (Leaflet)</text>
      <text x={1060} y={190} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">iOS reference client</text>
      <text x={1060} y={202} textAnchor="middle" fontSize={9} fontFamily="var(--font-jetbrains), monospace" fill="#8A92A8">REST / MQTT API</text>
    </svg>
  );
}

// ─── Mobile Stage Cards ────────────────────────────────────────────────────

const mobileStages = [
  {
    title: "Signal Capture",
    items: ["SDR: Ettus USRP B210 (US)", "Broadband RF intake", "GPS time sync"],
  },
  {
    title: "Local Processing",
    items: ["Raspberry Pi 5", "Altivion carrier PCB", "RID: ASTM F3411 / MIIT", "DJI model classifier"],
  },
  {
    title: "Multi-Node Fusion",
    items: ["Cross-node de-duplication", "TDOA localization", "Flight path reconstruction"],
  },
  {
    title: "On-Premise Server",
    items: ["Air-gap capable", "Hash-signed flight logs", "No cloud dependency"],
  },
  {
    title: "Operator Output",
    items: ["Web dashboard (Leaflet)", "iOS reference client", "REST / MQTT API"],
  },
];

function MobileStages() {
  return (
    <div className="flex flex-col gap-0">
      {mobileStages.map((stage, i) => (
        <div key={stage.title}>
          <div
            className="p-5"
            style={{
              background: "rgba(17,24,41,0.9)",
              border: "1px solid rgba(77,212,224,0.2)",
              borderRadius: "4px",
            }}
          >
            <p
              className="font-mono text-[12px] font-medium mb-3"
              style={{ color: "#E8ECF2" }}
            >
              {`0${i + 1} — ${stage.title}`}
            </p>
            <ul className="flex flex-col gap-1">
              {stage.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[10px]"
                  style={{ color: "#8A92A8" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {i < mobileStages.length - 1 && (
            <div
              className="flex items-center justify-center py-2"
              style={{ color: "rgba(77,212,224,0.4)", fontSize: "18px" }}
            >
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Supply Chain Chips ───────────────────────────────────────────────────

const supplyChips = [
  {
    dotClass: "bg-accent",
    dotStyle: {},
    label: "Canadian-designed",
    sub: "System architecture · carrier PCB · software stack · RID database",
  },
  {
    dotClass: "",
    dotStyle: { background: "#B0B8D0" },
    label: "US-sourced",
    sub: "Ettus Research USRP B210 SDR front-end (Analog Devices / NI)",
  },
  {
    dotClass: "bg-accent",
    dotStyle: {},
    label: "Controlled supply chain",
    sub: "Detection, compute, and communications components sourced exclusively from Canada, US, and allied nations",
  },
];

// ─── Field Config Items ──────────────────────────────────────────────────

const configItems = [
  {
    label: "Enclosure IP rating",
    value: "Industrial-grade per site requirements",
  },
  {
    label: "Operating temperature",
    value: "–40°C to +40°C via selected compute and heating modules",
  },
  {
    label: "Communications",
    value: "Ethernet, 4G/LTE, or fiber per site infrastructure",
  },
  {
    label: "Power",
    value: "PoE, solar-battery hybrid, or site mains per deployment geometry",
  },
];

// ─── Main Component ──────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <SectionContainer id="how-it-works" dark>
      {/* Header */}
      <FadeInOnScroll>
        <SectionHeader
          number="03"
          title="How SilentRaven Works"
          subtitle="Passive RF detection, processed entirely on-site. No cloud dependency. Designed and built in Canada."
        />
      </FadeInOnScroll>

      {/* Stat block */}
      <FadeInOnScroll delay={0.05} className="mt-16 mb-4">
        <div className="grid grid-cols-3 gap-8 border-y py-10" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {[
            { value: "5", label: "Signal capture to operator output", unit: "stages" },
            { value: "0", label: "From detection to log storage", unit: "cloud calls" },
            { value: "100%", label: "Every data path", unit: "on-premise" },
          ].map((stat) => (
            <div key={stat.unit} className="text-center">
              <p style={{ fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 300, color: "#E8ECF2", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="font-mono text-[11px] mt-2" style={{ color: "#4DD4E0" }}>{stat.unit}</p>
              <p className="font-mono text-[10px] mt-1" style={{ color: "rgba(168,176,192,0.5)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Part 1: Architecture Pipeline Diagram */}
      <FadeInOnScroll delay={0.1} className="mt-16">
        {/* Desktop SVG */}
        <div className="hidden md:block w-full overflow-x-auto">
          <ArchitectureSVG />
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden">
          <MobileStages />
        </div>

        {/* Caption */}
        <p
          className="mt-6 font-mono text-[11px] italic text-center"
          style={{ color: "#8A92A8" }}
        >
          Every stage runs on-site. No signal, no metadata, no log leaves the facility unless you export it.
        </p>
      </FadeInOnScroll>

      <DividerLine className="mt-16" />

      {/* Part 2: Supply Chain Provenance */}
      <FadeInOnScroll delay={0} className="mt-12">
        <p
          className="font-mono text-[10px] tracking-widest uppercase mb-6"
          style={{ color: "#4DD4E0" }}
        >
          SUPPLY CHAIN PROVENANCE
        </p>
        <div className="flex flex-wrap gap-4">
          {supplyChips.map((chip) => (
            <div
              key={chip.label}
              className="flex-1 p-5"
              style={{
                minWidth: "200px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${chip.dotClass}`}
                  style={chip.dotStyle}
                />
                <span
                  className="font-mono text-[12px]"
                  style={{ color: "#E8ECF2" }}
                >
                  {chip.label}
                </span>
              </div>
              <p
                className="font-mono text-[10px] leading-relaxed"
                style={{ color: "#8A92A8" }}
              >
                {chip.sub}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      <DividerLine className="mt-12" />

      {/* Part 3: Research Collaboration */}
      <FadeInOnScroll delay={0} className="mt-12">
        <div
          className="pl-5"
          style={{ borderLeft: "1px solid rgba(77,212,224,0.2)" }}
        >
          <p
            className="font-sans text-[14px] leading-relaxed"
            style={{ color: "#8A92A8" }}
          >
            Passive acoustic and TDOA detection for non-cooperative drones (RID-off, hobbyist-modified,
            or dark-signature platforms) is under active research collaboration with Dr. Abraham Fapojuwo
            and his team at the University of Calgary, under the Department of National Defence&apos;s{" "}
            <a
              href="https://www.canada.ca/en/department-national-defence/programs/defence-ideas/element/innovation-networks/challenge/from-innovation-to-operational-advantage-defence-innovation-secure-hubs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/40 hover:decoration-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
            >
              Defence Innovation Secure Hubs (DISH) program
            </a>
            . This capability is not in the current SilentRaven production baseline. It is in our 12-month roadmap.
          </p>
        </div>
      </FadeInOnScroll>

      <DividerLine className="mt-12" />

      {/* Part 4: Field Configuration Options */}
      <FadeInOnScroll delay={0} className="mt-12">
        <p
          className="font-mono text-[10px] tracking-widest uppercase mb-5"
          style={{ color: "#4DD4E0" }}
        >
          FIELD CONFIGURATION OPTIONS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {configItems.map((item) => (
            <div key={item.label}>
              <p
                className="font-mono text-[12px] mb-1"
                style={{ color: "#E8ECF2" }}
              >
                {item.label}
              </p>
              <p
                className="font-sans text-[13px]"
                style={{ color: "#8A92A8" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-6 font-mono text-[12px] italic"
          style={{ color: "#8A92A8" }}
        >
          Detailed architecture, PCB design, software stack documentation, and algorithm descriptions are available under NDA.
        </p>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
