import { getExperience } from "../data/experience";
import { useTranslation } from "react-i18next";
import { Typography, Container, Grid, Button, Box, Chip } from "@mui/material";
import type { Experience } from "../types/types";

export default function Experience() {
  const { t } = useTranslation();
  // Get localized projects
  const experiences: Experience[] = getExperience(t);

  return (
    <>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          className="section-title"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 600,
            marginBottom: { xs: "2rem", md: "5rem" },
          }}
        >
          Experience
        </Typography>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {experiences.map((list, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.5rem",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                mx: { xs: "0rem", md: "2rem" },
                maxWidth: "100%",
                marginBottom: "2.5rem",
              }}
            >
              {/* Logo and Title Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {/* Logo */}
                <img
                  src={list.logo}
                  alt={`${list.name} logo`}
                  style={{
                    width: "40px",
                    height: "auto",
                  }}
                />

                {/* Name and Role */}
                <Box
                  sx={{
                    textAlign: "start",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {list.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {list.role}
                  </Typography>
                </Box>
              </Box>

              {/* Project Details */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {list.description}
                </Typography>

                {/* Tech Stack as Small Chips */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    my: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {list.techStack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    mt: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {list.site && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={list.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </Button>
                  )}
                  {list.github && (
                    <Button
                      variant="outlined"
                      color="primary"
                      href={list.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
