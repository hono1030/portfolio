import "./App.css";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import { Project } from "./types/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  ja: { nativeName: "日本語" },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#7a8b7d",
    },
    secondary: {
      main: "#B38B6D",
    },
    background: {
      default: "#F7F4EF",
    },
    text: {
      primary: "#5E5E5E",
      secondary: "#7A8B89",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

function App() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setFeaturedImage(project.images[0]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setFeaturedImage(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero section */}
      <header className="header" id="home">
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

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
            animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
          gutterBottom
        >
          {t("home.name")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.4rem", md: "1.7rem" },
            color: "text.secondary",
            maxWidth: "70%",
            animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {t("home.engineer")}
        </Typography>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/honoka-noguchi/"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="secondary" fontSize="large" sx={{ mx: 1.5 }} />
          </a>
          <a href="https://github.com/hono1030" rel="noopener noreferrer">
            <GitHubIcon color="secondary" fontSize="large" sx={{ mx: 1.5 }} />
          </a>
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            color="primary"
            href="#about-me"
            sx={{
              mt: 4,
              mx: 1,
              width: { xs: "6.5rem", md: "8rem" },
              height: "auto",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: { xs: "0.6rem 0.8rem", md: "0.8rem 1.5rem" },
              borderRadius: 8,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {t("layout.about-me")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            sx={{
              mt: 4,
              mx: 1,
              width: { xs: "6.5rem", md: "8rem" },
              height: "auto",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: { xs: "0.6rem 0.8rem", md: "0.8rem 1.5rem" },
              borderRadius: 8,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {t("layout.projects")}
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="#experience"
            sx={{
              mt: 4,
              mx: 1,
              width: { xs: "6.5rem", md: "8rem" },
              height: "auto",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: { xs: "0.6rem 0.8rem", md: "0.8rem 1.5rem" },
              borderRadius: 8,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            {t("layout.experience")}
          </Button>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="about-me-section section-container">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container projects-section">
        <Projects
          selectedProject={selectedProject}
          featuredImage={featuredImage}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          setFeaturedImage={setFeaturedImage}
        />
      </section>

      {/* Experience */}
      <section id="experience" className="section-container experience-section">
        <Experience />
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <Typography
          variant="h6"
          sx={{
            my: 2,
            fontWeight: 600,
          }}
        >
          Contact
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <div>
            <a
              href="https://www.linkedin.com/in/honoka-noguchi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="secondary" fontSize="large" />
            </a>
            <a
              href="https://github.com/hono1030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="secondary" fontSize="large" />
            </a>
          </div>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <EmailIcon color="secondary" fontSize="large" />
            <span style={{ color: "#B38B6D" }}>honoka.n1030@gmail.com</span>
          </Box>
        </Box>
      </footer>
    </ThemeProvider>
  );
}

export default App;
