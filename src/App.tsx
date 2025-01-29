import "./App.css";
import { useState } from "react";
import { Project } from "./types/types";
import { getProjects } from "./data/projects";
import profileImage from "./assets/notion-avatar-1737895410401.png";

import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LanguageIcon from "@mui/icons-material/Language";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  ja: { nativeName: "日本語" },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8965",
    },
    text: {
      primary: "#333333",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
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

  const themForMedia = useTheme();
  const isMobile = useMediaQuery(themForMedia.breakpoints.down("sm"));

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
      <nav className="nav-bar">
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
              <a href="#opensource">{t("layout.open-source")}</a>
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
      </nav>

      {/* Header */}
      <header className="header" id="home">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          {t("home.name")}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {t("home.engineer")}
        </Typography>
        <div>
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
      </header>

      {/* About Me Section */}
      <Container
        maxWidth="md"
        className="about-me-section"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          margin: "2rem auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Avatar
          alt="Honoka Noguchi"
          src={profileImage}
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", md: "left" },
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
      <Container
        maxWidth="lg"
        className="section-container projects-section"
        id="projects"
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
            fontSize: { xs: "2rem", md: "3rem" },
            my: 6,
            fontWeight: 600,
          }}
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={project.images[0] as string}
                  alt={project.name}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {project.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {project.name}
                  </Typography> */}
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => handleOpen(project)}
                  >
                    View project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Details Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        fullScreen={isMobile}
        maxWidth="lg"
        className="project-details"
      >
        {selectedProject && (
          <div className="container">
            <DialogTitle
              variant="h4"
              sx={{
                fontSize: { xs: "1.7rem", md: "1.9rem" },
              }}
            >
              {selectedProject.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: "absolute",
                  right: 12,
                  top: 12,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers className="content-container">
              <div className="discription-container">
                <Typography variant="body1" sx={{ my: 2 }} gutterBottom>
                  {selectedProject.description}
                </Typography>
                <ul>
                  {selectedProject.whatIDid?.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ my: 2 }}
                  gutterBottom
                >
                  <strong>{t("project-details.techstack")}</strong>{" "}
                  {selectedProject.techStack}
                </Typography>
                {selectedProject.site && (
                  <Button
                    href={selectedProject.site}
                    target="_blank"
                    color="primary"
                    sx={{ mb: 3, mr: 3, pl: 0 }}
                  >
                    <LanguageIcon color="primary" sx={{ mr: 0.5 }} />
                    Site
                  </Button>
                )}

                {selectedProject.demo && (
                  <Button
                    href={selectedProject.demo}
                    target="_blank"
                    color="primary"
                    sx={{ mb: 3, mr: 3, pl: 0 }}
                  >
                    <OndemandVideoIcon color="primary" sx={{ mr: 0.5 }} />
                    Demo
                  </Button>
                )}
                {/* <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/nf6tw-EHCgg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe> */}

                {selectedProject.github && (
                  <Button
                    href={selectedProject.github}
                    target="_blank"
                    color="primary"
                    sx={{ mb: 3, mr: 3, pl: 0 }}
                  >
                    <GitHubIcon color="primary" sx={{ mr: 0.5 }} />
                    GitHub
                  </Button>
                )}
              </div>
              <div className="image-container">
                <div className="image-gallery">
                  {selectedProject.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="Thumbnail"
                      className="thumbnail"
                      style={{
                        border:
                          featuredImage === image
                            ? "2px solid #ff8965"
                            : "none",
                      }}
                      onClick={() => setFeaturedImage(image)}
                    />
                  ))}
                </div>
                {featuredImage && (
                  <img
                    className="featuredImage"
                    src={featuredImage}
                    alt="Featured"
                  />
                )}
              </div>
            </DialogContent>
          </div>
        )}
      </Dialog>

      {/* Open Source Contributions */}
      <Container
        maxWidth="lg"
        className="section-container opensource-section"
        id="opensource"
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
          Open Source
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
