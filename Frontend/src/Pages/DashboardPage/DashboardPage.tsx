import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import DashboardBody from "./DashboardBody";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <Sidebar />
      <Header/>
      <DashboardBody/>
    </>
  );
};

export default DashboardPage;
