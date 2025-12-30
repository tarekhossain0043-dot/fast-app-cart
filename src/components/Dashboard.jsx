import React from "react";
import Dash_header from "./dashboard-child-compoents/Dash_header";
import ManageDashboard from "./dashboard-child-compoents/ManageDashboard";
import Chart from "./dashboard-child-compoents/Chart";
import SalesUpdate from "./dashboard-child-compoents/SalesUpdate";

export default function Dashboard() {
  return (
    <div className="pr-5">
      <Dash_header />
      <ManageDashboard />
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-[9fr_3fr] gap-7.5">
        <Chart />
        <SalesUpdate />
      </div>
    </div>
  );
}
