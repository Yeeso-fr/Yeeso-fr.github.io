import { AnchorTags } from "@/ui-kit/components/molecules/AnchorTags/AnchorTags";
import { AboutActionSection } from "@/ui-kit/components/templates/AboutActionSection/AboutActionSection";
import { AboutAntennasSection } from "@/ui-kit/components/templates/AboutAntennasSection/AboutAntennasSection";
import { AboutHero } from "@/ui-kit/components/templates/AboutHero/AboutHero";
import { AboutHistorySection } from "@/ui-kit/components/templates/AboutHistorySection/AboutHistorySection";
import { AboutMissionSection } from "@/ui-kit/components/templates/AboutMissionSection/AboutMissionSection";
import { AboutTeamSection } from "@/ui-kit/components/templates/AboutTeamSection/AboutTeamSection";
import { MembershipCallout } from "@/ui-kit/components/templates/MembershipCallout/MembershipCallout";
import "./AboutPage.css";

const SECTIONS = [
  { id: "mission", label: "Notre mission" },
  { id: "histoire", label: "Notre histoire" },
  { id: "equipe", label: "Notre équipe" },
  { id: "antennes", label: "Nos antennes" },
];

export const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="about-page__categories">
          <div className="container">
            <AnchorTags
              items={SECTIONS}
              ariaLabel="Sections de la page À propos"
            />
          </div>
        </section>
        <AboutMissionSection />
        <AboutHistorySection />
        <AboutTeamSection />
        <AboutAntennasSection />
        <AboutActionSection />
        <section>
          <div className="container">
            <MembershipCallout />
          </div>
        </section>
      </main>
    </>
  );
};
