import React from "react";
import "./index.css";
import { Layout } from "../../../../components/layout/Default";
import Statistcs from "../../../../components/section/Statistics";
import OverviewAdmin from "../../../../components/section/Overview/Admin";

const HomeAdmin = () => {
  return (
    <Layout>
      <div id="home-wrapper">
        <OverviewAdmin />
        <Statistcs />
      </div>
    </Layout>
  );
};

export default HomeAdmin;
