import React from "react";
import "./index.css";
import { Layout } from "../../../../components/layout/Default";
import Overview from "../../../../components/section/Overview";
import Statistcs from "../../../../components/section/Statistics";

const HomeAdmin = () => {
  return (
    <Layout>
      <div id="home-wrapper">
        <Overview />
        <Statistcs />
      </div>
    </Layout>
  );
};

export default HomeAdmin;
