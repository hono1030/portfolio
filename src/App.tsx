import "./App.css";
import { useTranslation } from "react-i18next";
import {
  CssBaseline,
  Box,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";

const lngs = {
  en: { nativeName: "English" },
  ja: { nativeName: "Japanese" },
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">Honoka</div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
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

      {/* Header */}
      <header className="header" id="home">
        <h1>{t("home.name")}</h1>
        <h2>{t("home.engineer")}</h2>
        <p>{t("home.introduction")}</p>
      </header>

      {/* About */}
      <section className="about-section">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my projects, skills, and professional journey.</p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "1rem" }}
        >
          View Projects
        </Button>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "React",
            "TypeScript",
            "Material UI",
            "Node.js",
            "FastAPI",
            "PostgreSQL",
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        {/* <Projects /> */}
      </section>

      {/* Open Source Contributions */}
      <section className="opensource-section" id="opensource">
        <h2>Open Source Contributions</h2>
      </section>

      {/* Footer */}
      <footer className="footer" id="conatct">
        <p>{new Date().getFullYear()} Honoka Noguchi. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
