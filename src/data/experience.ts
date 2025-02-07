import { TFunction } from "i18next";
import { Experience } from "../types/types";
import sustainability_logo from "../assets/sustainability_logo.jpeg";
// import findADoc_logo from "../assets/find-a-doc-logo.png";

export const getExperience = (t: TFunction): Experience[] => [
  {
    name: "Sustainability Page",
    role: "Frontend Engineer",
    description: t("experience.sustainability.description"),
    logo: sustainability_logo,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Playwright"],
    site: "https://sustainabilitypage.com/",
    github: "",
    // github: "https://github.com/sustainabilitypage/sustainability-frontend",
  },
  //   {
  //     name: "Find a Doc, Japan",
  //     role: "Frontend Engineer",
  //     description: t("experience.find-a-doc.description"),
  //     logo: findADoc_logo,
  //     techStack: ["TypeScript", "Vue.js", "Nuxt", "Pinia", "Node.js"],
  //     site: "https://www.findadoc.jp/",
  //     github: "",
  //     // github: "https://github.com/ourjapanlife/findadoc-web?tab=readme-ov-file",
  //   },
];
