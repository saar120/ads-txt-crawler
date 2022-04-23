import React from "react";
import { CircularProgress, Container } from "@mui/material";

const spinnerSize = {
  lg: 200,
  sm: 50,
  md: 100,
};

export default function Spinner({ size }) {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "10px" }}>
      <CircularProgress size={spinnerSize[size] || 100} />
    </Container>
  );
}
