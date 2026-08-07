import "./Logo.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const Logo = () => {
  return (
    <>
      <img
        src={`${basePath}/img/logos/logo-principal-bleu.webp`}
        alt="Yeeso"
        width={1200}
        height={349}
        className="logo logo--light"
      />
      <img
        src={`${basePath}/img/logos/logo-principal-blanc.webp`}
        alt="Yeeso"
        width={1200}
        height={349}
        className="logo logo--dark"
      />
    </>
  );
};
