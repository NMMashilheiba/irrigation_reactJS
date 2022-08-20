import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Process.css";

function createData(name, motor, status) {
  return { name, motor, status };
}

const rows = [
  createData("P-1 ", "M1", "ON"),
  createData("P-2  ", "M2", "ON"),
  createData("P-3  ", "-", "OFF"),
  createData("P-4 ", "-", "OFF"),
];

const makeStyle = (status) => {
  if (status === "ON") {
    return {
      background: "#009800",
      color: "White",
    };
  } else if (status === "OFF") {
    return {
      background: "#CE0000",
      color: "White",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function ProcessTable() {
  return (
    <div className="Table">
      <h3>Processes</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plot</TableCell>

              <TableCell align="left">Motor </TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="left">{row.motor}</TableCell>

                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
