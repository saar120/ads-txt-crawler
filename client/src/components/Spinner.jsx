import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Container } from "@mui/material";

const spinnerSize = {
  lg: 200,
  sm: 50,
  md: 100,
};

function Spinner({ size }) {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "10px" }}>
      <CircularProgress size={spinnerSize[size] || 100} />
    </Container>
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
};

export default Spinner;
