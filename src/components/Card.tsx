import {
  CssBaseline,
  Box,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";

export default function Card({ title, description, buttonLabel, onClick }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonLabel && (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={onClick}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
