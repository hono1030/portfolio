import "./App.css";
import { useState } from "react";
import mugi_img from "./assets/mugi.png";
import discover_japan_img from "./assets/discover-japan.png";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
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
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const lngs = {
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
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const projects = [
  {
    name: "Mugi",
    description: "A bilingual pet sitting platform.",
    whatIDid:
      "Built a responsive interface, integrated localization, and connected to a FastAPI backend.",
    techStack: "React, TypeScript, FastAPI, PostgreSQL",
    images: [mugi_img, discover_japan_img],
    liveDemo: "https://mugi.com",
    github: "https://github.com/mugi",
  },
  {
    name: "Discover Japan",
    description: "Travel app for hidden destinations.",
    whatIDid:
      "Developed interactive SVG maps, integrated OpenAI API, and enabled secure image uploads.",
    techStack: "React, TypeScript, OpenAI API, AWS S3, Node.js",
    images: [discover_japan_img, mugi_img],
    liveDemo: "https://discoverjapan.com",
    github: "https://github.com/discover-japan",
  },
];

function App() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleOpen = (project) => {
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
        <p>{t("home.introduction")}</p>
      </header>

      {/* About */}
      <Container maxWidth="md" className="about-section">
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
      </Container>

      {/* Skills Section */}
      {/* <section className="skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
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
      </section> */}

      {/* Projects Section */}
      <Container maxWidth="lg" className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} ket={project.name}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.images[0]}
                  alt={project.name}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(project)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Details Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1" gutterBottom>
                {selectedProject.description}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedProject.whatIDid}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Tech Stack:</strong> {selectedProject.techStack}
              </Typography>
              <Box textAlign="center">
                <img
                  src={featuredImage}
                  alt="Featured"
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "1rem",
                  }}
                />
                <Box display="flex" justifyContent="center" gap="1rem">
                  {selectedProject.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="Thumbnail"
                      style={{
                        width: "100px",
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
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                href={selectedProject.liveDemo}
                target="_blank"
                variant="contained"
                color="primary"
              >
                Live Demo
              </Button>
              <Button
                href={selectedProject.github}
                target="_blank"
                variant="outlined"
                color="primary"
              >
                GitHub Repo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Open Source Contributions */}
      <Container maxWidth="lg" className="opensource-section" id="opensource">
        <h2 className="section-title">Open Source Contributions</h2>
      </Container>

      {/* Footer */}
      <footer className="footer" id="conatct">
        <p>{new Date().getFullYear()} Honoka Noguchi. All Rights Reserved.</p>
      </footer>
    </ThemeProvider>
  );
}

export default App;
