import { TFunction } from "i18next";
import { Experience } from "../types/types";
import findADoc_logo from "../assets/find-a-doc-logo.png";

export const getExperience = (t: TFunction): Experience[] => [
  {
    name: "Find a Doc, Japan",
    role: "Frontend Engineer",
    description: t("experience.find-a-doc.description"),
    logo: findADoc_logo,
    techStack: ["TypeScript", "Vue.js", "Nuxt", "Pinia", "Node.js"],
    site: "https://www.findadoc.jp/",
    github: "",
    // github: "https://github.com/ourjapanlife/findadoc-web?tab=readme-ov-file",
  },
];
