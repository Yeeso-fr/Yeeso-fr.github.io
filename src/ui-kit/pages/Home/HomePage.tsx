import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { LastArticlesList } from "@/ui-kit/articles/LastArticlesList/LastArticlesList";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { BookSection } from "@/ui-kit/components/templates/BookSection/BookSection";
import { ContextSection } from "@/ui-kit/components/templates/ContextSection/ContextSection";
import { HistorySection } from "@/ui-kit/components/templates/HistorySection/HistorySection";
import { HomeHero } from "@/ui-kit/components/templates/HomeHero/HomeHero";
import { ImpactSection } from "@/ui-kit/components/templates/ImpactSection/ImpactSection";
import { MembershipCallout } from "@/ui-kit/components/templates/MembershipCallout/MembershipCallout";
import { MissionSection } from "@/ui-kit/components/templates/MissionSection/MissionSection";

interface HomePageProps {
  articles: Article[];
  authors: Author[];
}

export const HomePage = ({ articles, authors }: HomePageProps) => {
  return (
    <main id="maincontent" tabIndex={-1} className="main">
      <HomeHero />
      <ContextSection />
      <MissionSection />
      <BookSection />
      <ImpactSection />
      <HistorySection />
      <NetworkSection />
      <section>
        <div className="container">
          <MembershipCallout />
        </div>
      </section>
      {articles.length > 0 && (
        <section className="last-articles">
          <div className="container">
            <span className="section-eyebrow">Le blog</span>
            <h2 className="section_title">Informer & Inspirer</h2>
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
  );
};
