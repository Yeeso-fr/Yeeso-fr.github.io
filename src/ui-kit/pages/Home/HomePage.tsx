import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { LastArticlesList } from "@/ui-kit/articles/LastArticlesList/LastArticlesList";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ContextSection } from "@/ui-kit/components/templates/ContextSection/ContextSection";
import { HistorySection } from "@/ui-kit/components/templates/HistorySection/HistorySection";
import { HomeHero } from "@/ui-kit/components/templates/HomeHero/HomeHero";
import { ImpactSection } from "@/ui-kit/components/templates/ImpactSection/ImpactSection";
import { MissionSection } from "@/ui-kit/components/templates/MissionSection/MissionSection";
import { NetworkSection } from "@/ui-kit/components/templates/NetworkSection/NetworkSection";
import { ProgramsSection } from "@/ui-kit/components/templates/ProgramsSection/ProgramsSection";

interface HomePageProps {
  articles: Article[];
  authors: Author[];
}

export const HomePage = ({ articles, authors }: HomePageProps) => {
  return (
    <>
      <HomeHero />
      <main id="maincontent" tabIndex={-1} className="main">
        <ContextSection />
        <MissionSection />
        <ImpactSection />
        <HistorySection />
        <ProgramsSection />
        <NetworkSection />
        {articles.length > 0 && (
          <section className="last-articles">
            <div className="container">
              <span className="section-eyebrow">Le blog</span>
              <h2 className="section_title">Ce que le réseau écrit</h2>
              <LastArticlesList articles={articles} authors={authors} />
              <footer>
                <StyledLink href={"/articles"} bordered={true}>
                  Tous les articles
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </StyledLink>
              </footer>
            </div>
          </section>
        )}
      </main>
    </>
  );
};
