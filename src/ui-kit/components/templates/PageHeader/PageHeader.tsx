import "./PageHeader.css";

interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <section aria-labelledby="page-header-title" className="page-header">
      <div className="page-header__container">
        <h1 id="page-header-title" className="page-header__title">
          {title}
        </h1>
      </div>
    </section>
  );
};
