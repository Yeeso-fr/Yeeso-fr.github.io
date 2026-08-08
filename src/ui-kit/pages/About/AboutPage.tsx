import type { QaScores } from "@/entities/qa-scores/qa-scores";
import { QaScoresDetails } from "@/ui-kit/components/organisms/QaScores/QaScoresDetails";
import { AboutActionSection } from "@/ui-kit/components/templates/AboutActionSection/AboutActionSection";
import { AboutHero } from "@/ui-kit/components/templates/AboutHero/AboutHero";
import { AboutHistorySection } from "@/ui-kit/components/templates/AboutHistorySection/AboutHistorySection";
import { AboutMissionSection } from "@/ui-kit/components/templates/AboutMissionSection/AboutMissionSection";
import { AboutTeamSection } from "@/ui-kit/components/templates/AboutTeamSection/AboutTeamSection";
import { MembershipCallout } from "@/ui-kit/components/templates/MembershipCallout/MembershipCallout";

type AboutPageProps = {
  qaScores: QaScores | null;
};

export const AboutPage = ({ qaScores }: AboutPageProps) => {
  return (
    <>
      <AboutHero />
      <main id="maincontent" tabIndex={-1} className="main">
        <AboutMissionSection />
        <AboutHistorySection />
        <AboutTeamSection />
        <AboutActionSection />
        <section>
          <div className="container">
            <MembershipCallout />
          </div>
        </section>
        <QaScoresDetails qaScores={qaScores} />
      </main>
    </>
  );
};
