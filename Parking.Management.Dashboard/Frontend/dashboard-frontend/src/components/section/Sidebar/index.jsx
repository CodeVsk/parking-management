import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import dashboardRoutes from "../../../data/dashboard-routes.json";

const Sidebar = () => {
  return (
    <Nav className="flex-column">
      <Nav.Item className="align-self-center">
        <img
          width="150"
          height="150"
          src="/logo-unip.svg"
          alt="Universidade Paulista - Parking Management"
        />
      </Nav.Item>
      {dashboardRoutes["user"].map((routes, index) => (
        <Link to={routes.uri} className="navbar-item">
          <i className={routes.icon} />
          {routes.text}
        </Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
