import { Project } from "../types/types"; // Ensure you import the Project type
import mugi_img from "../assets/mugi.png";
import mugi_1 from "../assets/mugi_1.png";
import mugi_2 from "../assets/mugi_2.png";
import mugi_3 from "../assets/mugi_3.png";
import mugi_4 from "../assets/mugi_4.png";
import discover_japan_img from "../assets/discover-japan.png";
import discover_japan_1 from "../assets/discover-japan_1.png";
import discover_japan_2 from "../assets/discover-japan_2.png";
import discover_japan_3 from "../assets/discover-japan_3.png";
import discover_japan_4 from "../assets/discover-japan_4.png";

export const getProjects = (
  t: (key: string, options?: any) => string | string[]
): Project[] => [
  {
    name: t("projects.mugi.name"),
    description: t("projects.mugi.description"),
    whatIDid: t("projects.mugi.whatIDid", { returnObjects: true }) as string[],
    techStack:
      "TypeScript, React, Tailwind CSS, Figma, i18next, Python, FastAPI, PostgreSQL, Firebase, Docker, Render",
    images: [mugi_img, mugi_1, mugi_2, mugi_3, mugi_4],
    site: "https://mugi.pet/",
    demo: "https://www.youtube.com/watch?v=nf6tw-EHCgg",
    github: "https://github.com/cc-pet-sitter/frontend",
  },
  {
    name: t("projects.discover-japan.name"),
    description: t("projects.discover-japan.description"),
    whatIDid: t("projects.discover-japan.whatIDid", {
      returnObjects: true,
    }) as string[],
    techStack:
      "TypeScript, React, Node.js, Express, PostgreSQL, OpenAI API, AWS S3, Heroku",
    images: [
      discover_japan_img,
      discover_japan_1,
      discover_japan_2,
      discover_japan_3,
      discover_japan_4,
    ],
    site: "https://solomvp-discoverjp-frontend.netlify.app/",
    demo: "",
    github: "https://github.com/hono1030/soloMVP-frontend",
  },
];

// const projects: Project[] = [
//   {
//     name: t("projects.mugi.name"),
//     description:
//       "I collaborated with three team members on Mugi, a bilingual platform connecting pet owners with trusted sitters. My primary focus was on the frontend, where I led efforts to design and implement scalable and user-friendly interfaces. I also contributed to enhancing accessibility by implementing localization features.",
//     whatIDid: [
//       "Designed UI prototypes in Figma to refine user flows and improve usability.",
//       "Built responsive, user-focused interfaces with React and TypeScript, integrating seamlessly with backend APIs.",
//       "Implemented bilingual (Japanese/English) localization using i18next, expanding accessibility.",
//     ],
//     techStack:
//       "TypeScript, React, Tailwind CSS, Figma, i18next, Python, FastAPI, PostgreSQL, Firebase, Docker, Render",
//     images: [mugi_img, mugi_1, mugi_2, mugi_3, mugi_4],
//     site: "https://mugi.pet/",
//     demo: "https://www.youtube.com/watch?v=nf6tw-EHCgg",
//     github: "https://github.com/cc-pet-sitter/frontend",
//   },
//   {
//     name: "Discover Japan : Travel app for hidden destinations",
//     description:
//       "This is my solo project. I developed Discover Japan, a travel app designed to promote sustainable tourism by encouraging users to explore hidden gems across Japan. The app offers personalized recommendations based on user preferences, a clickable map where users can post and view pictures, and a visual representation of visit rates for each prefecture to balance tourism flow.",
//     whatIDid: [
//       "Built a dynamic query builder and interactive SVG map to visualize tourism density using CSV data.",
//       "Integrated OpenAI API for personalized travel recommendations with optimized prompt engineering.",
//       "Developed a system allowing users to upload, retrieve, and view images seamlessly, using AWS S3 with presigned URLs.",
//     ],
//     techStack:
//       "TypeScript, React, Node.js, Express, PostgreSQL, OpenAI API, AWS S3, Heroku",
//     images: [
//       discover_japan_img,
//       discover_japan_1,
//       discover_japan_2,
//       discover_japan_3,
//       discover_japan_4,
//     ],
//     site: "https://solomvp-discoverjp-frontend.netlify.app/",
//     demo: "",
//     github: "https://github.com/hono1030/soloMVP-frontend",
//   },
// ];
