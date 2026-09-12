import { MentoratWidget } from "@/ui-kit/components/organisms/MentoratWidget/MentoratWidget";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./MentoratPage.css";

export const MentoratPage = () => {
  return (
    <>
      <PageHeader title="Mentorat" />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="mentorat-page__intro">
          <div className="container">
            <p>
              Choisissez votre mentor·e et réservez directement un créneau de
              mentorat grâce au calendrier ci-dessous.
            </p>
          </div>
        </section>
        <section className="mentorat-page__widget">
          <div className="container">
            <MentoratWidget />
          </div>
        </section>
      </main>
    </>
  );
};
