import "./App.css";
import { useState } from "react";
import { Project } from "./types/types";
import profileImage from "./assets/notion-avatar-1737895410401.png";
import mugi_img from "./assets/mugi.png";
import discover_japan_img from "./assets/discover-japan.png";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  CssBaseline,
  Box,
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
  },
});

const projects: Project[] = [
  {
    name: "Mugi : A bilingual pet sitting platform",
    description:
      "I collaborated with three team members on Mugi, a bilingual platform connecting pet owners with trusted sitters. My primary focus was on the frontend, where I led efforts to design and implement scalable and user-friendly interfaces. I also contributed to enhancing accessibility by implementing localization features.",
    whatIDid: [
      "Designed UI prototypes in Figma to refine user flows and improve usability.",
      "Built responsive, user-focused interfaces with React and TypeScript, integrating seamlessly with backend APIs.",
      "Implemented bilingual (Japanese/English) localization using i18next, expanding accessibility.",
    ],
    techStack:
      "TypeScript, React, Tailwind CSS, Figma, i18next, Python, FastAPI, PostgreSQL, Firebase, Docker, Render",
    images: [mugi_img, discover_japan_img],
    site: "https://mugi.pet/",
    demo: "https://mugi.com",
    github: "https://github.com/cc-pet-sitter/frontend",
  },
  {
    name: "Discover Japan : Travel app for hidden destinations",
    description:
      "This is my solo project. I developed Discover Japan, a travel app designed to promote sustainable tourism by encouraging users to explore hidden gems across Japan. The app offers personalized recommendations based on user preferences, a clickable map where users can post and view pictures, and a visual representation of visit rates for each prefecture to balance tourism flow.",
    whatIDid: [
      "Built a dynamic query builder and interactive SVG map to visualize tourism density using CSV data.",
      "Integrated OpenAI API for personalized travel recommendations with optimized prompt engineering.",
      "Developed a system allowing users to upload, retrieve, and view images seamlessly, using AWS S3 with presigned URLs.",
    ],
    techStack:
      "TypeScript, React, Node.js, Express, PostgreSQL, OpenAI API, AWS S3, Heroku",
    images: [discover_japan_img, mugi_img],
    site: "https://solomvp-discoverjp-frontend.netlify.app/",
    demo: "",
    github: "https://github.com/hono1030/soloMVP-frontend",
  },
];

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
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">Honoka</div>
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
        style={{
          margin: "2rem auto",
          display: "flex",
          alignItems: "center",
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
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">{t("about-me.introduction")}</Typography>
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
        <h2 className="section-title">Projects</h2>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={project.images[0]}
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
                <CardActions>
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
        maxWidth="lg"
        className="project-details"
      >
        {selectedProject && (
          <div className="container">
            <DialogTitle variant="h4">
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
                      style={{
                        width: "180px",
                        height: "auto",
                        cursor: "pointer",
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
                    src={featuredImage}
                    alt="Featured"
                    style={{
                      width: "70%",
                      height: "auto",
                      marginBottom: "1rem",
                    }}
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
        <h2 className="section-title">Open Source Contributions</h2>
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
        <h3>Contact</h3>
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
      </footer>
    </ThemeProvider>
  );
}

export default App;
