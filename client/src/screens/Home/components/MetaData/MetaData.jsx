import React from "react";
import "./MetaData.css";

import PropTypes from "prop-types";
import { Button } from "@mui/material";

function MetaData({ time, host, total, downloadHandler }) {
  const ms = typeof time === "number" ? "ms" : "";

  return (
    <div className="MetaData">
      <p className="text">
        Host:<strong>{host}</strong>
      </p>
      <p className="text">
        Total advertisers:<strong>{total}</strong>
      </p>
      <p className="text">
        Parse time:<strong>{time + ms}</strong>
      </p>
      <Button onClick={downloadHandler}>Download</Button>
    </div>
  );
}

MetaData.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  host: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  downloadHandler: PropTypes.func.isRequired,
};

export default MetaData;
