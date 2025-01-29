import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import {
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
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LanguageIcon from "@mui/icons-material/Language";

export default function Projects({
  projects,
  selectedProject,
  featuredImage,
  open,
  onOpen,
  onClose,
  setFeaturedImage,
}) {
  const themForMedia = useTheme();
  const isMobile = useMediaQuery(themForMedia.breakpoints.down("sm"));
  const { t } = useTranslation();
  return (
    <>
      <Container
        maxWidth="lg"
        className="section-container projects-section"
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
                    onClick={() => onOpen(project)}
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
        onClose={onClose}
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
                onClick={onClose}
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
    </>
  );
}
