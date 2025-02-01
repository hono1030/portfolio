import profileImage from "/notion-avatar.png";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Typography, Container } from "@mui/material";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          textAlign: "center",
          marginBottom: "2rem",
        }}
        gutterBottom
      >
        About Me
      </Typography>
      <Container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "1rem", md: "3rem" },
          width: { xs: "90%", md: "65%" },
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
          <Typography variant="body1" sx={{ mt: 2 }}>
            {t("about-me.introduction")}
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {t("about-me.free-time")}
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
    </>
  );
}
