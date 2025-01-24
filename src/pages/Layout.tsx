import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ja: { nativeName: "Japanese" },
};

export default function Layout() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("layout.home")}</Link>
          </li>
          <li>
            <Link to="projects">{t("layout.projects")}</Link>
          </li>
          <li>
            <Link to="contact">{t("layout.contact")}</Link>
          </li>
        </ul>
        <div>
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
