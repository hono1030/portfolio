import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("home.name")}</h1>
      <h2>{t("home.engineer")}</h2>
      <p>{t("home.introduction")}</p>
    </>
  );
}
