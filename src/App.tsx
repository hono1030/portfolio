import "./App.css";
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
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const lngs = {
  en: { nativeName: "English" },
  ja: { nativeName: "Japanese" },
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
    image: "/mugi.png",
    liveDemo: "https://mugi.com",
    github: "https://github.com/mugi",
    details:
      "Built a responsive interface using React, integrated i18next for localization, and developed a robust backend API with FastAPI.",
    techStack: "React, TypeScript, FastAPI, PostgreSQL",
  },
  {
    name: "Discover Japan",
    description: "Travel app for hidden destinations.",
    image: "/discover-japan.png",
    liveDemo: "https://discoverjapan.com",
    github: "https://github.com/discover-japan",
    details:
      "Implemented an SVG map to visualize tourism density, integrated OpenAI for recommendations, and enabled secure image uploads with AWS S3.",
    techStack: "React, TypeScript, OpenAI API, AWS S3, Node.js",
  },
];

function App() {
  const { t, i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                  image={project.image}
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
                  <Button size="small" variant="contained" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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
