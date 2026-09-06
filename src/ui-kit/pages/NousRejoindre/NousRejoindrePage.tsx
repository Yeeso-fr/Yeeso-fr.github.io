import { AnchorTags } from "@/ui-kit/components/molecules/AnchorTags/AnchorTags";
import { JoinConversionSection } from "@/ui-kit/components/templates/JoinConversionSection/JoinConversionSection";
import { JoinConvictionSection } from "@/ui-kit/components/templates/JoinConvictionSection/JoinConvictionSection";
import { JoinFinalBanner } from "@/ui-kit/components/templates/JoinFinalBanner/JoinFinalBanner";
import { JoinHero } from "@/ui-kit/components/templates/JoinHero/JoinHero";
import { JoinImpactSection } from "@/ui-kit/components/templates/JoinImpactSection/JoinImpactSection";
import { JoinMentorshipSection } from "@/ui-kit/components/templates/JoinMentorshipSection/JoinMentorshipSection";
import { JoinNetworkSection } from "@/ui-kit/components/templates/JoinNetworkSection/JoinNetworkSection";
import { JoinSkillsSection } from "@/ui-kit/components/templates/JoinSkillsSection/JoinSkillsSection";
import { JoinTransmitSection } from "@/ui-kit/components/templates/JoinTransmitSection/JoinTransmitSection";
import { JoinVoiceSection } from "@/ui-kit/components/templates/JoinVoiceSection/JoinVoiceSection";

const SECTIONS = [
  { id: "developper-reseau", label: "Développez votre réseau" },
  { id: "progresser-partager", label: "Progressez et partagez" },
  { id: "faire-entendre-voix", label: "Faites entendre votre voix" },
  { id: "transmettre-inspirer", label: "Transmettez et inspirez" },
  { id: "competences", label: "Développez vos compétences" },
  { id: "faire-avancer-mixite", label: "Faites avancer la mixité" },
];

export const NousRejoindrePage = () => {
  return (
    <main id="maincontent" tabIndex={-1} className="main">
      <JoinHero />

      <AnchorTags items={SECTIONS} ariaLabel="Façons de rejoindre Yeeso" />

      <JoinNetworkSection />
      <JoinMentorshipSection />
      <JoinVoiceSection />
      <JoinTransmitSection />
      <JoinSkillsSection />
      <JoinConvictionSection />
      <JoinImpactSection />
      <JoinConversionSection />
      <JoinFinalBanner />
    </main>
  );
};
