import Hero from "@/components/sections/Hero";
import WhyMultiNode from "@/components/sections/WhyMultiNode";
import HowItWorks from "@/components/sections/HowItWorks";
import QuestionsForCNL from "@/components/sections/QuestionsForCNL";
import EngagementPath from "@/components/sections/EngagementPath";
import CommercialModel from "@/components/sections/CommercialModel";
import Footer from "@/components/sections/Footer";
import SectionTransition from "@/components/ui/SectionTransition";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTransition />
      <WhyMultiNode />
      <SectionTransition quote="// Hear more. Miss less." />
      <HowItWorks />
      <SectionTransition quote="// Local processing. No exceptions." />
      <QuestionsForCNL />
      <SectionTransition quote="// Scoping is work. Scoping is not a commitment." />
      <EngagementPath />
      <SectionTransition quote="// Standard phasing. No surprises." />
      <CommercialModel />
      <Footer />
    </main>
  );
}
