import React from "react";
import "./index.css";
import { Layout } from "../../../../components/layout/Default";
import QrCode from "../../../../components/section/QrCode";
import OverviewUser from "../../../../components/section/Overview/User";

const HomeUser = () => {
  return (
    <Layout>
      <div id="home-wrapper">
        <OverviewUser />
        <QrCode />
      </div>
    </Layout>
  );
};

export default HomeUser;
