import "./App.css";
import { useState } from "react";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import { Project } from "./types/types";
import { getProjects } from "./data/projects";
import profileImage from "./assets/notion-avatar-1737895410401.png";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  CssBaseline,
  Typography,
  Container,
  Button,
} from "@mui/material";
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
      main: "#E98074", // Muted Coral (buttons, interactive elements)
    },
    secondary: {
      main: "#E85A4F", // Deep Coral (CTAs, hover effects)
    },
    background: {
      default: "#EAE7DC", // Warm White (Main background)
      paper: "#D8C3A5", // Beige Sand (Secondary backgrounds)
    },
    text: {
      primary: "#8E8D8A", // Muted Gray (Main text)
      secondary: "#5E5C58", // Darker gray for subtle contrast
    },
  },
  typography: {
    // fontFamily: "'Roboto', sans-serif",
    fontFamily: "'Poppins', 'Inter', 'sans-serif'",
    h1: { fontSize: "3rem", fontWeight: 700 },
    // h2: { fontSize: "1.5rem", color: "#555" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
});

function App() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  // Get localized projects
  const projects: Project[] = getProjects(t);

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
      {/* Navigation */}
      {/* <nav className="nav-bar">
        <div className="logo"></div>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ul>
            <li>
              <a href="#home">{t("layout.home")}</a>
            </li>
            <li>
              <a href="#projects">{t("layout.projects")}</a>
            </li>
            <li>
              <a href="#experience">{t("layout.experience")}</a>
            </li>
            <li>
              <a href="#contact">{t("layout.contact")}</a>
            </li>
          </ul>
        </Box>
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
      </nav> */}

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
            fontSize: { xs: "1.3rem", md: "1.8rem" },
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
            <LinkedInIcon color="primary" fontSize="large" sx={{ mx: 1.5 }} />
          </a>
          <a href="https://github.com/hono1030" rel="noopener noreferrer">
            <GitHubIcon color="primary" fontSize="large" sx={{ mx: 1.5 }} />
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
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: "0.8rem 1.5rem",
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
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: "0.8rem 1.5rem",
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
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              padding: "0.8rem 1.5rem",
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
      <Container
        maxWidth="md"
        id="about-me"
        className="about-me-section section-container"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          padding: { xs: "3rem 2rem", md: "6rem 3rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Avatar
          alt="Honoka Noguchi"
          src={profileImage}
          sx={{
            width: { xs: 120, md: 160 },
            height: { xs: 120, md: 160 },
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              textAlign: "center",
              marginBottom: "1rem",
            }}
            gutterBottom
          >
            About Me
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {t("about-me.introduction")}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1.5 }}>
            <strong>{t("about-me.technologies")}</strong>{" "}
            {t("about-me.technologies-list")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>{t("about-me.languages")}</strong>{" "}
            {t("about-me.language-level")}
          </Typography>
        </Box>
      </Container>

      {/* Projects Section */}
      <div id="projects">
        <Projects
          projects={projects}
          selectedProject={selectedProject}
          featuredImage={featuredImage}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          setFeaturedImage={setFeaturedImage}
        />
      </div>

      {/* Experience */}
      <Container
        maxWidth="lg"
        className="section-container experience-section"
        id="experience"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 4,
        }}
      >
        <Typography
          variant="h3"
          className="section-title"
          sx={{
            my: 6,
            fontWeight: 600,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Experience
        </Typography>
      </Container>

      {/* Contact */}
      {/* <Container
        maxWidth="lg"
        className="section-container contact-section"
        id="contact"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 4,
        }}
      >
        <h2 className="section-title">Contact</h2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <a
            href="https://www.linkedin.com/in/honoka-noguchi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="primary" fontSize="large" />
          </a>
          <a
            href="https://github.com/hono1030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon color="primary" fontSize="large" />
          </a>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon color="primary" fontSize="large" />
            <span>honoka.n1030@gmail.com</span>
          </Box>
        </Box>
      </Container> */}

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
              <LinkedInIcon color="primary" fontSize="large" />
            </a>
            <a
              href="https://github.com/hono1030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="primary" fontSize="large" />
            </a>
          </div>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <EmailIcon color="primary" fontSize="large" />
            <span>honoka.n1030@gmail.com</span>
          </Box>
        </Box>
      </footer>
    </ThemeProvider>
  );
}

export default App;
