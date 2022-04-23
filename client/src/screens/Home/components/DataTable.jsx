import React, { useState } from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import MetaData from "./MetaData/MetaData";
import downloadFile from "../../../utils/download";

const tCellSx = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  cursor: "pointer",
};

export default function DataTable({ domains, time, host }) {
  const [tableData, setTableData] = useState(domains);
  const [sortDir, setSortDir] = useState("");

  const sortTable = (column) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (sortDir === "asc") {
        setSortDir("dec");
        return a[column] > b[column] ? 1 : -1;
      } else {
        setSortDir("asc");
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setTableData(sortedData);
  };

  const downloadHandler = () => {
    downloadFile(JSON.stringify({ host, time, tableData }), `ads-txt_${host}.json`, "application/json");
  };

  return (
    <>
      <MetaData time={time} host={host} total={domains.length} downloadHandler={downloadHandler} />
      <TableContainer component={Paper} elevation={12}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tCellSx} onClick={() => sortTable(0)}>
                Domain
              </TableCell>
              <TableCell sx={tCellSx} align="center" onClick={() => sortTable(1)}>
                Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row[0]}>
                <TableCell scope="row">{row[0]}</TableCell>
                <TableCell align="center">{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
