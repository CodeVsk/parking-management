import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import dashboardRoutes from "../../../data/dashboard-routes.json";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

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
      {dashboardRoutes["ADMIN"].map(
        (
          routes,
          index //DEFAULT OR ADMIN
        ) => (
          <Link key={index} to={routes.uri} className="navbar-item">
            <i className={routes.icon} />
            {routes.text}
          </Link>
        )
      )}
    </Nav>
  );
};

export default Sidebar;
