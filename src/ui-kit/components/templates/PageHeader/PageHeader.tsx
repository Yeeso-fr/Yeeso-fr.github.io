import "./PageHeader.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type LogoAccent = "noir" | "orange" | "rose" | "vert";

interface PageHeaderProps {
  title: string;
  logoAccent?: LogoAccent;
}

export const PageHeader = ({ title, logoAccent }: PageHeaderProps) => {
  return (
    <section aria-labelledby="page-header-title" className="page-header">
      <div className="page-header__container">
        <h1 id="page-header-title" className="page-header__title">
          {title}
        </h1>
      </div>
      {logoAccent && (
        <img
          src={`${basePath}/img/logos/logo-secondaire-${logoAccent}.webp`}
          alt=""
          width={1200}
          height={349}
          className="page-header__logo-accent"
        />
      )}
    </section>
  );
};
