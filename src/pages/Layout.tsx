import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/Layout.css";

const lngs = {
  en: { nativeName: "English" },
  ja: { nativeName: "Japanese" },
};

export default function Layout() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <nav className="navbar">
        <div className="logo">Honoka</div>
        <div className="menu">
          <li>
            <Link to="/">{t("layout.home")}</Link>
          </li>
          <li>
            <Link to="projects">{t("layout.projects")}</Link>
          </li>
          <li>
            <Link to="contact">{t("layout.contact")}</Link>
          </li>
        </div>
        <div className="locale">
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </nav>

      <Outlet />
    </>
  );
}
