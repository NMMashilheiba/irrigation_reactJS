import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, startTime, endTime, status) {
  return { name, startTime, endTime, status };
}

const rows = [
  createData("P-1 ", "060000", "180000", "Done"),
  createData("P-2  ", "060000", "180000", "Pending"),
  createData("P-3  ", "060000", "180000", "Done"),
  createData("P-4 ", "060000", "180000", "In Progress"),
];

const makeStyle = (status) => {
  if (status === "Done") {
    return {
      background: "#009800",
      color: "White",
    };
  } else if (status === "Pending") {
    return {
      background: "#CE0000",
      color: "White",
    };
  } else if (status === "In Progress") {
    return {
      background: "#003CFF",
      color: "White",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Summary</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plot</TableCell>

              <TableCell align="left">Start Time</TableCell>
              <TableCell align="left">End Time</TableCell>
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

                <TableCell align="left">{row.startTime}</TableCell>
                <TableCell align="left">{row.endTime}</TableCell>

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
