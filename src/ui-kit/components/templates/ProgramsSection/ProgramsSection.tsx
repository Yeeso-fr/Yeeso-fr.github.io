import {
  faBuilding,
  faCalendarCheck,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ProgramsSection.css";

const PROGRAMS = [
  {
    icon: faGraduationCap,
    title: "Éducation",
    description:
      "Information, sensibilisation, entraide et déconstruction des préjugés, de la maternelle au travail.",
    link: { href: "/education", label: "Découvrir nos actions" },
  },
  {
    icon: faBuilding,
    title: "Entreprise",
    description:
      "Accompagnement des entreprises dans leurs démarches de mixité des équipes informatiques.",
    link: { href: "/entreprises", label: "Découvrir notre offre" },
  },
  {
    icon: faUsers,
    title: "Réseau",
    description:
      "Mentorat, coding dojos, groupes de parole et conférences : un réseau d'entraide pour les femmes de la tech.",
    link: { href: "/reseau", label: "Rejoindre le réseau" },
  },
  {
    icon: faCalendarCheck,
    title: "Conférences",
    description:
      "Accompagnement des équipes organisatrices de conférences, meetups et événements tech vers plus de mixité et d'inclusion.",
    link: { href: "/conferences", label: "Devenir partenaire" },
  },
] as const;

export const ProgramsSection = () => {
  return (
    <section className="programs-section" id="programmes">
      <div className="container">
        <span className="section-eyebrow">Programmes</span>
        <h2 className="programs-section__title">Nos actions</h2>
        <p className="programs-section__lead">
          Quatre programmes pour former les femmes et les hommes dès le plus
          jeune âge, intervenir dans les organisations existantes, fédérer un
          réseau d'entraide, et rendre les événements tech plus inclusifs.
        </p>

        <div className="programs-section__cards">
          {PROGRAMS.map((program) => (
            <div className="program-card" key={program.title}>
              <FontAwesomeIcon
                icon={program.icon}
                className="program-card__icon"
                aria-hidden
              />
              <h3 className="program-card__title">{program.title}</h3>
              <p className="program-card__description">{program.description}</p>
              {program.link && (
                <StyledLink href={program.link.href} bordered={true}>
                  {program.link.label}
                </StyledLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
