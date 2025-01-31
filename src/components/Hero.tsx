import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";

export default function Hero() {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "4rem 2rem",
          backgroundColor: "background.default",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" color="text.primary">
            Hi, I'm Honoka 👋
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            A Frontend Engineer passionate about creating intuitive digital
            experiences.
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 4, fontSize: "1.1rem", padding: "0.8rem 2rem" }}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </Box> */}
    </>
  );
}
