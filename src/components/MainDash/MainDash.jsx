import React from "react";
import Table from "../Table/Table";
import ProcessTable from "../Process/Process";
import "./MainDash.css";

const MainDash = () => {
  // console.log("mainDash");
  return (
    <div className="mainDash">
      <h2>Dashboard</h2>
      <ProcessTable />
      <Table />
    </div>
  );
};

export default MainDash;
